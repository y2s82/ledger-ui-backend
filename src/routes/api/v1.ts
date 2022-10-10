import express, { Express, Request, Response, NextFunction } from 'express';
const v1api = express.Router();

v1api.use('/core', require('./v1/core'));
v1api.use('/receipt', require('./v1/receipt'));

module.exports = v1api;
