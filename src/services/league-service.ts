import axios from 'axios';
import dotenv from 'dotenv';
import { ILeagueDetail } from '../interfaces';

dotenv.config();

const leagueService = axios.create({
  baseURL: 'https://tr1.api.riotgames.com/lol/league/v4',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }
});

export const getLeagueDetail = async (encryptedSummonerId):Promise<ILeagueDetail> => {
  const response = await leagueService.get(`/entries/by-summoner/${encryptedSummonerId}`);
  return response.data;
};

export const getLeagueUserList = async (matchType:string, ranked:string, level:number) => {
  const romenNumbers:string[] = ['I', 'II', 'III', 'IV'];
  const convertToRomenNumbers = romenNumbers[level - 1];
  const response = await leagueService.get(`/entries/${matchType}/${ranked}/${convertToRomenNumbers}?page=1`);
  return response.data;
};
