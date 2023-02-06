import nodemailer from "nodemailer";

interface Mail {
  senderName: string;
  from: string;
  body: string;
}

export async function sendMail({ senderName, from, body }: Mail) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    logger: true,
  });

  await transporter.sendMail({
    from: `${senderName} <${from}>`,
    to: process.env.EMAIL,
    subject: `A message from ${senderName} - ${from}`,
    text: body,
  });
}
