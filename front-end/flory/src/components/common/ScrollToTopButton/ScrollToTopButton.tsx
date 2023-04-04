import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

// 최상단 태그에 useRef를 걸고 그 ref를 target에 넣어주세요.
const ScrollToTopButton = ({ target, active }: any) => {
  // const { pathname } = useLocation();
  console.log(target);
  console.log(active);

  const arrowUp = useRef<HTMLButtonElement | null>(null);

  // Arrow up 버튼을 클릭하면 최상단으로 이동시키는 함수
  const handleScrollTop = () => {
    target.current?.scrollIntoView({
      // block: "start",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Arrow up visible 이벤트
    if (active) {
      arrowUp.current?.classList.add("visible");
    } else {
      arrowUp.current?.classList.remove("visible");
    }
  }, [active]);

  return (
    <>
      {/* Arrow up */}
      <button className="arrow-up" ref={arrowUp} onClick={handleScrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default ScrollToTopButton;
