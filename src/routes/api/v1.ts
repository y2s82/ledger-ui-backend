import express, { Express, Request, Response, NextFunction } from 'express';
const v1api = express.Router();

v1api.use('/user', require('./v1/user'));
v1api.use('/receipt', require('./v1/receipt'));

module.exports = v1api;
