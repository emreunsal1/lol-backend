import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user-route';
import matchRouter from './routes/match-route';
import leagueRouter from './routes/laegue-collocation-route';
import platformRouter from './routes/platform.route';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/match', matchRouter);
app.use('/league', leagueRouter);
app.use('/platform', platformRouter);

export default app;
