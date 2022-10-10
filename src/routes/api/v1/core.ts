import express, { Express, Request, Response, NextFunction } from 'express';
import { Empty, EntryIdent, EntryDetail, Transaction, APIResponse, Entry } from './state';
const core = express.Router();

core.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Core /GET response');
  }
);

module.exports = core;
