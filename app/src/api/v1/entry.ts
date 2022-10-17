import Router from "koa-router";
import Koa from "koa";
import { fetchEntry, removeEntry, writeEntry } from "./helper/common";

const entry: Router = new Router();

async function addEntry (ctx: Koa.Context, next: Function) {
  ctx.body = writeEntry(ctx);
  await next();
}

async function viewEntry (ctx: Koa.Context, next: Function) {
  ctx.body = fetchEntry(ctx);
  await next();
}

async function deleteEntry (ctx: Koa.Context, next: Function) {
  ctx.body = removeEntry(ctx);
  await next();
}

async function modifyEntry (ctx: Koa.Context, next: Function) {
  ctx.body = writeEntry(ctx);
  await next();
}

entry.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello Entry!" };
  await next();
});

entry.get("/get", viewEntry);
entry.post("/add", addEntry);
entry.put("/put", modifyEntry);
entry.delete("/delete", deleteEntry);

export = entry;
