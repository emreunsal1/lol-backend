import { Router } from 'express';
import { leagueUserListController } from '../controllers/league-controller';

const leagueRouter = Router();

leagueRouter.get('/list/:matchtype/:ranked/:level', leagueUserListController);

export default leagueRouter;
