import React, { useEffect, useState } from "react"
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate"
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList"
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather"
import dayBackground from "../../assets/imgs/lotties/day-background.json"
import nightBackground from "../../assets/imgs/lotties/night-background.json"

import { SMain } from "./styles"
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker/DiaryDatePicker"
import Navbar from "../../components/common/Navbar/Navbar"
import Lottie from "react-lottie"
import useGeolocation from "react-hook-geolocation"
import { useAppDispatch } from "../../redux/store.hooks"
import { getWeatherAction } from "../../redux/modules/weather/weather-action"
import { WeatherStateType } from "../../models/weather/weatherStateType"
import { WeatherRequiredType } from "../../models/weather/weatherRequiredType"
import weather from "../../redux/modules/weather"

const dayDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dayBackground,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Diary = () => {
  const geoLocation = useGeolocation()
  const lat = geoLocation.latitude
  const lon = geoLocation.longitude
  const [weatherState, setWeatherState] = useState<WeatherStateType>({
    description: null,
    temp: null,
    sunrise: null,
    sunset: null,
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (lat !== null) {
      const weatherData: WeatherRequiredType = {
        lat,
        lon,
      }
      dispatch(getWeatherAction(weatherData)).then((res) => {
        if (res.type === "GET_WEATHER/fulfilled") {
          setWeatherState({
            description: res.payload.weather[0].main,
            temp: Math.ceil(res.payload.main.temp),
            sunrise: new Date(res.payload.sys.sunrise * 1000).toTimeString(),
            sunset: new Date(res.payload.sys.sunset * 1000).toTimeString(),
          })
        }
      })
    }
  }, [lat])

  return (
    <SMain>
      <div className="header-container">
        <Lottie
          style={{
            position: "relative",
          }}
          options={dayDefaultOptions}
          width="100%"
        />
        {weatherState.description && (
          <DiaryWeather
            weatherData={{
              description: weatherState.description,
              temp: weatherState.temp,
            }}
          />
        )}
        <DiaryDate />
      </div>
      <div className="content-container">
        <div className="line"></div>
        <div className="diary-section">
          <DiaryTotalList />
        </div>
      </div>
      <Navbar />
    </SMain>
  )
}

export default Diary
