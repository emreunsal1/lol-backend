import { getLeagueUserList } from '../services/league-service';

export const leagueUserListController = async (req, res) => {
  try {
    const { matchtype, ranked, level } = req.params;
    const response = await getLeagueUserList(matchtype, ranked, level);
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
};

