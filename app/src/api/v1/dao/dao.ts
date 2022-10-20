import { Entry, Transaction, QueryData } from "../state";

export function fetchEntry (id: string, queryData: QueryData): Entry {
  return {};
}
export function deleteEntry (id: string, queryData: QueryData): QueryData{
  return {entryId: "0", status: { code: 0, comment: "delete success"}};
}
export function writeEntry (id: string, entry: Entry): Entry {
  return {};
}
