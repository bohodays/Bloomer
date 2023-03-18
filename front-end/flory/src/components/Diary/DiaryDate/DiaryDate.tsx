import React, { useState } from "react"
import { SContainer, SMain } from "./styles"
import { Dropdown } from "semantic-ui-react"
import DiaryDatePicker from "../DiaryDatePicker/DiaryDatePicker"

// 월 주차 계산 함수
const convertWeekIdx = (date: Date) => {
  const currentDate = date.getDate()
  const firstDay = new Date(date.setDate(1)).getDay()
  return Math.ceil((currentDate + firstDay) / 7)
}

const DiaryDate = () => {
  const target = new Date()
  const [year, setYear] = useState(target.getFullYear())
  const [month, setMonth] = useState(target.getMonth() + 1)
  const [week, setWeek] = useState("1주차")

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      {open && (
        <DiaryDatePicker
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          open={open}
          handleClose={handleClose}
        />
      )}
      <SContainer>
        <SMain onClick={handleOpen} className="date-picker">
          {year.toString().substring(2) + "년"}
        </SMain>
        <SMain onClick={handleOpen} className="date-picker">
          {month}월
        </SMain>
        <SMain>{week}</SMain>
      </SContainer>
    </div>
  )
}

export default DiaryDate
