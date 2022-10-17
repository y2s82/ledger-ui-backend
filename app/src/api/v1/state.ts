export interface Entry {
  id?: string;
  date?: Date;
  payee?: string;
  transactions?: transaction[];
  comments?: string[];
}

export interface transaction {
  account: string;
  amount: number;
  unit: string;
}

export interface ReceiptReply {
  entry?: Entry;
  receiptUrl: string;
}
