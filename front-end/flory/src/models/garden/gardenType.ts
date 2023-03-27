export type gardenType = {
  id: number | null;
  gardenPath: string | null;
  nickname: string;
  artist: string | null;
  title: string | null;
  deadline: string | null;
};

export type PositionType = {
  flowerPosition: {
    x: number;
    y: number;
    z: number;
  };
};
