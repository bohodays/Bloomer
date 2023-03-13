import React from "react";
import DiaryDate from "../../components/Diary/DiaryDate/DiaryDate";
import DiaryListItem from "../../components/Diary/DiaryListItem/DiaryListItem";
import DiaryTotalList from "../../components/Diary/DiaryTotalList/DiaryTotalList";

const Diary = () => {
  return (
    <>
      <DiaryDate />
      <DiaryTotalList />
    </>
  );
};

export default Diary;
