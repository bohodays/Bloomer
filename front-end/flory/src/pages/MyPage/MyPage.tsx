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
      value: 15,
    },
    {
      id: "안정",
      label: "안정",
      value: 7,
    },
    {
      id: "불안",
      label: "불안",
      value: 2,
    },
    {
      id: "당황",
      label: "당황",
      value: 1,
    },
    {
      id: "슬픔",
      label: "슬픔",
      value: 5,
    },
    {
      id: "상처",
      label: "상처",
      value: 3,
    },
    {
      id: "분노",
      label: "분노",
      value: 2,
    },
  ];

  const Bardata = [
    [
      {
        "emotion": "기쁨",
        "count": 3,
        "color": {
          "type": "linearGradient",
          "id": "gradient",
          "colors": [
            {
              "offset": "0%",
              "color": "#FFE897"
            },
            {
              "offset": "100%",
              "color": "#ff6b6b"
            }
          ]
        }
      },
      {
        "emotion": "안정",
        "count": 1,
        "color": "linear-gradient(to right, #FFE897, #ff6b6b)",
      },
      {
        "emotion": "불안",
        "count": 1,
        "color": "linear-gradient(to right, #FFE897, #ff6b6b)",
      },
      {
        "emotion": "당황",
        "count": 1,
        "color": "hsl(354, 70%, 50%)",
      },
      {
        "emotion": "슬픔",
        "count": 1,
        "color": "hsl(354, 70%, 50%)",
      },
      {
        "emotion": "상처",
        "count": 1,
        "color": "hsl(354, 70%, 50%)",
      },
      {
        "emotion": "분노",
        "count": 1,
        "color": "hsl(354, 70%, 50%)",
      }
    ]
  ];

  const bgIcons = [];
  const keys = ["01", "06", "09", "12", "15", "18", "21"]
  const emotions =["기쁨", "안정","불안","당황","슬픔","상처","분노"];
  for (var i = 0; i < 7; i++) {
    var img_icon = require(`../../assets/imgs/flower_bgicon/bgicon_f${keys[i]}.png`);
    bgIcons.push(<img className="emotion__flower" key={i} src={img_icon}/>);
  }

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
            <div style={{display:"flex"}}>
              {bgIcons}
            </div>
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
          <div style={{ textAlign: "center", padding: "1px", color:"gray", fontSize:"14px" }}>{ userInfo.email }</div>
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
