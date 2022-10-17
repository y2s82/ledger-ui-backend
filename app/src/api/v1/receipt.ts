import Router from "koa-router";
import Koa from "koa";
import { getUserId, getEntry } from "./helper/common";
import { saveReceipt } from "./helper/image";
import { Entry } from "./state";

const receipt: Router = new Router();

async function * addReceipt (ctx: Koa.Context, next: Function) {
  const id = getUserId(ctx);
  const inferEntry = saveReceipt(id,ctx.files.file[0].buffer);
  ctx.body = inferEntry;
  await next();
}

receipt.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello Receipt!" };
  await next();
});

receipt.post("/add", addReceipt);

export = receipt;
