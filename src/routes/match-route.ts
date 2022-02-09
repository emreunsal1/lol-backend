import Router from 'express';
import { userLastTenMathesController, userMatchDetailController } from '../controllers/user-controller';
const matchRouter = Router();

matchRouter.get('/detail/:matchid', userMatchDetailController);
matchRouter.post('/last/matches', userLastTenMathesController);

export default matchRouter;
