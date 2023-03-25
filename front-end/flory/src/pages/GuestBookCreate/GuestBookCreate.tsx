import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SSection } from "./styles";
import { FaPencilAlt } from "react-icons/fa";
import BackButton from "../../components/common/BackButton/BackButton";

const GuestBookCreate = () => {
  const [backgroundColor, setBackGroundColor] = useState("#f4f39e");

  const handleChangeBackGroundColor = () => {};

  return (
    <SSection backgroundColor={backgroundColor}>
      <BackButton color="black" />
      <div className="create__wrapper">
        <textarea></textarea>
        <div className="color-button__wrapper">
          <div className="left">
            <button
              className="color yellow"
              onClick={() => setBackGroundColor("#f4f39e")}
            ></button>
            <button
              className="color pink"
              onClick={() => setBackGroundColor("#fdd7db")}
            ></button>
            <button
              className="color blue"
              onClick={() => setBackGroundColor("#b9eaf6")}
            ></button>
          </div>
          <button className="complete">
            <FaPencilAlt />
            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
          </button>
        </div>
      </div>
    </SSection>
  );
};

export default GuestBookCreate;
