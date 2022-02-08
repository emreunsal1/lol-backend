import dotenv from 'dotenv';
import axios from 'axios';
import { IChampionMastery } from './../interfaces';

dotenv.config();

const userService = axios.create({
  baseURL: 'https://tr1.api.riotgames.com/lol/champion-mastery/v4',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }

});

export const getChampionMasteries = async (encryptedSummonerId:string):Promise<IChampionMastery[]> => {
  const response = await userService.get(`/champion-masteries/by-summoner/${encryptedSummonerId}`);
  return response.data;
};
