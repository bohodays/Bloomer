import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicMap from "../../components/Map/BasicMap/BasicMap";
import DiaryList from "../../components/Diary/DiaryList/DiaryList";
import MapFilterModal from "../../components/Map/MapFilterModal/MapFilterModal";
import BasicTabs from "../../components/common/Tabs/BasicTabs";

const DIARY_LIST = [
  {
    id: 1,
    content: "내용111",
    imgSrc: "",
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
];

const Map = () => {
  const onClick = () => {};

  // 내 주변 보기
  const mapPanel = (
    <div>
      <div>
        <BasicMap />
      </div>
      <div>
        <DiaryList DIARY_LIST={DIARY_LIST} page="map" />
        {/* <DiaryList /> */}
      </div>
    </div>
  );

  return (
    <SMain>
      <div className="header">
        <div className="inner-header flex"></div>
      </div>
      {/* 뒤로 가기 아이콘 */}
      <FontAwesomeIcon
        className="back-icon"
        onClick={onClick}
        icon={faArrowLeft}
      />
      <div className="login__title">
        <h3>내 주변에 피어난 꽃</h3>
      </div>

      <BasicTabs
        tabs={[
          {
            label: "내 주변 보기",
            panel: mapPanel,
          },
          { label: "모든 감정 보기", panel: <div>야호</div> },
          {
            label: "그룹 감정 보기",
            panel: (
              <div>
                <MapFilterModal />
              </div>
            ),
          },
        ]}
      />
    </SMain>
  );
};

export default Map;
