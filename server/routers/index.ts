import { adminProcedure, t } from "../trpc";
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
    secretData:adminProcedure.query(({ctx})=>{
      console.log(ctx.user)
      return "seccret data"
    }),
  users: userRouter,
});

export const mergedRouter = t.mergeRouters(appRouter, userRouter);
