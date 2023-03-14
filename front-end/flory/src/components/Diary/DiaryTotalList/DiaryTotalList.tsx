import React from "react"
import DiaryListItem from "../DiaryListItem/DiaryListItem"
import { SMain } from "./styles"

const SAMPLE_DIARY_LIST = [
  {
    d14: [
      {
        id: 1,
        content:
          "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
        imgSrc: "아아아ㅇㅇㅇㅇ",
        lat: 32,
        lng: 127,
        publicStatus: "그룹공개",
        createdTime: "2023-03-14T13:00",
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
        createdTime: "2023-03-14T01:00",
        emotion: "슬픔",
        commentList: [],
      },
    ],
  },
  {
    d13: [
      {
        id: 3,
        content:
          "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
        imgSrc: "",
        lat: 32,
        lng: 127,
        publicStatus: "전체공개",
        createdTime: "2023-03-13T17:00",
        emotion: "슬픔",
        commentList: ["Dddd"],
      },
      {
        id: 4,
        content:
          "김 팀장님이 일을 잔뜩 주셔서 야근을했다dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
        imgSrc: "",
        lat: 32,
        lng: 127,
        publicStatus: "비공개",
        createdTime: "2023-03-13T10:00",
        emotion: "슬픔",
        commentList: ["Dddd"],
      },
    ],
  },
  {
    d10: [
      {
        id: 5,
        content:
          "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
        imgSrc: "ㅇㅇㅇㅇㅇㅇ",
        lat: 32,
        lng: 127,
        publicStatus: "비공개",
        createdTime: "2023-03-10T17:00",
        emotion: "슬픔",
        commentList: ["Dddd"],
      },
    ],
  },
]

// function groupBy<T>(arr: T[], fn: (item: T) => any) {
//   return arr.reduce<Record<string, T[]>>((prev, curr) => {
//     const groupKey = fn(curr)
//     const group = prev[groupKey] || []
//     group.push(curr)
//     return { ...prev, [groupKey]: group }
//   }, {})
// }

const DiaryTotalList = () => {
  // SAMPLE_DIARY_LIST.map((diaries) => {
  //   Object.values(diaries)[0].map((diary: object, idx: number) => {
  //     console.log(Object.keys(diaries)[0], idx, diary)
  //   })
  // })

  return (
    <SMain>
      {SAMPLE_DIARY_LIST.length !== 0 ? (
        SAMPLE_DIARY_LIST.map(
          (diaries) =>
            Object.values(diaries)[0].map((diary: object, idx: number) => (
              <DiaryListItem diary={diary} key={idx} page={"diary"} />
            ))
          // diaries..map((diary, idx) => {
          // })
        )
      ) : (
        <div>피드가 없습니다.</div>
      )}
    </SMain>
  )
}

export default DiaryTotalList
