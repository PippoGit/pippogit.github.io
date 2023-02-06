import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { sendMail } from "../mail-service";

const inputMail = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  body: z.string().min(1).max(1000),
});

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(inputMail).mutation(async ({ input }) => {
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
