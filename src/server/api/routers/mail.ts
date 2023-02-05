import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const inputMail = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  body: z.string().min(1).max(1000),
});

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(inputMail).mutation(({ input }) => {
    return {
      greeting: `${input.body}`,
    };
  }),
});
