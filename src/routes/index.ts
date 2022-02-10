import { Router } from 'express';
import leagueRouter from './league-route';
import matchRouter from './match-route';
import championsRouter from './platform.route';
import userRouter from './user-route';

const indexRouter = Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/match', matchRouter);
indexRouter.use('/league', leagueRouter);
indexRouter.use('/champions', championsRouter);

export default indexRouter;
