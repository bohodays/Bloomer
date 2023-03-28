import React from "react";
import { SMain } from "./styles";

const Info = () => {
  return (
    <SMain>
      <div className="head">
        <h1 id="title">Bloomer</h1>
        <p id="sub-title">Let emotion bloom</p>
        <p id="sub-title">감정을 꽃 피우다</p>
      </div>

      <section className="service__info-1">
        <p>다른 사람들의 소식으로 가득한 이 세상에서</p>
        <p>여러분은 자기 자신의 목소리에 귀 기울이고 있나요?</p>
      </section>
      <section className="service__info-2">
        <p>Bloomer에서 내 소중한 감정을 꽃으로 피워내어 정원을 가꾸고</p>
        <p>내가 어떤 감정을 느끼며 살아가고 있는지 알아보세요!</p>
      </section>
    </SMain>
  );
};

export default Info;
