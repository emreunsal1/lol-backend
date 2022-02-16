import { getAllChampionsInfo, getTheWeekFreeChampionIds } from '../services/platform-service';
import { getChampionsFromResponse } from '../utils/champion';

export const freeChampionsIdsController = async (req, res) => {
  try {
    const { freeChampionIds } = await getTheWeekFreeChampionIds();
    const { data } = await getAllChampionsInfo();

    const keyMap = {};
    Object.entries(data).forEach((champ: any) => {
      keyMap[champ[1].key] = champ[1];
    });

    const result = freeChampionIds.map(id => keyMap[id]);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

export const allChampionsInfosController = async (req, res) => {
  try {
    const response = await getAllChampionsInfo();
    const result = getChampionsFromResponse(response.data);

    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
