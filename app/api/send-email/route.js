import nodemailer from "nodemailer";
import { rateLimit } from "@/utils/rateLimit";
import path from "path";

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

  if (surname?.trim())
    return new Response("Bot activity detected", { status: 400 });
  if (!recaptchaToken) {
    return new Response(
      JSON.stringify({ success: false, error: "reCAPTCHA token missing" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const allowed = rateLimit(ip, 30_000); // 1 request per 30s
  if (!allowed)
    return new Response("Per daug užklausų. Palaukite.", { status: 429 });

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    }
  );

  const recaptchaData = await recaptchaRes.json();
  if (
    !recaptchaData.success ||
    (recaptchaData.score && recaptchaData.score < 0.5)
  ) {
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

    const logoPath = path.resolve(process.cwd(), "public/assets/logo.png");

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

    const translatedContactType =
      translate.contactType[contactType] || contactType;
    const translatedOrderType = translate.orderType[orderType] || orderType;
    const translatedDeliveryType =
      translate.deliveryType[deliveryType] || deliveryType;

    const cartRows = cartItems
      .map(
        (item) => `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">${
          item.pavadinimas
        }</td>
        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${
          item.quantity
        }</td>
        <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${Number(
          item.kaina
        ).toFixed(2)} €</td>
        <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${(
          Number(item.kaina) * item.quantity
        ).toFixed(2)} €</td>
      </tr>
    `
      )
      .join("");

    const total = cartItems
      .reduce((sum, item) => sum + Number(item.kaina) * item.quantity, 0)
      .toFixed(2);

    const emailHtmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #D9480F;">Naujas užsakymas iš svetainės</h2>
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>Telefonas:</strong> ${phone}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Kontaktavimo būdas:</strong> ${translatedContactType}</p>
        <p><strong>Užsakymo tipas:</strong> ${translatedOrderType}</p>
        <p><strong>Pristatymo būdas:</strong> ${translatedDeliveryType}</p>
        ${
          deliveryDate
            ? `<p><strong>Pageidaujama data:</strong> ${deliveryDate}</p>`
            : ""
        }
        ${
          deliveryType === "pristatymas" && address
            ? `<p><strong>Adresas:</strong> ${address.city}, ${address.street} ${address.houseNumber}</p>`
            : ""
        }
        <p><strong>Komentarai:</strong> ${comments || "Nėra"}</p>
        <h3>Krepšelio turinys:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd;">Produktas</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Kiekis</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Vnt. kaina</th>
              <th style="padding: 8px; border: 1px solid #ddd;">Suma</th>
            </tr>
          </thead>
          <tbody>
            ${cartRows}
            <tr style="background: #f8f8f8;">
              <td colspan="3" style="text-align: right; padding: 8px; border: 1px solid #ddd;"><strong>Viso:</strong></td>
              <td style="text-align: right; padding: 8px; border: 1px solid #ddd;"><strong>${total} €</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const laiškoHtmlSuStiliumi = `
<div style="font-family: Arial, sans-serif; background-color: #fff8f2; padding: 40px; text-align: center; color: #3d2c1e;">
  <p style="font-size: 14px; margin-bottom: 20px;">
    Jūsų užsakymas sėkmingai gautas!
  </p>


  <h2 style="color: #D9480F;">Užsakymas gautas</h2>

  <p style="font-size: 16px; margin-top: 20px;">
    Sveiki, <b>${name}</b>!<br><br>
    Dėkojame už pateiktą užsakymą.<br>
    Gavome jį ir artimiausiu metu su Jumis susisieksime patikslinti detalių.
  </p>

  <p style="margin-top: 40px; font-style: italic; color: #7a5a42;">
    Gražios dienos!<br/>
    <b>Kibinukai Vilniuje</b> komanda
  </p>
    <img src="cid:kibinukai-logo" alt="Kibinukai logotipas" style="width: 100px; margin: 20px auto;" />
</div>
`;

    await transporter.sendMail({
      from: `"Kibinukai Užsakymas" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Naujas užsakymas iš KibinaiVilnius svetainės",
      html: emailHtmlContent,
    });

    await transporter.sendMail({
      from: `"Kibinukai Vilniuje" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Užsakymas gautas – netrukus susisieksime",
      html: laiškoHtmlSuStiliumi,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "kibinukai-logo",
        },
      ],
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
