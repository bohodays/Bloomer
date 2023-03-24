import React from "react";
import { useAppSelector } from "../../redux/store.hooks";
import F01Create from "./F01Create";

const CurrentFlower: any = () => {
  const currentCreateDiaryData = useAppSelector(
    (state) => state.diaryCreate.diaryCreateData
  );
  console.log(currentCreateDiaryData, 33);
  if (currentCreateDiaryData.fid === 1) {
    return <F01Create />;
  }
  // else if (currentCreateDiaryData.fid === 8) {
  //   return <F08 flowerPosition={{ x: 0, z: 0, y: 0 }} />;
  // }
};

export default React.memo(CurrentFlower);
