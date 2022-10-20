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
  /**
   * code: numeric representation following Unix return - 0 is success
   * comment: any additional information that may be useful for UX
   */
  code: number;
  comment?: string;
}

export interface QueryData {
  entryId: string;
  detail?: string;
  status?: Status;
}
