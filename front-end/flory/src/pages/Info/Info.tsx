import React, { useEffect, useRef } from "react";
import BackButton from "../../components/common/BackButton/BackButton";
import SubTitle from "../../components/Info/SubTitle/SubTitle";
import { SMain } from "./styles";
import "animate.css";
import Lottie from "react-lottie";
import emotionChange from "../../assets/imgs/lotties/emotion.json";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import RotatingText from "../../components/Info/RotatingText/RotatingText";
import DiaryFlower from "../../components/Diary/DiaryFlower/DiaryFlower";
import Crocus from "../../assets/imgs/crocus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const userHeight = window.innerHeight;

const Info = () => {
  const main = useRef<HTMLElement | null>(null);
  const head = useRef<any>(null);
  const section1 = useRef<HTMLElement | null>(null);
  const section2 = useRef<HTMLElement | null>(null);
  const arrowUp = useRef<HTMLButtonElement | null>(null);

  // lottieFile option
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emotionChange,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    main.current?.addEventListener("scroll", () => {
      if (head.current?.getBoundingClientRect().top < -200) {
        section1.current?.classList.add("animate__animated");
        section1.current?.classList.add("animate__fadeIn");
      } else {
        section1.current?.classList.remove("animate__animated");
        section1.current?.classList.remove("animate__fadeIn");
      }

      // Arrow up visible 이벤트
      if (head.current?.getBoundingClientRect().top < -700) {
        arrowUp.current?.classList.add("visible");
      } else {
        arrowUp.current?.classList.remove("visible");
      }

      const scrollTop = main.current?.scrollTop || 0;
      const section2OffsetTop = section2.current?.offsetTop || 0;

      if (scrollTop >= section2OffsetTop - userHeight + 100) {
        section2.current?.classList.add("animate__animated");
        section2.current?.classList.add("animate__fadeIn");
      } else {
        section2.current?.classList.remove("animate__animated");
        section2.current?.classList.remove("animate__fadeIn");
      }
    });
  }, []);

  // 첫 화면에서 화살표를 누르면 section1으로 이동시키는 함수
  const handleMoveToSection = () => {
    section1.current?.scrollIntoView({ behavior: "smooth" });
    section1.current?.classList.add("animate__animated");
    section1.current?.classList.add("animate__fadeIn");
  };

  // Arrow up 버튼을 클릭하면 최상단으로 이동시키는 함수
  const handleScrollTop = () => {
    head.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SMain userHeight={userHeight} ref={main}>
      <BackButton color="purple" />
      <div className="head" ref={head}>
        <h1 id="title">Bloomer</h1>
        <div className="text-container">
          {/* 감정을 꽃 피우다 블러 이벤트있는 컴포넌트 */}
          <SubTitle />
        </div>
        <button className="down__arrow" onClick={handleMoveToSection}>
          <MdKeyboardDoubleArrowDown size={42} color="e9e9e9" />
        </button>
      </div>

      {/* section 1 */}
      <section ref={section1} className="service__info-1">
        <p>다른 사람들의 소식으로 가득한 이 세상에서</p>
        <p>여러분은 자기 자신의 목소리에 귀 기울이고 있나요?</p>
        <RotatingText />
      </section>
      {/* <Lottie options={defaultOptions} /> */}

      {/* section 2 */}
      <section ref={section2} className="service__info-2">
        <p>Bloomer에서 내 소중한 감정을</p>
        <p>꽃으로 피워내어 정원을 가꾸고</p>
        <p>내가 어떤 감정을 느끼며</p>
        <p>살아가고 있는지 알아보세요!</p>
        <img className="crocus" src={Crocus} alt="크로커스" />
      </section>

      {/* 이용 안내 */}
      {/* section 3 */}
      <section className="service__info-3">
        <p>이용안내</p>
      </section>

      {/* Arrow up */}
      <button className="arrow-up" ref={arrowUp} onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </SMain>
  );
};

export default Info;
