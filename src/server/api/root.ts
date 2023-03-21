import { createTRPCRouter } from "./trpc";
import { mailRouter } from "./routers/mail";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  mail: mailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;