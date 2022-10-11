import express, { Express, Request, Response, NextFunction } from 'express';
import { Empty, EntryIdent, EntryDetail, Transaction, APIResponse, Entry } from './state';
const receipt = express.Router();

receipt.get<EntryIdent[], APIResponse<Entry[]>> ('/:id', (req, res, next) => {
    res.json(
      {
        data: [],
        message: "dummy"
      }
    );
  }
);

module.exports = receipt;
