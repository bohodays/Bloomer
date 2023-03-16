import React from "react"
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate"
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList"
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather"
// import dayBackground from "../../assets/imgs/day_background.png";
// import nightBackground from "../../assets/imgs/night_background.png";
import dayBackground from "../../assets/imgs/lotties/day-background.json"
import nightBackground from "../../assets/imgs/lotties/night-background.json"

import { SMain } from "./styles"
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker/DiaryDatePicker"
import Navbar from "../../components/common/Navbar/Navbar"
import Lottie from "react-lottie"

const dayDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dayBackground,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Diary = () => {
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
        {/* <img
          src={dayBackground}
          alt="background"
          className="background-image"
        /> */}
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
  )
}

export default Diary
