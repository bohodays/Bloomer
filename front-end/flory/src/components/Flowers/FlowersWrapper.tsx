import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import F01 from "./F01"; // 크로커스
import F02 from "./F02"; // 은방울꽃
import F03 from "./F03"; // 빨강 튤립
import F04 from "./F04"; // 칼랑코에
import F05 from "./F05"; // 분홍 장미
import F06 from "./F06"; // 쑥국화
import F07 from "./F07"; // 뱀무
import F08 from "./F08"; // 잉글리쉬데이지
import F09 from "./F09"; // 함박꽃
import F10 from "./F10"; // 무스카리
import F11 from "./F11"; // 흑종초
import F12 from "./F12"; // 해당화
import F13 from "./F13"; // 봉선화
import F14 from "./F14"; // 노란 장미
import F15 from "./F15"; // 풍접초
import F16 from "./F16"; // 매발톱꽃
import F17 from "./F17"; // 빨강 매발톱꽃
import F18 from "./F18"; // 아네모네
import F19 from "./F19"; // 콜레우스
import F20 from "./F20"; // 시네라리아
import F21 from "./F21"; // 알리움
import F22 from "./F22"; // 찔레꽃
import F23 from "./F23"; // 노란 카네이션
import F24 from "./F24"; // 층꽃나무
import F25 from "./F25"; // 제라늄

const FlowersWrapper = () => {
  const diary = [
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
        flowerName: "크로커스",
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
    // 구분
    {
      id: 2,
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
        flowerName: "은방울꽃",
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
    // 구분
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
        flowerName: "빨간 튤립",
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
    // 구분
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
        flowerName: "칼랑코에",
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
    // // 구분
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
        flowerName: "분홍 장미",
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
    // // 구분
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
        flowerName: "쑥국화",
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
    // // 구분
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
        flowerName: "뱀무",
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
    // // 구분
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
        flowerName: "잉글리쉬데이지",
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
    // // 구분
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
        flowerName: "함박꽃",
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
    // // 구분
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
        flowerName: "무스카리",
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
    // 구분
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
        flowerName: "흑종초",
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
    // // 구분
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
        flowerName: "해당화",
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
    // // 구분
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
        flowerName: "봉선화",
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
    // // 구분
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
        flowerName: "노란 장미",
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
    // // 구분
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
        flowerName: "풍접초",
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
    // // 구분
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
        flowerName: "매발톱꽃",
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
    // // 구분
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
        flowerName: "빨강 매발톱꽃",
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
    // // 구분
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
        flowerName: "아네모네",
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
    // // 구분
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
        flowerName: "콜레우스",
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
    // // 구분
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
        flowerName: "시네라리아",
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
    // // 구분
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
        flowerName: "알리움",
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
    // // 구분
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
        flowerName: "찔레꽃",
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
    // // 구분
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
        flowerName: "노란 장미",
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
    // // 구분
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
        flowerName: "층꽃나무",
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
    // // 구분
    {
      id: 2,
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
        flowerName: "제라늄",
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
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleMoveToDetail = (diaryId: number, item?: any) => {
    navigate(`/diary/${diaryId}`, {
      state: {
        diaryData: item,
      },
    });
  };

  return (
    <>
      {diary.map((item) => {
        if (item.flowerEmotion.flowerName === "크로커스") {
          return (
            <F01
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "은방울꽃") {
          return (
            <F02
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "빨간 튤립") {
          return (
            <F03
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "칼랑코에") {
          return (
            <F04
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "분홍 장미") {
          return (
            <F05
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "쑥국화") {
          return (
            <F06
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "뱀무") {
          return (
            <F07
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "잉글리쉬데이지") {
          return (
            <F08
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "함박꽃") {
          return (
            <F09
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "무스카리") {
          return (
            <F10
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "흑종초") {
          return (
            <F11
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "해당화") {
          return (
            <F12
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "봉선화") {
          return (
            <F13
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "노란 장미") {
          return (
            <F14
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "풍접초") {
          return (
            <F15
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "매발톱꽃") {
          return (
            <F16
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "빨강 매발톱꽃") {
          return (
            <F17
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "아네모네") {
          return (
            <F18
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "콜레우스") {
          return (
            <F19
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "시네라리아") {
          return (
            <F20
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "알리움") {
          return (
            <F21
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "찔레꽃") {
          return (
            <F22
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "노란 카네이션") {
          return (
            <F23
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "층꽃나무") {
          return (
            <F24
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        } else if (item.flowerEmotion.flowerName === "제라늄") {
          return (
            <F25
              flowerPosition={{ x: +item.x, z: +item.z, y: +item.y }}
              onClick={() => {
                if (!location.pathname.includes("garden/edit")) {
                  handleMoveToDetail(item.id, item);
                }
              }}
            />
          );
        }
      })}
    </>
  );
};

export default FlowersWrapper;
