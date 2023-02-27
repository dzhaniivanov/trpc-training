import { t } from "../trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  log: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;

      throw new Error("Invalid input:expected string");
    })
    .mutation((req) => {
      console.log(`client side :${req.input}`);
      return true;
    }),
  users: userRouter,
});

export const mergedRouter = t.mergeRouters(appRouter, userRouter);
