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
  try {
    const { username } = req.params;
    const leagueDetail = await getLeagueDetailWithUsername(username);
    res.send(leagueDetail);
  } catch (error) {
    res.send(error.message);
  }
};

export const userMatchIdsController = async (req, res) => {
  try {
    const { username } = req.params;
    const matchIds = await getLastMatchIdsWithUserName(username);
    res.send(matchIds);
  } catch (error) {
    res.send(error.message);
  }
};
export const userChampionMasteriesController = async (req, res) => {
  try {
    const { username, count } = req.params;
    const userInfo = await getUser(username);
    const championMasteries = await getChampionMasteries(userInfo.id);
    const data = championMasteries.slice(0, count);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

export const userMatchDetailController = async (req, res) => {
  try {
    const { matchid } = req.params;
    const matchDetail = await getMatchDetailWithMatcId(matchid);
    res.send(matchDetail);
  } catch (error) {
    res.send(error.message);
  }
};

export const userLastTenMathesController = async (req, res) => {
  try {
    const { username } = req.params;
    const matchIds = await getLastMatchIdsWithUserName(username);
    const matchDetails = await getLastTenMatchWidthMatchIds(matchIds);
    res.send(matchDetails);
  } catch (error) {
    res.send(error.message);
  }
};
