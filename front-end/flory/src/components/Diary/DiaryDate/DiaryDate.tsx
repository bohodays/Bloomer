import React, { useState } from "react";
import { SContainer, SMain } from "./styles";

const DiaryDate = () => {
  const [year, setYear] = useState("23년");
  const [month, setMonth] = useState("3월");
  const [week, setWeek] = useState("첫째 주");

  return (
    <>
      <SContainer>
        <SMain>{year}</SMain>
        <SMain>{month}</SMain>
        <SMain>{week}</SMain>
      </SContainer>
    </>
  );
};

export default DiaryDate;
