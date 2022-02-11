import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', indexRouter);

export default app;
