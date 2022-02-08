
import { getLeagueDetail } from '../services/league-service';
import { getLastMatchesWithPuuid } from '../services/match-service';
import { getUser } from '../services/user-service';

export const getLeagueDetailWithUsername = async (username: string) => {
  const userInfo = await getUser(username);
  return getLeagueDetail(userInfo.id);
};

export const getLastMatchIdsWithUserName = async (username: string) => {
  const userInfo = await getUser(username);
  return getLastMatchesWithPuuid(userInfo.puuid);
};
