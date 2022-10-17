import Koa from "koa";
import { Entry } from "../state";

export function getUserId (ctx: Koa.Context): string {
  return "dummy";
}

export function getEntry (ctx: Koa.Context): Entry {
  const dummy: Entry = {
    id: "0",
    date: new Date(),
    payee: "dummy",
    transactions: [],
    comments: []
  }
  return dummy;
}
