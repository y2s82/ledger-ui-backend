import { IdType, Entry, Transaction, QueryData } from "../state";

export function fetchEntry (id: string, queryData: QueryData): Entry {
  return {id: "0", date: new Date("2022/01/01"), payee: "dummy", transactions: [], comments: []};
}
export function deleteEntry (id: string, queryData: QueryData): QueryData{
  return {entryId: "0", type: IdType.Entry, status: { code: 0, comment: "delete success"}};
}
export function writeEntry (id: string, entry: Entry): Entry {
  return {};
}
