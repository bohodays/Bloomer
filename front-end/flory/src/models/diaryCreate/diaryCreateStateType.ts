export type DiaryCreateStateType = {
  diaryCreateData: {
    address: string;
    content: string;
    fid: number | null;
    gid: number | null;
    groupList: any;
    imgSrc: "";
    lat: string;
    lng: string;
    mid: number | null;
    publicStatus: string;
    x: number;
    y: number;
    z: number;
  };
  currentEmotionData: any;
  currentFlowerData: any;
};
