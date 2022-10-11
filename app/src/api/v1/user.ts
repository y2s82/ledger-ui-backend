import Router from "koa-router";

const user: Router = new Router();
user.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };
  await next();
});

export = user;
