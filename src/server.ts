import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user-route';
import matchRouter from './routes/match-route';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/match', matchRouter);

export default app;
