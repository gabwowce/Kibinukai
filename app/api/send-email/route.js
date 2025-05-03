
import nodemailer from "nodemailer";
import { rateLimit } from "@/utils/rateLimit";
export async function POST(request) {
  const body = await request.json();

  const {
    recaptchaToken,
    name,
    phone,
    email,
    contactType,
    orderType,
    deliveryType,
    address,
    deliveryDate,
    comments,
    cartItems,
    surname,
  } = body;

  if (surname?.trim()) {
    return new Response("Bot activity detected", { status: 400 });
  }

  /* reCAPTCHA tokenas privalomas */
  if (!recaptchaToken) {
    return new Response("reCAPTCHA token missing", { status: 400 });
  }

  /* ① IP pasiimame iš request.headers ⇣ */
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  /* Rate-limit */
  const allowed = rateLimit(ip, 30_000); // 1 k./30 s
  if (!allowed) {
    return new Response("Per daug užklausų. Palaukite šiek tiek.", { status: 429 });
  }
  if (body.surname && body.surname.trim() !== "") {
    return new Response("Bot activity detected", { status: 400 });
  }
  
  if (!recaptchaToken) {
    return new Response("reCAPTCHA token missing", { status: 400 });
  }


  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success || (recaptchaData.score && recaptchaData.score < 0.5)) {
    return new Response("reCAPTCHA verification failed", { status: 403 });
  }


  try {
    

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Sukuriame dinaminį HTML krepšelio turiniui
    const cartRows = cartItems
    .map(
      (item) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.pavadinimas}</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${Number(item.kaina).toFixed(2)} €</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${(Number(item.kaina) * item.quantity).toFixed(2)} €</td>
        </tr>
      `
    )
    .join("");


    // 🔤 Vertimų žodynėlis
  const translate = {
    contactType: {
      telefonu: "Telefonu",
      elPastu: "El. paštu",
      nesvarbu: "Nesvarbu",
    },
    orderType: {
      skubus: "Kuo greičiau",
      isankstinis: "Išankstinis užsakymas",
    },
    deliveryType: {
      atsiimti: "Atsiėmimas",
      pristatymas: "Pristatymas į namus",
    },
  };
  const translatedContactType = translate.contactType[contactType] || contactType;
  const translatedOrderType = translate.orderType[orderType] || orderType;
  const translatedDeliveryType = translate.deliveryType[deliveryType] || deliveryType;
  

    const emailHtmlContent = `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #D9480F;">Naujas užsakymas iš svetainės</h2>

  <!-- Kontaktinė informacija lentelė -->
  <h3 style="margin-top: 30px;">Kontaktinė informacija</h3>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
    <tbody>
      <tr style="background-color: #fef3c7;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Vardas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Telefonas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
      </tr>
      <tr style="background-color: #fef3c7;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>El. paštas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${email || "Nepateikta"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Kontaktavimo būdas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${translatedContactType}</td>
      </tr>
      <tr style="background-color: #fef3c7;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Užsakymo tipas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${translatedOrderType}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Pristatymo būdas:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${translatedDeliveryType}</td>
      </tr>
      ${
        orderType === "isankstinis"
          ? `<tr style="background-color: #fef3c7;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Pageidaujama pristatymo data:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deliveryDate || "Nenurodyta"}</td>
            </tr>`
          : ""
      }
      ${
        deliveryType === "pristatymas"
          ? `<tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Adresas:</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">
                ${address.city}, ${address.street} ${address.houseNumber}${address.apartment ? ", Butas: " + address.apartment : ""}${address.postalCode ? ", Pašto kodas: " + address.postalCode : ""}${address.addressNotes ? `<br/>Pastabos: ${address.addressNotes}` : ""}

              </td>
            </tr>`
          : ""
      }
      <tr style="background-color: #fef3c7;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Komentarai:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${comments || "Nėra"}</td>
      </tr>
    </tbody>
  </table>

  <!-- Krepšelio turinys -->
  <h3>Krepšelio turinys</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="background-color: #f8f8f8;">
        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Produktas</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Kiekis</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Vnt. Kaina</th>
        <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Suma</th>
      </tr>
    </thead>
    <tbody>
      ${cartItems
        .map(
          (item) => `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">${item.pavadinimas}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${Number(item.kaina).toFixed(2)} €</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${(Number(item.kaina) * item.quantity).toFixed(2)} €</td>
            </tr>
          `
        )
        .join("")}
      <tr style="background-color: #f8f8f8;">
        <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Viso:</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>${cartItems.reduce((sum, item) => sum + Number(item.kaina) * item.quantity, 0).toFixed(2)} €</strong></td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 30px;">Gavote šį laišką, nes klientas pateikė naują užsakymą svetainėje <strong>Kibinukai Vilniuje</strong>.</p>
</div>
`;


    await transporter.sendMail({
      from: `"Kibinukai Užsakymas" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Naujas užsakymas iš KibinaiVilnius svetainės",
      html: emailHtmlContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
