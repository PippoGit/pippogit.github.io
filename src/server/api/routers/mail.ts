import { createTRPCRouter, publicProcedure } from "../trpc";
import { sendMail } from "../mail-service";
import { contactsSchema } from "../../zod-schemas";

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
