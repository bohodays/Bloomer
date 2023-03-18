import React from "react"
import { WeatherStateType } from "../../../models/weather/weatherStateType"
import { SMain } from "./styles"

// 요일 매핑 함수
const convertDayIdx = (idx: number) => {
  const dayLst = ["일", "월", "화", "수", "목", "금", "토"]
  return dayLst[idx]
}

const convertWeatherDescription = (description: string) => {
  switch (description) {
    case "snow":
      return "Snow"
    case "Haze":
    case "Mist":
    case "Smoke":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "Atmosphere"
    default:
      return description
  }
}

const DiaryWeather = ({ weatherData }: any): JSX.Element => {
  const today = new Date()
  const year = today.getFullYear().toString().substring(2)
  const month = (today.getMonth() + 1).toString().padStart(2, "0")
  const date = today.getDate().toString().padStart(2, "0")
  const day = convertDayIdx(today.getDay())
  const weatherDescription = convertWeatherDescription(weatherData.description)
  console.log(weatherDescription)

  return (
    <SMain>
      <img
        src={
          require(`../../../assets/imgs/weather_icon/${weatherDescription}.png`)
          // .default
        }
        alt="weather"
        className="weather-icon"
      />
      <div className="info-container">
        <div>
          {day} {weatherData.temp}°C
        </div>
        <div>
          {year}/{month}/{date}
        </div>
      </div>
    </SMain>
  )
}

export default DiaryWeather
