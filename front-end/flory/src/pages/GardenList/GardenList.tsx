import React, { useState } from "react";
import { SMain } from "./styles";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import testGarden from "../../assets/imgs/test_garden.png";
import Button from "../../components/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import GardenCalendar from "../../components/Garden/GardenCalendar/GardenCalendar";

const CARDS = 10;
const MAX_VISIBILITY = 3;

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

const GardenList = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/garden");
  };

  return (
    <SMain>
      <FontAwesomeIcon
        className="back-icon"
        onClick={handleBack}
        icon={faArrowLeft}
      />
      <div className="info__wrapper">
        <div className="background">
          <p>2023년 2월</p>
        </div>
      </div>
      {/* 기간별 정원 */}
      <div className="wrapper">
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <img src={testGarden} alt="" />
          ))}
        </Carousel>
      </div>
      <div>
        <GardenCalendar year={2023} month={2} />
      </div>
    </SMain>
  );
};

export default GardenList;
