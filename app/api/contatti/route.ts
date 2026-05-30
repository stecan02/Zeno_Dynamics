import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nome, email, azienda, messaggio } = body;

    await resend.emails.send({
      from: "Zeno Contact <noreply@zenodynamicslab.com>",
      to: "info@zenodynamicslab.com",
      subject: `Nuovo contatto da ${nome}`,
      html: `
        <h2>Nuovo messaggio dal sito</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Azienda:</b> ${azienda}</p>
        <p><b>Messaggio:</b> ${messaggio}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}