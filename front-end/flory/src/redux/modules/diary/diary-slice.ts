import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryStateType } from "../../../models/diary/diaryStateType";
import { createDiaryAction, updatePositionAction } from "./diary-action";

const initialState: DiaryStateType = {
  diaryData: [
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-3",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-2",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-1",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "0",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "1",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "2",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "3",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-3",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-2",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-1",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "0",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "1",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "2",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "3",
      y: "0",
      z: "1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-3",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-2",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-1",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "0",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "1",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "2",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "3",
      y: "0",
      z: "-1",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-3",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-2",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-1",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "0",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "1",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "2",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "3",
      y: "0",
      z: "-2",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
    {
      id: 1,
      content:
        "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
      imgSrc:
        "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
      address: "멀티캠퍼스 역삼",
      lat: "37.5128064",
      lng: "127.0284288",
      publicStatus: "그룹공개",
      // number로 수정가능한가?
      x: "-3",
      y: "0",
      z: "0",
      createdTime: "2023-03-15T06:15:51.715+00:00",
      garden: {
        createdDate: "2023-03-15T15:15:36.043595",
        modifiedDate: "2023-03-15T15:15:36.043595",
        id: 1,
        path: null,
        deadLine: "2023-04-15T15:15:36.036634",
        member: {
          createdDate: "2023-03-15T15:15:03.580057",
          modifiedDate: "2023-03-15T15:15:03.580057",
          userId: 1,
          nickname: "jisoo",
          password:
            "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
          img: "기본",
          email: "user1",
          refreshToken: null,
          authority: "ROLE_USER",
        },
        music: null,
      },
      flowerEmotion: {
        fid: 1,
        eid: 1,
        flowerName: "노란 카네이션",
        language: "믿는 기쁨",
        largeCategory: "기쁨",
        smallCategory: "기쁨",
      },
      commentList: [
        {
          id: 1,
          content: "댓글입니당",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
        {
          id: 2,
          content: "댓글입니당22",
          createdTime: "2023-03-15T06:17:33.145+00:00",
          member: {
            createdDate: "2023-03-15T15:15:03.580057",
            modifiedDate: "2023-03-15T15:15:03.580057",
            userId: 1,
            nickname: "jisoo",
            password:
              "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
            img: "기본",
            email: "user1",
            refreshToken: null,
            authority: "ROLE_USER",
          },
        },
      ],
    },
  ],
  create: { loading: false, data: null, error: null },
  positionUpdate: { loading: false, data: null, error: null },
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    // 개별 꽃 위치 수정
    positionUpdate: (state, action) => {
      const filteredItem = state.diaryData.filter(
        (item: any) => item.id === action.payload.diaryId
      );

      filteredItem[0].x = action.payload.x;
      filteredItem[0].y = action.payload.y;
      filteredItem[0].z = action.payload.z;
    },
  },
  extraReducers: (builder) => {
    builder
      // 일기 작성
      .addCase(createDiaryAction.pending, (state) => {
        state.create.loading = true;
        state.create.data = null;
        state.create.error = null;
      })
      .addCase(createDiaryAction.fulfilled, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = payload;
        state.create.error = null;

        console.log(state.create.data);
      })
      .addCase(createDiaryAction.rejected, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = null;
        state.create.error = payload;
      })
      // 수정된 꽃들의 위치 서버에 전송
      .addCase(updatePositionAction.pending, (state) => {
        state.positionUpdate.loading = true;
        state.positionUpdate.data = null;
        state.positionUpdate.error = null;
      })
      .addCase(updatePositionAction.fulfilled, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = payload;
        state.positionUpdate.error = null;
        console.log(payload);
      })
      .addCase(updatePositionAction.rejected, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = null;
        state.positionUpdate.error = payload;
        console.log(payload, 99);
      });
  },
});

export const { positionUpdate } = diarySlice.actions;

export default diarySlice.reducer;
