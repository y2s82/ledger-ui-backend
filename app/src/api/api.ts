import Router from "koa-router";
import v1api from "./v1/v1api";

const api: Router = new Router();

api.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };
  await next();
});
api.use('/v1', v1api.routes(), v1api.allowedMethods());

export = api;
