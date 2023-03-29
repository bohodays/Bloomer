import React from "react";
import { DiaryType } from "../../../models/diary/diaryType";
import { useAppSelector } from "../../../redux/store.hooks";
import DiaryList from "../DiaryList/DiaryList";
import { SMain } from "./styles";

const DiaryTotalList = ({ DIARY_LIST, month }: any): JSX.Element => {
  console.log(DIARY_LIST, ",,");

  return (
    <>
      {DIARY_LIST.length !== 0 ? (
        DIARY_LIST.map((diaries: any, idx: number) => {
          return (
            <SMain key={idx}>
              <div className="date">
                {month}월 {diaries.day}일
              </div>
              <div className="diary-content">
                <DiaryList
                  DIARY_LIST={diaries.diaryList}
                  page="diary"
                  key={idx}
                />
              </div>
            </SMain>
          );
        })
      ) : (
        <div>피드가 없습니다.</div>
      )}
    </>
  );
};

export default DiaryTotalList;
