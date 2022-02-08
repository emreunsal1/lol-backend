import express from 'express';
import dotenv from 'dotenv';
import { getUser } from './services/user-service';
import { getLastMatchIdsWithUserName, getLeagueDetailWithUsername } from './utils/chain';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  const response = await getUser(username);
  res.send(response);
});

app.get('/user/:username/league', async (req, res) => {
  const { username } = req.params;
  const leagueDetail = await getLeagueDetailWithUsername(username);
  res.send(leagueDetail);
});

app.get('/user/:username/matches', async (req, res) => {
  const { username } = req.params;
  const leagueDetail = await getLastMatchIdsWithUserName(username);
  res.send(leagueDetail);
});

export default app;

