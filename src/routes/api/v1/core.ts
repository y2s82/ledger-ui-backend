import express, { Express, Request, Response, NextFunction } from 'express';
const core = express.Router();

core.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Core /GET response');
  }
);

module.exports = core;
