import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "franklinnjiepi07@gmail.com",
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">
          <h2 style="color:#7c3aed;margin-bottom:4px;">Nouveau message depuis votre portfolio</h2>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px;width:100px;">Nom</td>
              <td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td>
              <td style="padding:8px 0;color:#111827;">
                <a href="mailto:${email}" style="color:#7c3aed;">${email}</a>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />

          <h3 style="color:#374151;font-size:15px;margin-bottom:8px;">Message :</h3>
          <div style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#374151;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</div>

          <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
            Envoyé depuis franklinnjiepi.dev — Répondez directement à cet email pour contacter ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
