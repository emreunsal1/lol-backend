const createMatch = (match: Match): Match => {
  return match;
};

interface Player {
  name: string,
  minion: number,
  level: number,
  kill: number,
  assist: number,
}

interface Match {
  name: string,
  map: MatchMapsEnum,
  createdAt: number,
  players: Player[]
}

enum MatchMapsEnum {
  SihirdaVadisi = 'Sihirdar Vadisi',
  URF = 'URF',
  KezzapTepe = 'Kezzap tepe',
}


const players: Player[] = [
  {
    name: 'emre',
    assist: 5,
    kill: 31,
    level: 20000,
    minion: 500000000000,
  },
];
const match: Match = {
  createdAt: 12,
  map: MatchMapsEnum.KezzapTepe,
  name: 'urf',
  players: players,
};

console.log(createMatch(match));
