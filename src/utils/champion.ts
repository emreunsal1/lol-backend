import { IChampion } from './../interfaces';

export const getChampionsFromResponse = (data:any):IChampion[] => (Object.entries(data) as any).map((array) => (array[1]));
