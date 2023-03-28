import React, { useEffect } from "react";
import styled from "styled-components";
import { SMyPage } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import BasicTabs from "../../components/common/Tabs/BasicTabs";
import BasicModal from "../../components/User/UserLoginErrorModal/UserLoginErrorModal";
import MyPageEditModal from "../../components/MyPage/MyPageEditModal/MyPageEditModal";
import Pie from "../../components/common/Graph/Pie/Pie";
import Bar from "../../components/common/Graph/Bar/Bar";
import FlowerImg from "../../assets/imgs/flower_icon/Red Flower.png";
import Post from "../../components/common/Post/Post";
import Navbar from "../../components/common/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ProfileCard from "../../components/common/ProfileCard/ProfileCard";
import Avatar from "../../components/common/Avatar/Avatar";
import GroupPanel from "../../components/MyPage/GroupPanel/GroupPanel";
import iconRoute_bg from "../../assets/imgs/flower_bgicon/bgicon_f01.png";

const MyPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.userData);


  const handleMove = (target: string) => {
    navigate(target);
  };

  const handleMoveGroupList = () => {
    navigate("/group/list");
  };

  const Piedata = [
    {
      id: "기쁨",
      label: "기쁨",
      value: 573,
      color: "hsl(145, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 314,
      color: "hsl(75, 70%, 50%)",
    },
    {
      id: "java",
      label: "java",
      value: 347,
      color: "hsl(348, 70%, 50%)",
    },
    {
      id: "scala",
      label: "scala",
      value: 263,
      color: "hsl(49, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 542,
      color: "hsl(30, 70%, 50%)",
    },
    {
      id: "sass2",
      label: "sass",
      value: 542,
      color: "hsl(30, 70%, 50%)",
    },
    {
      id: "sass3",
      label: "sass",
      value: 542,
      color: "hsl(30, 70%, 50%)",
    },
  ];

  const Bardata = [
    [
      {
        "emotion": "01",
        "count": 188,
        "emotionColor": "hsl(354, 70%, 50%)",
      }
    ]
  ];

  const distPanel = (
    <div>
      <div className="totalFlower">
        <img src={FlowerImg} className="flowerImg"></img>
        <div className="flower-title">이번 달에 9개의 꽃을 피웠습니다!</div>
      </div>
      <Post
        title="실시간 누적 감정 분포"
        content={
          <div>
            <div className="inner-title">
              이번 달 현재까지 가장 많이 기록된 감정은 기쁨입니다
            </div>
            <Pie data={Piedata} />
          </div>
        }
      />
      <Post 
        title="지난주 대비 감정 분포" 
        content={
          <div>
            <Bar data={Bardata[0]} />
          </div>
          } 
      />
    </div>
  );

  const groupPanel = <GroupPanel />;
  return (
    <SMyPage>
      <div className="header">
        {/* 환경 설정 아이콘 */}
        <FontAwesomeIcon
          className="setting-icon"
          onClick={() => handleMove("/setting")}
          icon={faGear}
        />
      </div>
      <ProfileCard
        width="100%"
        header={<MyPageEditModal />}
        name={userInfo.nickname}
        body={
          <div style={{ textAlign: "center", padding: "1px" }}>{ userInfo.email }</div>
        }
        height="100%"
        className="profile"
      />
      <BasicTabs
        tabs={[
          {
            label: "나의 감정 분포",
            panel: distPanel,
          },
          { label: "그룹 목록 보기", panel: groupPanel },
        ]}
      />
      <Navbar />
    </SMyPage>
  );
};

export default MyPage;
