import React, { useState } from "react"
import { SContainer, SMain } from "./styles"
// import { enableRipple } from "@syncfusion/ej2-base"
// import {
//   DropDownButtonComponent,
//   ItemModel,
// } from "@syncfusion/ej2-react-splitbuttons"

// enableRipple(true)

// 월 주차 계산 함수
const convertWeekIdx = (date: Date) => {
  const currentDate = date.getDate()
  const firstDay = new Date(date.setDate(1)).getDay()
  return Math.ceil((currentDate + firstDay) / 7)
}

const DiaryDate = () => {
  const today = new Date()
  const year = today.getFullYear().toString().substring(2) + "년"
  const month = today.getMonth() + 1 + "월"
  const week = convertWeekIdx(today) + "주차"

  // let items: ItemModel[] = [
  //   {
  //     text: "Cut",
  //   },
  //   {
  //     text: "Copy",
  //   },
  //   {
  //     text: "Paste",
  //   },
  // ]

  return (
    <>
      <SContainer>
        <SMain>
          {/* <DropDownButtonComponent items={items} cssClass="e-caret-hide">
          </DropDownButtonComponent> */}
          {year}
        </SMain>
        <SMain>{month}</SMain>
        <SMain>{week}</SMain>
      </SContainer>
    </>
  )
}

export default DiaryDate
