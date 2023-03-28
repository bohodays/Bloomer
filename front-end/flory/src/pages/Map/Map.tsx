import React, { useEffect, useState } from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicMap from "../../components/Map/BasicMap/BasicMap";
import DiaryList from "../../components/Diary/DiaryList/DiaryList";
import MapFilterModal from "../../components/Map/MapFilterModal/MapFilterModal";
import BasicTabs from "../../components/common/Tabs/BasicTabs";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/common/BackButton/BackButton";
import Navbar from "../../components/common/Navbar/Navbar";
import {
  getAllDiary,
  getDiaryWithGroup,
  getDiaryWithMap,
} from "../../redux/modules/diary";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import CommunityMap from "../../components/Map/CommunityMap/CommunityMap";
import { getGroupInfoAction } from "../../redux/modules/group";

let isInitial = true;

const Map = () => {
  // const navigate = useNavigate();

  const [bound, setBound] = useState<any>({
    lat1: "37.51369914424146",
    lng1: "127.0259808088334",
    lat2: "37.51189830901963",
    lng2: "127.03085648636002",
  });
  const allDiaryList = useAppSelector((store) => store.diary.allDiaryList);
  const mapDiaryList = useAppSelector((store) => store.diary.mapDiaryList);
  const groupDiaryList = useAppSelector((store) => store.diary.groupDiaryList);
  const userId = useAppSelector((store) => store.user.userData.userId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllDiary());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(getGroupInfoAction()).then((data) => {
        console.log("group", data);
        let teamIdList = [];
        for (let i of data.payload.response) {
          teamIdList.push(i.teamId);
        }
        const groupData = {
          teamIdList,
        };
        dispatch(getDiaryWithGroup(groupData));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    const mapData = { ...bound, requestId: userId };
    console.log("요청 보낼거임", mapData);
    dispatch(getDiaryWithMap(mapData));
  }, [bound]);

  // 내 주변 보기
  const mapPanel = (
    <div>
      <div>
        {/* <BasicMap setBound={setBound} diaries={mapDiaryList} /> */}
        <CommunityMap setBound={setBound} diaries={mapDiaryList} />
      </div>
      <div>
        <DiaryList DIARY_LIST={mapDiaryList} page="map" />
        {/* <DiaryList /> */}
      </div>
    </div>
  );

  // 모든 감정 보기
  const allPanel = (
    <div>
      <div>
        <DiaryList DIARY_LIST={allDiaryList} page="map" />
      </div>
    </div>
  );

  // 그룹 감정 보기
  const groupPanel = (
    <div>
      <div>
        <MapFilterModal />
        <DiaryList DIARY_LIST={groupDiaryList} page="map" />
      </div>
    </div>
  );

  return (
    <SMain>
      <div className="header">
        {/* <div className="inner-header flex"></div> */}
      </div>

      <div className="login__title">
        <h3>내 주변에 피어난 꽃</h3>
      </div>

      <BasicTabs
        tabs={[
          {
            label: "내 주변 보기",
            panel: mapPanel,
          },
          { label: "모든 감정 보기", panel: allPanel },
          {
            label: "그룹 감정 보기",
            panel: groupPanel,
          },
        ]}
      />
      <Navbar />
    </SMain>
  );
};

export default Map;
