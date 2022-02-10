import { Router } from 'express';
import { leagueUserList } from '../controllers/global-controller';

const leagueRouter = Router();

leagueRouter.get('/list/:matchtype/:ranked/:level', leagueUserList);
export default leagueRouter;
