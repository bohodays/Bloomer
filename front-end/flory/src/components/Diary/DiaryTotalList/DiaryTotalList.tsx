import React from "react"
import DiaryListItem from "../DiaryListItem/DiaryListItem"
import { SMain } from "./styles"

const SAMPLE_DIARY_LIST = [
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "아아아ㅇㅇㅇㅇ",
    lat: 32,
    lng: 127,
    publicStatus: "나만공개",
    createdTime: "9시간 전",
    emotion: "슬픔",
    commentList: ["Dddd", "hghggh", "Dddd", "hghggh"],
  },
  {
    id: 2,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "10시간 전",
    emotion: "슬픔",
    commentList: [],
  },
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "12시간 전",
    emotion: "슬픔",
    commentList: ["Dddd"],
  },
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "나만공개",
    createdTime: "12시간 전",
    emotion: "슬픔",
    commentList: ["Dddd"],
  },
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "ㅇㅇㅇㅇㅇㅇ",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "12시간 전",
    emotion: "슬픔",
    commentList: ["Dddd"],
  },
]

const DiaryTotalList = () => {
  return (
    <SMain>
      {SAMPLE_DIARY_LIST.length !== 0 ? (
        SAMPLE_DIARY_LIST.map((diary) => (
          <DiaryListItem diary={diary} key={diary.id} page={"diary"} />
        ))
      ) : (
        <div>피드가 없습니다.</div>
      )}
    </SMain>
  )
}

export default DiaryTotalList
