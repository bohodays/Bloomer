import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather";
import dayBackground from "../../assets/imgs/lotties/day-background.json";
import nightBackground from "../../assets/imgs/lotties/night-background.json";

import { SMain } from "./styles";
import Navbar from "../../components/common/Navbar/Navbar";
import Lottie from "react-lottie";
import useGeolocation from "react-hook-geolocation";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { getWeatherAction } from "../../redux/modules/weather/weather-action";
import { WeatherRequiredType } from "../../models/weather/weatherRequiredType";
import { useLocation } from "react-router-dom";
import { getDiaryWithDate } from "../../redux/modules/diary";

const createLottieOptions = (type: string | null) => {
  return {
    loop: true,
    autoplay: true,
    animationData: type === "day" ? dayBackground : nightBackground,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

const Diary = () => {
  let isInitial = true;
  const geoLocation = useGeolocation();
  const dispatch = useAppDispatch();
  const lat = geoLocation.latitude;
  const lon = geoLocation.longitude;
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const monthDiaryList = useAppSelector((state) => state.diary.monthDiaryList);

  const today = new Date();
  const currentTime = today.toTimeString();
  const backoption = createLottieOptions(
    weatherData.sunrise <= currentTime && weatherData.sunset > currentTime
      ? "day"
      : "night"
  );
  const initialDiaryData = {
    id: 2,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  };
  const location = useLocation();
  const diaryData = location.state
    ? location.state.diaryData
    : initialDiaryData;

  useEffect(() => {
    dispatch(getDiaryWithDate(diaryData));
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      let requiredData: WeatherRequiredType;
      requiredData = {
        lat: lat,
        lon: lon,
      };
      dispatch(getWeatherAction(requiredData));
    }
    isInitial = false;
  }, [lat]);

  return (
    <SMain>
      <div className="header-container">
        <Lottie
          style={{
            position: "relative",
          }}
          options={backoption}
          width="100%"
        />
        {weatherData.description && (
          <DiaryWeather
            weatherData={{
              description: weatherData.description,
              temp: weatherData.temp,
            }}
          />
        )}
        <DiaryDate diaryData={diaryData} />
      </div>
      <div className="content-container">
        <div className="line"></div>
        <div className="diary-section">
          <DiaryTotalList DIARY_LIST={monthDiaryList} month={diaryData.month} />
          <div className="empty-space"></div>
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default Diary;
