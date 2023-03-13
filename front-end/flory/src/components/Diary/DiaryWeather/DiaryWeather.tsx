import React from "react";
import Sun from "../../../assets/imgs/weather_icon/Sun.png";
import { SMain } from "./styles";

// 요일 매핑 함수
const convertDayIdx = (idx: number) => {
  const dayLst = ["일", "월", "화", "수", "목", "금", "토"];
  return dayLst[idx];
};

const DiaryWeather = () => {
  const today = new Date();
  const year = today.getFullYear().toString().substring(2);
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const day = convertDayIdx(today.getDay());
  const temp = "18°C";

  return (
    <SMain>
      <img src={Sun} alt="weather" className="weather-icon" />
      <div className="info-container">
        <div>
          {day} {temp}
        </div>
        <div>
          {year}/{month}/{date}
        </div>
      </div>
    </SMain>
  );
};

export default DiaryWeather;
