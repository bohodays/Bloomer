import React from "react";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather";
import dayBackground from "../../assets/imgs/day_background.png";
import nightBackground from "../../assets/imgs/night_background.png";

import { SMain } from "./styles";
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker/DiaryDatePicker";

const Diary = () => {
  return (
    <SMain>
      <img src={dayBackground} alt="background" className="background-image" />
      <div className="content-container">
        <DiaryWeather />
        <DiaryDate />
        <div className="diary-section">
          <DiaryTotalList />
        </div>
      </div>
    </SMain>
  );
};

export default Diary;
