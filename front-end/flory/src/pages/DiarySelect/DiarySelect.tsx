import React, { useState } from "react";
import { SMain } from "./styles";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import testFlower from "../../assets/imgs/test_flower.png";
import Navbar from "../../components/common/Navbar/Navbar";
import Button from "../../components/common/Button/Button";

const CARDS = 10;
const MAX_VISIBILITY = 3;

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
  return (
    <SMain>
      <div className="info__wrapper">
        <p>역삼동 김싸피 님의 감정은 다음과 같습니다.</p>
        <p>꽃 피우고 싶은 감정을 선택해주세요.</p>
      </div>
      {/* 선택된 감정 */}
      <div className="wrapper">
        <div className="emotion">기쁨</div>
        <div className="flower__wrapper">
          <p className="name__title">크로커스</p>
          <p className="flower__language">믿음의 기쁨</p>
        </div>
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            // <Card title={"Card " + (i + 1)}>
            <img src={testFlower} alt="" />
            // </Card>
          ))}
        </Carousel>
      </div>
      <div className="bottom__wrapper">
        <Button
          contents="감정 선택"
          addStyle={{
            width: "20%",
            // margin: "2rem  0",
            // height: "25%",
            background1: "rgb(46,33,98)",
            background2:
              "linear-gradient(90deg, rgba(132,120,185,1) 0%, rgba(46,33,98,1) 100%)",
            borderRadius: "16px",
            color: "#ffffff",
            fontSize: "1rem",
          }}
        />
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiarySelect;
