import { Router } from 'express';
import { freeChampionsIdsController, allChampionsInfosController } from '../controllers/champion-controller';

const championsRouter = Router();

championsRouter.get('/', allChampionsInfosController);
championsRouter.get('/free', freeChampionsIdsController);

export default championsRouter;

