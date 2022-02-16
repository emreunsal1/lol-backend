import { getAllChampionsInfo, getTheWeekFreeChampionIds } from '../services/platform-service';
import { getChampionsFromResponse } from '../utils/champion';
import { getChampionsProfileIcon } from './../services/platform-service';

export const freeChampionsIdsController = async (req, res) => {
  const { freeChampionIds } = await getTheWeekFreeChampionIds();
  const { data } = await getAllChampionsInfo();

  const keyMap = {};
  Object.entries(data).forEach((champ: any) => {
    keyMap[champ[1].key] = champ[1];
  });

  const result = freeChampionIds.map(id => keyMap[id]);
  res.send(result);
};

export const allChampionsInfosController = async (req, res) => {
  const response = await getAllChampionsInfo();
  const result = getChampionsFromResponse(response.data);

  res.send(result);
};

export const getChampionProfileIconController = async (req, res) => {
  const { name } = req.params;
  const response = await getChampionsProfileIcon(name);
  console.log(response);
  res.send(response);
};

