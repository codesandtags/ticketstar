import express, { Request, Response } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import logger from './logger';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middlewares
app.use(json());
app.use(cors());

// Adding routs
app.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Oigan a mi tio, ome gonorrea, ome! 🙈',
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT} 🚀 ...`);
});
