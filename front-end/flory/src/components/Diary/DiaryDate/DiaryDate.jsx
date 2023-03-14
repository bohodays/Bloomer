import React, { useState } from "react";
import { SContainer, SMain } from "./styles";
import { Dropdown } from "semantic-ui-react";
// import Picker from "react-mobile-picker-scroll";

// import { enableRipple } from "@syncfusion/ej2-base"
// import {
//   DropDownButtonComponent,
//   ItemModel,
// } from "@syncfusion/ej2-react-splitbuttons"

// enableRipple(true)

// 월 주차 계산 함수
const convertWeekIdx = (date: Date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  return Math.ceil((currentDate + firstDay) / 7);
};

const DiaryDate = () => {
  const today = new Date();
  const year = today.getFullYear().toString().substring(2) + "년";
  const month = today.getMonth() + 1 + "월";
  const week = convertWeekIdx(today) + "주차";

  // const [state, setState] = useState({
  //   valueGroups: {
  //     title: "Mr.",
  //     firstName: "Micheal",
  //     secondName: "Jordan",
  //   },
  //   optionGroups: {
  //     title: ["Mr.", "Mrs.", "Ms.", "Dr."],
  //     firstName: ["John", "Micheal", "Elizabeth"],
  //     secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
  //   },
  // });

  // const handleChange = (name, value) => {
  //   setState(({ valueGroups }) => ({
  //     valueGroups: {
  //       ...valueGroups,
  //       [name]: value,
  //     },
  //   }));
  // };

  // const { optionGroups, valueGroups } = state;

  return (
    <>
      <SContainer>
        {/* <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={handleChange}
        /> */}
        <SMain>{year}</SMain>
        <SMain>{month}</SMain>
        <SMain>{week}</SMain>
      </SContainer>
    </>
  );
};

export default DiaryDate;
