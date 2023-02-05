import { SMTPClient } from "emailjs";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const inputMail = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  body: z.string().min(1).max(1000),
});

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(inputMail).mutation(async ({ input }) => {
    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.EMAIL_PASSWORD,
      host: "smtp.gmail.com",
      ssl: true,
    });

    const res = await client.sendAsync({
      text: input.body,
      from: input.email,
      to: process.env.EMAIL ?? "",
      subject: `A message from ${input.name} - ${input.email}`,
    });

    return res
      ? {
          success: true,
        }
      : { error: true };
  }),
});
