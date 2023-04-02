import React from "react"
import { DiaryType } from "../../../models/diary/diaryType"
import { useAppSelector } from "../../../redux/store.hooks"
import DiaryList from "../DiaryList/DiaryList"
import { SMain } from "./styles"

const DiaryTotalList = ({ DIARY_LIST, month }: any): JSX.Element => {
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
          )
        })
      ) : (
        <span
          style={{
            background: "white",
            height: "3rem",
            padding: "1rem 0",
            borderRadius: "15px",
            fontFamily: "S-CoreDream-4Regular",
          }}
        >
          일기를 작성해주세요 🌻
        </span>
      )}
    </>
  )
}

export default DiaryTotalList
