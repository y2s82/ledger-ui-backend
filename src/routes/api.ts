import express, { Express, Request, Response, NextFunction } from 'express';
const router = express.Router();

router.use('/v1', require('./api/v1'));

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
