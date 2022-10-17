import Koa from "koa";
import KoaBody from "koa-body";
import { Entry, Transaction, QueryData } from "../state";
import * as Dao from "../dao/dao";

export function getUserId (ctx: Koa.Context): string {
  return "dummy";
}

export function getEntry (ctx: Koa.Context): Entry {
  return ctx.request.body.entry;
}

export function getQuery (ctx: Koa.Context): QueryData {
  return ctx.request.body.queryData;
}

export function fetchEntry (ctx: Koa.Context): Entry {
  const id = getUserId(ctx);
  const queryData = getQuery(ctx);
  return Dao.fetchEntry(id, queryData);
}

export function removeEntry (ctx: Koa.Context): QueryData{
  const id = getUserId(ctx);
  const queryData = getQuery(ctx);
  return Dao.deleteEntry(id, queryData);
}

export function writeEntry (ctx: Koa.Context): Entry {
  const id = getUserId(ctx);
  const entry = getEntry(ctx);
  return Dao.writeEntry(id, entry);
}
