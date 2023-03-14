import React, { useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { SMain } from "./styles";
import DatePicker from "react-mobile-datepicker";

const Main = () => {
  const [state, setState] = useState({
    time: new Date(),
    isOpen: false,
  });

  const handleClick = () => {
    setState({ isOpen: true });
  };

  const handleCancel = () => {
    setState({ isOpen: false });
  };

  const handleSelect = (time) => {
    setState({ time, isOpen: false });
  };

  return (
    <SMain>
      <DatePicker
        value={state.time}
        isOpen={state.isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}
        isPopup={false}
        showHeader={false}
        dateFormat={["MM", "YYYY"]}
        confirmText="OK"
        cancelText="Cancel"
      />
      {/* 네브바 테스트를 위해 임시로 메인에 넣었습니다. 메인 페이지 작업할 때 빼주세요 */}
      <Navbar />
    </SMain>
  );
};

export default Main;
