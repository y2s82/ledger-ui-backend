import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import api from "./api/api";

const app: Koa = new Koa();
const router: Router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };
  await next();
});
router.use('/api', api.routes(), api.allowedMethods());

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => { console.log("Koa started"); });
