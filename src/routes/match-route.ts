import { Router } from 'express';
import { userMatchDetailController } from '../controllers/user-controller';
const matchRouter = Router();

matchRouter.get('/detail/:matchid', userMatchDetailController);

export default matchRouter;
