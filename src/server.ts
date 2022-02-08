import express from 'express';
import dotenv from 'dotenv';
import { userInfoController, userLeagueController, userMatchIdsController } from './controllers/user-controller';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/user/:username', userInfoController);

app.get('/user/:username/league', userLeagueController);

app.get('/user/:username/matches', userMatchIdsController);

export default app;

