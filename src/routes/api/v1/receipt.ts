import express, { Express, Request, Response, NextFunction } from 'express';
const receipt = express.Router();

receipt.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Receipt /GET response');
  }
);

module.exports = receipt;
