import { Router } from 'express';
import { freeChampionsIdsController, allChampionsInfosController } from '../controllers/champion-controller';
import { getChampionProfileIconController } from './../controllers/champion-controller';

const championsRouter = Router();

championsRouter.get('/', allChampionsInfosController);
championsRouter.get('/free', freeChampionsIdsController);
championsRouter.get('/icon/:name', getChampionProfileIconController);

export default championsRouter;

