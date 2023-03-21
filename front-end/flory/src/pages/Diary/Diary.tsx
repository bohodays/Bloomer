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
import { useAppDispatch } from "../../redux/store.hooks";
import { getWeatherAction } from "../../redux/modules/weather/weather-action";
import { WeatherRequiredType } from "../../models/weather/weatherRequiredType";

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
  const geoLocation = useGeolocation();
  const dispatch = useAppDispatch();
  const lat = geoLocation.latitude;
  const lon = geoLocation.longitude;
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const currentTime = new Date().toTimeString();
  const [backoption, setBackOption] = useState(
    createLottieOptions(
      weatherData.sunrise <= currentTime && weatherData.sunset > currentTime
        ? "day"
        : "night"
    )
  );

  useEffect(() => {
    let requiredData: WeatherRequiredType;
    if (lat !== null) {
      requiredData = {
        lat,
        lon,
      };
      dispatch(getWeatherAction(requiredData));
    }
    // else {
    //   requiredData = {
    //     lat: 37.5012860931305,
    //     lon: 127.039604663862,
    //   };
    // }
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
        <DiaryDate />
      </div>
      <div className="content-container">
        <div className="line"></div>
        <div className="diary-section">
          <DiaryTotalList />
          <div className="empty-space"></div>
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default Diary;
