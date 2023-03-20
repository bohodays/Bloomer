import React from "react";
import styled from "styled-components";
import { SMyPage } from "./styles";
import { useNavigate } from "react-router-dom";
import BasicTabs from "../../components/common/Tabs/BasicTabs";
import Pie from "../../components/common/Pie/Pie";
import FlowerImg from "./Spring.png";
import Post from "../../components/common/Post/Post";
import Navbar from "../../components/common/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  const navigate = useNavigate();

  const handleMove = (target: string) => {
    navigate(target);
  }


  const data = [
    {
      "id": "기쁨",
      "label": "기쁨",
      "value": 573,
      "color": "hsl(145, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 314,
      "color": "hsl(75, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 347,
      "color": "hsl(348, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 263,
      "color": "hsl(49, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 542,
      "color": "hsl(30, 70%, 50%)"
    },
    {
      "id": "sass2",
      "label": "sass",
      "value": 542,
      "color": "hsl(30, 70%, 50%)"
    },
    {
      "id": "sass3",
      "label": "sass",
      "value": 542,
      "color": "hsl(30, 70%, 50%)"
    }
  ]

  const distPanel = (
    <div>
      <div className="totalFlower">
        <img src={FlowerImg} className="flowerImg"></img>
          이번 달에 9개의 꽃을 피웠습니다!
      </div>
      <Post title="실시간 누적 감정 분포" content={
        <div>
          <div className="inner-title">이번 달 현재까지 가장 많이 기록된 감정은 기쁨입니다</div>
          <Pie
            data={
              data
            }
          /> 
        </div>
      } />
      <Post title="지난주 대비 감정 분포" content="hi"/>
      
    </div>
  );
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
      <BasicTabs
        tabs={[
          {
            label: "나의 감정 분포",
            panel: distPanel,
          },
          { label: "그룹 목록 보기", panel: <div>그룹 목록 보기 내용</div> },
        ]}
      />
      <Navbar />
    </SMyPage>
  );
};


export default MyPage;
