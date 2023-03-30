import React, { useState, useEffect } from "react";
import { SMain } from "./styles";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import testGarden from "../../assets/imgs/test_garden.png";
import Button from "../../components/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import GardenCalendar from "../../components/Garden/GardenCalendar/GardenCalendar";
import BackButton from "../../components/common/BackButton/BackButton";
import { useSelect } from "@react-three/drei";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { getDiaryWithDate } from "../../redux/modules/diary";
import Tooltip from "@mui/material/Tooltip";

// const CARDS = 1;
const MAX_VISIBILITY = 3;

const Carousel = ({ children, setActiveIdx, activeIdx }: any) => {
  const count = React.Children.count(children);
  const [active, setActive] = useState<number>(count - 1);

  const handleClickRight = () => {
    setActive((i) => i + 1);
    setActiveIdx(activeIdx + 1);
  };

  const handleClickLeft = () => {
    setActive((i) => i - 1);
    setActiveIdx(activeIdx - 1);
  };

  return (
    <>
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => handleClickLeft()}>
            <TiChevronLeftOutline />
          </button>
        )}
        {React.Children.map(children, (child, i: any) => (
          <div
            key={i}
            className="card-container"
            style={
              {
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 1.2,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                "pointer-events": active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                display:
                  Math.abs(active - i) > MAX_VISIBILITY ? "none" : "flex",
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => handleClickRight()}>
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    </>
  );
};

const GardenList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backpage = location.state ? location.state.gid : null;
  const dispatch = useAppDispatch();
  const gardenList = useAppSelector((state) => state.garden.gardenList);
  const userId = useAppSelector((state) => state.user.userData.userId);
  const CARDS_LENGTH = gardenList.length;
  const [activeIdx, setActiveIdx] = useState(CARDS_LENGTH - 1);
  const target = new Date(gardenList[activeIdx].deadline);
  const year = target.getFullYear();
  const month = target.getMonth() + 1;
  const monthDiaryList = useAppSelector((state) => state.diary.monthDiaryList);
  const dateData = {
    // 조회할 사용자 유저 아이디
    id: userId,
    year,
    month,
  };

  const handleMoveToGarden = (
    year: number,
    month: number,
    gid: number | null
  ) => {
    navigate("/garden", { state: { path: "garden/list", year, month, gid } });
  };

  useEffect(() => {
    dispatch(getDiaryWithDate(dateData));
  }, [activeIdx]);

  return (
    <SMain>
      <BackButton
        color="purple"
        onClickAction={() => {
          if (backpage) {
            navigate(-1);
          } else {
            navigate("/garden");
          }
        }}
      />

      <div className="info__wrapper">
        <div className="background">
          {year}년 {month}월
        </div>
      </div>
      {/* 기간별 정원 */}
      <div className="wrapper">
        <Carousel setActiveIdx={setActiveIdx} activeIdx={activeIdx}>
          {gardenList.map((_, i) => (
            <Tooltip
              title={`${year.toString().slice(2)}년 ${month}월 공간 보러가기`}
              placement="bottom"
            >
              {/* 이미지 바껴야 함 */}
              <img
                style={{ cursor: "pointer" }}
                src={testGarden}
                alt=""
                key={i}
                onClick={() =>
                  handleMoveToGarden(year, month, gardenList[i].gardenId)
                }
              />
            </Tooltip>
          ))}
        </Carousel>
      </div>
      <Tooltip
        title={`${year.toString().slice(2)}년 ${month}월 일기 보러가기`}
        placement="bottom"
      >
        <div className="calendar__wrapper">
          <GardenCalendar dateData={dateData} diaryList={monthDiaryList} />
        </div>
      </Tooltip>
    </SMain>
  );
};

export default GardenList;
