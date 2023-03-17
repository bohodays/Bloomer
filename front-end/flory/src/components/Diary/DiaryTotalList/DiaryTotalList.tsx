import React from "react";
import DiaryList from "../DiaryList/DiaryList";
import DiaryListItem from "../DiaryListItem/DiaryListItem";
import { SMain } from "./styles";

const SAMPLE_DIARY_LIST = [
  {
    day: "13",
    diaryList: [
      {
        id: 1,
        content: "내용111",
        imgSrc: "path",
        lat: "37.195",
        lng: "128.5",
        publicStatus: "그룹공개",
        x: "10",
        y: "10",
        z: "10",
        createdTime: "2023-03-13 04:23:16",
        garden: {
          createdDate: "2023-03-15T13:20:26.98129",
          modifiedDate: "2023-03-15T13:20:26.98129",
          id: 1,
          path: null,
          deadLine: "2023-04-15T13:20:26.97729",
          member: {
            createdDate: "2023-03-15T13:20:13.840834",
            modifiedDate: "2023-03-15T13:20:13.840834",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$2gGRO4.tvNv4G2XgC31BRuLitdzseuc0Y/K.zDXMp77PCV62ioBue",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
          music: null,
        },
        flower: {
          id: 1,
          name: "크로커스",
          language: "믿는 기쁨",
          emotion: {
            id: 1,
            type: "기쁨",
          },
          commentList: [],
        },
      },
    ],
  },
  {
    day: "15",
    diaryList: [
      {
        id: 2,
        content: "내용111",
        imgSrc: "path",
        lat: "37.195",
        lng: "128.5",
        publicStatus: "그룹공개",
        x: "10",
        y: "10",
        z: "10",
        createdTime: "2023-03-15 04:20:35",
        garden: {
          createdDate: "2023-03-15T13:20:26.98129",
          modifiedDate: "2023-03-15T13:20:26.98129",
          id: 1,
          path: null,
          deadLine: "2023-04-15T13:20:26.97729",
          member: {
            createdDate: "2023-03-15T13:20:13.840834",
            modifiedDate: "2023-03-15T13:20:13.840834",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$2gGRO4.tvNv4G2XgC31BRuLitdzseuc0Y/K.zDXMp77PCV62ioBue",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
          music: null,
        },
        flower: {
          id: 1,
          name: "크로커스",
          language: "믿는 기쁨",
          emotion: {
            id: 1,
            type: "기쁨",
          },
          commentList: ["2222", "2222"],
        },
      },
      {
        id: 3,
        content: "내용111",
        imgSrc: "path",
        lat: "37.195",
        lng: "128.5",
        publicStatus: "그룹공개",
        x: "10",
        y: "10",
        z: "10",
        createdTime: "2023-03-15 04:21:58",
        garden: {
          createdDate: "2023-03-15T13:20:26.98129",
          modifiedDate: "2023-03-15T13:20:26.98129",
          id: 1,
          path: null,
          deadLine: "2023-04-15T13:20:26.97729",
          member: {
            createdDate: "2023-03-15T13:20:13.840834",
            modifiedDate: "2023-03-15T13:20:13.840834",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$2gGRO4.tvNv4G2XgC31BRuLitdzseuc0Y/K.zDXMp77PCV62ioBue",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
          music: null,
        },
        flower: {
          id: 1,
          name: "크로커스",
          language: "믿는 기쁨",
          emotion: {
            id: 1,
            type: "기쁨",
          },
          commentList: ["2222", "2222", "d"],
        },
      },
    ],
  },
  {
    day: "17",
    diaryList: [
      {
        id: 1,
        content: "내용111",
        imgSrc: "path",
        lat: "37.195",
        lng: "128.5",
        publicStatus: "그룹공개",
        x: "10",
        y: "10",
        z: "10",
        createdTime: "2023-03-13 04:23:16",
        garden: {
          createdDate: "2023-03-15T13:20:26.98129",
          modifiedDate: "2023-03-15T13:20:26.98129",
          id: 1,
          path: null,
          deadLine: "2023-04-15T13:20:26.97729",
          member: {
            createdDate: "2023-03-15T13:20:13.840834",
            modifiedDate: "2023-03-15T13:20:13.840834",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$2gGRO4.tvNv4G2XgC31BRuLitdzseuc0Y/K.zDXMp77PCV62ioBue",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
          music: null,
        },
        flower: {
          id: 1,
          name: "크로커스",
          language: "믿는 기쁨",
          emotion: {
            id: 1,
            type: "기쁨",
          },
          commentList: [],
        },
      },
    ],
  },
  {
    day: "19",
    diaryList: [
      {
        id: 1,
        content: "내용111",
        imgSrc: "path",
        lat: "37.195",
        lng: "128.5",
        publicStatus: "그룹공개",
        x: "10",
        y: "10",
        z: "10",
        createdTime: "2023-03-13 04:23:16",
        garden: {
          createdDate: "2023-03-15T13:20:26.98129",
          modifiedDate: "2023-03-15T13:20:26.98129",
          id: 1,
          path: null,
          deadLine: "2023-04-15T13:20:26.97729",
          member: {
            createdDate: "2023-03-15T13:20:13.840834",
            modifiedDate: "2023-03-15T13:20:13.840834",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$2gGRO4.tvNv4G2XgC31BRuLitdzseuc0Y/K.zDXMp77PCV62ioBue",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
          music: null,
        },
        flower: {
          id: 1,
          name: "크로커스",
          language: "믿는 기쁨",
          emotion: {
            id: 1,
            type: "기쁨",
          },
          commentList: ["2222", "2222"],
        },
      },
    ],
  },
];

// function groupBy<T>(arr: T[], fn: (item: T) => any) {
//   return arr.reduce<Record<string, T[]>>((prev, curr) => {
//     const groupKey = fn(curr)
//     const group = prev[groupKey] || []
//     group.push(curr)
//     return { ...prev, [groupKey]: group }
//   }, {})
// }

const DiaryTotalList = () => {
  return (
    <>
      {SAMPLE_DIARY_LIST.length !== 0 ? (
        SAMPLE_DIARY_LIST.map((diaries, idx) => {
          return (
            <SMain>
              <div className="date">{diaries.day}</div>
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
