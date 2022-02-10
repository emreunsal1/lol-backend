import { getLeagueUserList } from '../services/league-service';

export const leagueUserListController = async (req, res) => {
  const { matchtype, ranked, level } = req.params;
  const response = await getLeagueUserList(matchtype, ranked, level);
  res.send(response);
};

