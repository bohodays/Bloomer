import React from "react";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather";
import dayBackground from "../../assets/imgs/day_background.png";
import nightBackground from "../../assets/imgs/night_background.png";

import { SMain } from "./styles";
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker/DiaryDatePicker";
import Navbar from "../../components/common/Navbar/Navbar";

const Diary = () => {
  return (
    <SMain>
      <div className="header-container">
        <img
          src={dayBackground}
          alt="background"
          className="background-image"
        />
        <DiaryWeather />
        <DiaryDate />
      </div>
      <div className="content-container">
        <div className="diary-section">
          <DiaryTotalList />
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default Diary;
