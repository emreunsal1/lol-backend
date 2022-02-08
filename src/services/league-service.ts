import axios from 'axios';
import dotenv from 'dotenv';
import { ILeagueDetail } from '../interfaces';

dotenv.config();

const userService = axios.create({
  baseURL: 'https://tr1.api.riotgames.com/lol/league/v4',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }

});

export const getLeagueDetail = async (encryptedSummonerId):Promise<ILeagueDetail> => {
  const response = await userService.get(`/entries/by-summoner/${encryptedSummonerId}`);
  return response.data;
};
