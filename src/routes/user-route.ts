import { Router } from 'express';
import { userChampionMasteriesController, userInfoController, userLastTenMathesController, userLeagueController, userMatchIdsController } from '../controllers/user-controller';

const userRouter = Router();

userRouter.get('/:username', userInfoController);
userRouter.get('/:username/league', userLeagueController);
userRouter.get('/:username/matches', userMatchIdsController);
userRouter.get('/:username/masteries/:count', userChampionMasteriesController);
userRouter.get('/:username/last-matches/', userLastTenMathesController);

export default userRouter;
