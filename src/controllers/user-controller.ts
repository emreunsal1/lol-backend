import { getUser } from '../services/user-service';
import { getLastMatchIdsWithUserName, getLeagueDetailWithUsername } from '../utils/chain';

export const userInfoController = async (req, res) => {
  const { username } = req.params;
  const response = await getUser(username);
  res.send(response);
};

export const userLeagueController = async (req, res) => {
  const { username } = req.params;
  const leagueDetail = await getLeagueDetailWithUsername(username);
  res.send(leagueDetail);
};

export const userMatchIdsController = async (req, res) => {
  const { username } = req.params;
  const leagueDetail = await getLastMatchIdsWithUserName(username);
  res.send(leagueDetail);
};
