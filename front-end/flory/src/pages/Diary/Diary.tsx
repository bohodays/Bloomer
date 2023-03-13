import React from "react";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather";
import dayBackground from "../../assets/imgs/day_background.png";
import nightBackground from "../../assets/imgs/night_background.png";

import { SMain } from "./styles";

const Diary = () => {
  return (
    <SMain>
      <img src={dayBackground} alt="background" className="background-image" />
      <DiaryWeather />
      <div className="content-container">
        <DiaryDate />
        <DiaryTotalList />
      </div>
    </SMain>
  );
};

export default Diary;
