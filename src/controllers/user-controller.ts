import { getMatchDetailWithMatcId } from '../services/match-service';
import { getUser } from '../services/user-service';
import { getLastMatchIdsWithUserName, getLeagueDetailWithUsername } from '../utils/chain';
import { getChampionMasteries } from './../services/champions-service';
import { getLastTenMatchWidthMatchIds } from './../services/match-service';

export const userInfoController = async (req, res) => {
  try {
    const { username } = req.params;
    const response = await getUser(username);
    res.send(response);
  } catch (error) {
    res.status(404).send('User Not Found');
  }
};

export const userLeagueController = async (req, res) => {
  const { username } = req.params;
  const leagueDetail = await getLeagueDetailWithUsername(username);
  res.send(leagueDetail);
};

export const userMatchIdsController = async (req, res) => {
  const { username } = req.params;
  const matchIds = await getLastMatchIdsWithUserName(username);
  res.send(matchIds);
};
export const userChampionMasteriesController = async (req, res) => {
  const { username, count } = req.params;
  const userInfo = await getUser(username);
  const championMasteries = await getChampionMasteries(userInfo.id);
  const data = championMasteries.slice(0, count);
  res.send(data);
};

export const userMatchDetailController = async (req, res) => {
  const { matchid } = req.params;
  const matchDetail = await getMatchDetailWithMatcId(matchid);
  res.send(matchDetail);
};

export const userLastTenMathesController = async (req, res) => {
  const { username } = req.params;
  const matchIds = await getLastMatchIdsWithUserName(username);
  const matchDetails = await getLastTenMatchWidthMatchIds(matchIds);
  res.send(matchDetails);
};
