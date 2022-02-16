import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const platformService = axios.create({
  baseURL: 'https://tr1.api.riotgames.com/lol/platform/v3',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }

});

export const getTheWeekFreeChampionIds = async () => {
  const response = await platformService.get('/champion-rotations');
  return response.data;
};

export const getAllChampionsInfo = async () => {
  const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json');
  return response.data;
};

export const getChampionsProfileIcon = async (characterName:string) => {
  const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${characterName}.png`);
  return response.data;
};
