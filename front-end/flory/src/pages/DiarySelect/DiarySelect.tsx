import React, { useState } from "react";
import { SMain } from "./styles";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import testFlower from "../../assets/imgs/test_flower.png";
import Navbar from "../../components/common/Navbar/Navbar";
import Button from "../../components/common/Button/Button";
import { useLocation, useNavigate } from "react-router";
import Chart from "react-apexcharts";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import DiaryFlower from "../../components/Diary/DiaryFlower/DiaryFlower";
import { createInfoSaveAction } from "../../redux/modules/diaryCreate";

const MAX_VISIBILITY = 5;

const Card = ({ title, content }: any) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children }: any) => {
  const [active, setActive] = useState<number>(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i: any) => (
        <div
          className="card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 1.2,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "flex",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const DiarySelect = () => {
  const nickname = useAppSelector((state) => state.user.userData.nickname);
  const dispatch = useAppDispatch();

  // 감정 정보
  const emotionData = useAppSelector(
    (state) => state.diaryCreate.currentEmotionData
  );

  // 해당 감정에 대한 꽃 정보 (소분류들)
  const flowerData = useAppSelector(
    (state) => state.diaryCreate.currentFlowerData
  );

  const navigate = useNavigate();

  const handleNavigate = () => {
    const target = document.querySelector('[style*="--active:1"]');
    const parentNode: any = target?.parentNode?.childNodes;
    const targetArray = [...parentNode].filter(
      (item) => item.localName === "div"
    );

    let targetFid: any;
    for (let i = 0; i < targetArray.length; i++) {
      const styles = getComputedStyle(targetArray[i]);
      const activeValue = styles.getPropertyValue("--active");
      if (activeValue === "1") {
        targetFid = i;
        const fidData = {
          fid: flowerData[targetFid].fid,
        };
        dispatch(createInfoSaveAction(fidData)).then(() => {
          navigate("/diary/select/music");
        });
      }
    }
  };

  const CARDS = flowerData.length;

  const newFlowerData = flowerData.slice(0, 5);

  return (
    <SMain>
      <div className="info__wrapper">
        <p className="info__title">{nickname} 님의 감정은 다음과 같습니다.</p>
        <p className="info__title">피우고 싶은 꽃을 선택해주세요.</p>
        {/* 일단 보류 */}
        {/* <Chart
          type="bar"
          series={[
            { name: "오늘의 기온", data: [19, 26, 20, 9] },
            // { name: "내일의 기온", data: [30, 26, 34, 10] },
          ]}
          options={{
            // tooltip: {
            //   enabled: false,
            // },
            chart: {
              toolbar: {
                show: false,
              },
              height: 500,
              width: 500,
            },
          }}
        ></Chart> */}
      </div>
      {/* 선택된 감정 */}
      <div className="emotion__wrapper">
        <Carousel>
          {newFlowerData.map((item: any, i: number) => (
            // <Card title={"Card " + (i + 1)}>
            <>
              <div key={item.id} className="emotion">
                {item.smallCategory}
              </div>
              <DiaryFlower flower={item} />
              {/* <img src={testFlower} alt="" /> */}
              <div className="flower__wrapper">
                <p className="name__title">{item.flowerName}</p>
                <p className="flower__language">{item.language}</p>
              </div>
            </>
            // </Card>
          ))}
        </Carousel>
      </div>
      <div className="select__wrapper" onClick={handleNavigate}>
        <div className="background">
          <p className="select__p">선택</p>
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiarySelect;
