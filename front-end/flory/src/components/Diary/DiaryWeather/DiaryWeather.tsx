import React from "react";
import Sun from "../../../assets/imgs/weather_icon/Sun.png";
import { SMain } from "./styles";

const DiaryWeather = () => {
  return (
    <SMain>
      <img src={Sun} style={{ backgroundColor: "black" }} />
      <div className="info-container">
        <div>월 18°C</div>
        <div>23/03/06</div>
      </div>
    </SMain>
  );
};

export default DiaryWeather;
