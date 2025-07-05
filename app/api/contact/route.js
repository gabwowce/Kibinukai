import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA token missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Tikrinam pas Google
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();
    console.log("‣ reCAPTCHA API atsakymas:", recaptchaData);
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA failed" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #D9480F;">Nauja žinutė iš kontaktų formos</h2>
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Žinutė:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Kontaktų forma" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Nauja žinutė iš KibinaiVilnius svetainės",
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Klaida siunčiant kontaktų formą:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
