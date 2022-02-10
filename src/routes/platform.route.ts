import Router from 'express';
import { freeChampionsIdsController } from '../controllers/global-controller';
import { allChampionsInfosController } from './../controllers/global-controller';
const platformRouter = Router();

platformRouter.get('/freechampionsids', freeChampionsIdsController);

platformRouter.get('/allchampionsinfos', allChampionsInfosController);

export default platformRouter;

