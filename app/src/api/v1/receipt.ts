import Router from "koa-router";

const receipt: Router = new Router();
receipt.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello Receipt!" };
  await next();
});

export = receipt;
