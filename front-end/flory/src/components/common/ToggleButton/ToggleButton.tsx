import {
  faBars,
  faCamera,
  faLayerGroup,
  faVolumeOff,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store.hooks";
import { SNav } from "./styles";

const ToggleButton = ({ state, gardenType, capture }: any) => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const [volumeMute, setVolumeMute] = useState(false);
  const navigate = useNavigate();

  // 토글 핸들러 함수
  const handleToggleOnOff = () => {
    setToggleOnOff(!toggleOnOff);
  };

  // 소리 음소거 핸들러 함수
  const handleVolumeOnOff = () => {
    setVolumeMute(!volumeMute);
  };

  const handleMoveToGardenList = () => {
    navigate("/garden/list");
  };

  return (
    <SNav gardenType={gardenType}>
      <input
        type="checkbox"
        // href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label
        className="menu-open-button"
        htmlFor="menu-open"
        onClick={handleToggleOnOff}
      >
        {toggleOnOff ? (
          <FontAwesomeIcon className="lines" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="lines" icon={faBars} />
        )}
      </label>
      {state !== "other" && (
        <button
          className="menu-item gardenList"
          onClick={handleMoveToGardenList}
        >
          <FontAwesomeIcon className="gardenList__icon" icon={faLayerGroup} />
        </button>
      )}
      <button className="menu-item volume" onClick={handleVolumeOnOff}>
        {volumeMute ? (
          <FontAwesomeIcon className="volumeMute__icon" icon={faVolumeOff} />
        ) : (
          <FontAwesomeIcon className="volumeMute__icon" icon={faVolumeXmark} />
        )}
      </button>
      <button className="menu-item camera" onClick={capture}>
        <FontAwesomeIcon className="camera__icon" icon={faCamera} />
      </button>
    </SNav>
  );
};

export default ToggleButton;
