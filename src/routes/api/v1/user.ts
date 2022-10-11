import express, { Express, Request, Response, NextFunction } from 'express';
const user = express.Router();

user.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('User /GET response');
  }
);

module.exports = user;
