export type gardenType = {
  // 이후 지울거
  id: number | null;
  gardenPath: string | null;
  artist: string | null;
  title: string | null;

  nickname: string;
  userId: number | null;
  gardenId: number | null;
  musicTitle: string | null;
  img: string | null;
  deadline: string;
};

export type PositionType = {
  flowerPosition: {
    x: number;
    y: number;
    z: number;
  };
};
