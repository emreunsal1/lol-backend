//
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const matchService = axios.create({
  baseURL: 'https://europe.api.riotgames.com',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }
});

export const getLastMatchesWithPuuid = async (puuid:string): Promise<string[]> => {
  const response = await matchService.get(`/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10`);
  return response.data;
};

export const getMatchDetailWithMatcId = async (matchId:string):Promise<string[]> => {
  const response = await matchService.get(`/lol/match/v5/matches/${matchId}`);
  return response.data;
};

export const getLastTenMatchWidthMatchIds = async (lastMatchIds:string[]) => {
  const responsePromise = lastMatchIds.map((matchId) => {
    return matchService.get(`/lol/match/v5/matches/${matchId}`);
  });
  const response = await Promise.all(responsePromise);
  const data = response.map((item) => item.data);
  return data;
};
