import Router from "koa-router";
import user from "./user";
import receipt from "./receipt";

const v1api: Router = new Router();

v1api.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello v1!" };
  await next();
});

v1api.use('/user', user.routes(), user.allowedMethods());
v1api.use('/receipt', receipt.routes(), receipt.allowedMethods());

export = v1api;
