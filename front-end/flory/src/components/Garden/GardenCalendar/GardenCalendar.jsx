import React from "react";
import Calendar from "react-calendar";
import "./styles.css";
import moment from "moment";
import { useNavigate } from "react-router";

const GardenCalendar = ({ year, month }) => {
  const navigate = useNavigate();
  const mark = ["2023-02-02", "2023-02-02", "2023-02-03", "2023-02-10"];

  const handleClickCalendar = () => {
    // 해당 년월 상세 일기 페이지로 이동
    // 데이터 옮기는 방법 생각하기
    navigate("/diary");
  };
  const isContained = (ele, date) => {
    if (ele === moment(date).format("YYYY-MM-DD")) {
      return true;
    }
  };

  return (
    <div className="calendar__wrapper" onClick={handleClickCalendar}>
      <Calendar
        activeStartDate={new Date(year, month - 1)}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        showNavigation={false}
        tileContent={({ date, view }) => {
          let html = [];
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push("jjjj");
          }
          // console.log("d", html)
          return (
            <>
              <div className="mark__wrapper">
                <div className="dot"></div>
                <div className="triangle"></div>
              </div>
            </>
          );
          //   } else {
          //     return (
          //       <>
          //         <div className="mark__wrapper">
          //           <div className="none"></div>
          //         </div>
          //       </>
          //     )
          //   }
          // }
        }}
      />
    </div>
  );
};

export default GardenCalendar;
