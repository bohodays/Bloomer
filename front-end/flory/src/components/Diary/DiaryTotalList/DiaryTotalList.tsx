import React from "react";
import { DiaryType } from "../../../models/diary/diaryType";
import { useAppSelector } from "../../../redux/store.hooks";
import DiaryList from "../DiaryList/DiaryList";
import { SMain } from "./styles";

// function groupBy<T>(arr: T[], fn: (item: T) => any) {
//   return arr.reduce<Record<string, T[]>>((prev, curr) => {
//     const groupKey = fn(curr)
//     const group = prev[groupKey] || []
//     group.push(curr)
//     return { ...prev, [groupKey]: group }
//   }, {})
// }

const DiaryTotalList = ({ DIARY_LIST }: any): JSX.Element => {
  return (
    <>
      {DIARY_LIST.length !== 0 ? (
        DIARY_LIST.map((diaries: any, idx: number) => {
          return (
            <SMain key={idx}>
              <div className="date">12월 {diaries.day}일</div>
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
