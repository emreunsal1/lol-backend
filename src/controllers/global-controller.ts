import { getLeagueUserList } from '../services/league-service';
import { getAllChampionsInfo, getTheWeekFreeChampionIds } from './../services/platform-service';

export const leagueUserList = async (req, res) => {
  const { matchtype, ranked, level } = req.params;
  const response = await getLeagueUserList(matchtype, ranked, level);
  res.send(response);
};

export const freeChampionsIdsController = async (req, res) => {
  const response = await getTheWeekFreeChampionIds();
  res.send(response);
};

export const allChampionsInfosController = async (req, res) => {
  const response = await getAllChampionsInfo();
  res.send(response);
};

