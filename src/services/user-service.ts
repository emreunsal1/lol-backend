import axios from 'axios';
import dotenv from 'dotenv';
import { IUserInfo } from '../interfaces';

dotenv.config();

const userService = axios.create({
  baseURL: 'https://tr1.api.riotgames.com/lol/summoner/v4/',
  headers: { 'X-Riot-Token': process.env.API_KEY as string }
});

export const getUser = async (username:string):Promise<IUserInfo> => {
  const response = await userService.get(`/summoners/by-name/${username}`);
  return response.data;
};
