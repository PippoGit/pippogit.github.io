import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, publicProcedure } from "../trpc";

const inputMail = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  body: z.string().min(1).max(1000),
});

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(inputMail).mutation(async ({ input }) => {
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

    const res = await transporter.sendMail({
      from: `${input.name} <${input.email}>`,
      to: process.env.EMAIL,
      subject: `A message from ${input.name} - ${input.email}`,
      text: input.body,
    });

    return res
      ? {
          success: true,
        }
      : { error: true };
  }),
});
