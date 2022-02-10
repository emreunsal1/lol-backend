import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api', indexRouter);

export default app;
