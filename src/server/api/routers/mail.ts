import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { sendMail } from "../mail-service";

const contactsSchema = z.object({
  name: z.string().min(1, "Full name is required.").max(255),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Email address is invalid.")
    .max(255),
  body: z
    .string()
    .min(1, "The message is required.")
    .max(1000, "Your message is a bit long, isnt it? Use at most 1000 chars."),
});

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(contactsSchema).mutation(async ({ input }) => {
    await sendMail({
      senderName: input.name,
      from: input.email,
      body: input.body,
    });

    return {
      success: true,
    };
  }),
});
