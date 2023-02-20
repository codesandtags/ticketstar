import express from 'express';
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Listening on ${PORT} 🚀 ...`);
});
