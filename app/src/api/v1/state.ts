import Koa from 'koa';

export interface Entry {
  id?: string;
  date?: Date;
  payee?: string;
  transactions?: Transaction[];
  comments?: string[];
}

export interface Transaction {
  account: string;
  amount: number;
  unit: string;
}

export interface ReceiptReply {
  entry?: Entry;
  receiptUrl: string;
  status: Status;
}

export interface Status {
  code: number;
  comment?: string;
}

export interface QueryData {
  entryId: string;
  detail?: string;
  status?: Status;
}
