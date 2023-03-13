import React from "react";
import DiaryBackground from "../../components/Diary/DiaryBackground/DiaryBackground";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryListItem from "../../components/Diary/DiaryListItem/DiaryListItem";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";
import DiaryWeather from "../../components/Diary/DiaryWeather/DiaryWeather";

const Diary = () => {
  return (
    <>
      <DiaryBackground />
      <DiaryWeather />
      <DiaryDate />
      <DiaryTotalList />
    </>
  );
};

export default Diary;
