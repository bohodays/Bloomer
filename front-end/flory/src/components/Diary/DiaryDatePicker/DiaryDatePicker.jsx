import React, { useCallback, useEffect, useState } from "react"
import DatePicker from "react-mobile-datepicker"

const DiaryDatePicker = ({
  year,
  setYear,
  month,
  setMonth,
  open,
  handleClose,
}) => {
  const [time, setTime] = useState(new Date(year, month - 1))

  const dateConfig = {
    year: {
      type: "year",
      format: "YYYY",
      caption: "년도",
      step: 1,
    },

    month: {
      type: "month",
      format: "M",
      caption: "월",
      step: 1,
    },
  }

  const handleSelect = useCallback((time) => {
    setYear(time.getFullYear())
    setMonth(time.getMonth() + 1)
    handleClose()
  })

  return (
    <div>
      <DatePicker
        value={time}
        isOpen={open}
        dateConfig={dateConfig}
        showHeader={true}
        headerFormat={`${time.getFullYear().toString().substring(2)}년 ${
          time.getMonth() + 1
        }월 일기 보기`}
        // showCaption={true}
        min={new Date(2021, 1)} // 보유한 일기 중 최소 날짜
        max={new Date(2023, 3)} // 보유한 일기 중 최대 날짜
        onSelect={handleSelect}
        onCancel={handleClose}
        // isPopup={false}
        confirmText="확인"
        cancelText="취소"
      />
    </div>
  )
}

export default DiaryDatePicker
