import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KakaoMap from "../../components/Map/KakaoMap";
import DiaryList from "../../components/Diary/DiaryList";
import BasicModal from "../../components/common/Modal/BasicModal";
import Button from "@mui/material/Button";
import MapFilterModal from "../../components/Map/MapFilterModal";
import BasicTabs from "../../components/common/Tabs/BasicTabs";

const Map = () => {
  const onClick = () => {};

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
        nth={3}
        tabs={[
          {
            label: "내 주변 보기",
            panel: (
              <div>
                <div>
                  <KakaoMap />
                </div>
                <div>
                  <DiaryList />
                </div>
              </div>
            ),
          },
          { label: "모든 감정 보기", panel: <div>야호2</div> },
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
