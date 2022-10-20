import Koa from "koa";
import KoaBody from "koa-body";
import { IdType, EntryReply, Transaction, QueryData } from "../state";
import * as Dao from "../dao/dao";

export function getUserId (ctx: Koa.Context): QueryData {
  return { entryId: "dummy", type: IdType.User, status: { code: 0 } };
}

export function getEntry (ctx: Koa.Context): EntryReply {
  return { entry: ctx.request.body.entry, status: { code: 0 }};
}

export function getQuery (ctx: Koa.Context): QueryData {
  return ctx.request.body.queryData;
}

export function fetchEntry (ctx: Koa.Context): EntryReply {
  let id = getUserId(ctx);
  let queryData = getQuery(ctx);
  let status = { code: 0 };
  return { entry: Dao.fetchEntry(id.entryId, queryData), status: status };
}

export function removeEntry (ctx: Koa.Context): QueryData{
  let id = getUserId(ctx).entryId;
  let queryData = getQuery(ctx);
  return Dao.deleteEntry(id, queryData);
}

export function writeEntry (ctx: Koa.Context): EntryReply {
  let id = getUserId(ctx);
  let entry = getEntry(ctx);
  let status = { code: 0 };
  return { entry: Dao.writeEntry(id.entryId, entry.entry), status: status };
}
