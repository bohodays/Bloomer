import React from "react";
import { IoMdFlower } from "react-icons/io";
import { IoFlowerSharp } from "react-icons/io5";
import Calendar from "react-calendar";
import "./styles.css";
import moment from "moment";
import { useNavigate } from "react-router";

const SAMPLE_DIARY_LIST = [
  {
    day: "15",
    diaryList: [
      {
        id: 1,
        content: "내용 수정",
        imgSrc: "path11",
        lat: 37.1,
        lng: 120.5,
        publicStatus: "그룹공개",
        x: "15",
        y: "15",
        z: "15",
        address: "멀티캠퍼스111",
        createdTime: "2023-03-20T04:15:46.722+00:00",
        garden: {
          id: 1,
          deadLine: "2023-04-20T13:15:42.207509",
          member: {
            userId: 1,
            nickname: "jisoo",
            img: "기본",
            email: "user13",
          },
          music: null,
        },
        flowerEmotion: {
          fid: 1,
          eid: 1,
          flowerName: "크로커스",
          language: "믿는 기쁨",
          largeCategory: "기쁨",
          smallCategory: "기쁨",
        },
        groupList: [
          {
            teamId: 1,
            name: "화이팅",
            userGroupList: [
              {
                userId: 1,
                nickname: "jisoo",
                img: "기본",
                email: "user13",
              },
              {
                userId: 2,
                nickname: "jisoo1",
                img: "기본",
                email: "user123",
              },
            ],
          },
        ],
        music: {
          id: 1,
          title: "터키행진곡",
        },
        commentList: [
          {
            id: 1,
            content: "댓글입니당",
            createdTime: "2023-03-20T04:16:49.600+00:00",
            member: {
              userId: 1,
              nickname: "jisoo",
              img: "기본",
              email: "user13",
            },
          },
        ],
      },
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
          id: 1,
          deadLine: "2023-04-20T13:15:42.207509",
          member: {
            userId: 1,
            nickname: "jisoo",
            img: "기본",
            email: "user13",
          },
          music: null,
        },
        flowerEmotion: {
          fid: 1,
          eid: 1,
          flowerName: "크로커스",
          language: "믿는 기쁨",
          largeCategory: "슬픔",
          smallCategory: "기쁨",
        },
        groupList: [
          {
            teamId: 1,
            name: "화이팅",
            userGroupList: [
              {
                userId: 1,
                nickname: "jisoo",
                img: "기본",
                email: "user13",
              },
              {
                userId: 2,
                nickname: "jisoo1",
                img: "기본",
                email: "user123",
              },
            ],
          },
        ],
        music: {
          id: 1,
          title: "터키행진곡",
        },
        commentList: [
          {
            id: 1,
            content: "댓글입니당",
            createdTime: "2023-03-20T04:16:49.600+00:00",
            member: {
              userId: 1,
              nickname: "jisoo",
              img: "기본",
              email: "user13",
            },
          },
        ],
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
          id: 1,
          deadLine: "2023-04-20T13:15:42.207509",
          member: {
            userId: 1,
            nickname: "jisoo",
            img: "기본",
            email: "user13",
          },
          music: null,
        },
        flowerEmotion: {
          fid: 1,
          eid: 1,
          flowerName: "크로커스",
          language: "믿는 기쁨",
          largeCategory: "안정",
          smallCategory: "기쁨",
        },
        groupList: [
          {
            teamId: 1,
            name: "화이팅",
            userGroupList: [
              {
                userId: 1,
                nickname: "jisoo",
                img: "기본",
                email: "user13",
              },
              {
                userId: 2,
                nickname: "jisoo1",
                img: "기본",
                email: "user123",
              },
            ],
          },
        ],
        music: {
          id: 1,
          title: "터키행진곡",
        },
        commentList: [
          {
            id: 1,
            content: "댓글입니당",
            createdTime: "2023-03-20T04:16:49.600+00:00",
            member: {
              userId: 1,
              nickname: "jisoo",
              img: "기본",
              email: "user13",
            },
          },
        ],
      },
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
          id: 1,
          deadLine: "2023-04-20T13:15:42.207509",
          member: {
            userId: 1,
            nickname: "jisoo",
            img: "기본",
            email: "user13",
          },
          music: null,
        },
        flowerEmotion: {
          fid: 1,
          eid: 1,
          flowerName: "크로커스",
          language: "믿는 기쁨",
          largeCategory: "슬픔",
          smallCategory: "기쁨",
        },
        groupList: [
          {
            teamId: 1,
            name: "화이팅",
            userGroupList: [
              {
                userId: 1,
                nickname: "jisoo",
                img: "기본",
                email: "user13",
              },
              {
                userId: 2,
                nickname: "jisoo1",
                img: "기본",
                email: "user123",
              },
            ],
          },
        ],
        music: {
          id: 1,
          title: "터키행진곡",
        },
        commentList: [
          {
            id: 1,
            content: "댓글입니당",
            createdTime: "2023-03-20T04:16:49.600+00:00",
            member: {
              userId: 1,
              nickname: "jisoo",
              img: "기본",
              email: "user13",
            },
          },
        ],
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
          id: 1,
          deadLine: "2023-04-20T13:15:42.207509",
          member: {
            userId: 1,
            nickname: "jisoo",
            img: "기본",
            email: "user13",
          },
          music: null,
        },
        flowerEmotion: {
          fid: 1,
          eid: 1,
          flowerName: "크로커스",
          language: "믿는 기쁨",
          largeCategory: "분노",
          smallCategory: "기쁨",
        },
        groupList: [
          {
            teamId: 1,
            name: "화이팅",
            userGroupList: [
              {
                userId: 1,
                nickname: "jisoo",
                img: "기본",
                email: "user13",
              },
              {
                userId: 2,
                nickname: "jisoo1",
                img: "기본",
                email: "user123",
              },
            ],
          },
        ],
        music: {
          id: 1,
          title: "터키행진곡",
        },
        commentList: [
          {
            id: 1,
            content: "댓글입니당",
            createdTime: "2023-03-20T04:16:49.600+00:00",
            member: {
              userId: 1,
              nickname: "jisoo",
              img: "기본",
              email: "user13",
            },
          },
        ],
      },
    ],
  },
];

const GardenCalendar = ({ year, month }) => {
  const navigate = useNavigate();

  const handleClickCalendar = () => {
    // 해당 년월 상세 일기 페이지로 이동
    // 데이터 옮기는 방법 생각하기
    navigate("/diary");
  };

  return (
    <div className="calendar__wrapper" onClick={handleClickCalendar}>
      <Calendar
        activeStartDate={new Date(year, month - 1)}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        showNavigation={false}
        tileContent={({ date, _ }) => {
          let tag = [];
          let targetLst = [];
          SAMPLE_DIARY_LIST.forEach((data) => {
            if (data.day === moment(date).format("D")) {
              targetLst = data.diaryList;
            }
          });
          if (targetLst.length) {
            targetLst.map((data) => {
              console.log(data.flowerEmotion.largeCategory);
              tag.push(<IoMdFlower color="orange" />);
            });
          } else {
            tag.push(<div className="none"></div>);
          }

          return <div className="mark__wrapper">{tag}</div>;
        }}
      />
    </div>
  );
};

export default GardenCalendar;
