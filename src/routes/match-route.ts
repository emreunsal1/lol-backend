import Router from 'express';
import { userLastTenMathesController, userMatchDetailController } from '../controllers/user-controller';
const matchRouter = Router();

matchRouter.get('/detail/:matchid', userMatchDetailController);
matchRouter.get('/last/', userLastTenMathesController);

export default matchRouter;
