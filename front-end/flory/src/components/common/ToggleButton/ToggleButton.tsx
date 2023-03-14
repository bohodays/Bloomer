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
import { SNav } from "./styles";

const ToggleButton = () => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const [volumeMute, setVolumeMute] = useState(false);

  // 토글 핸들러 함수
  const handleToggleOnOff = () => {
    setToggleOnOff(!toggleOnOff);
  };

  // 소리 음소거 핸들러 함수
  const handleVolumeOnOff = () => {
    setVolumeMute(!volumeMute);
  };

  return (
    <SNav>
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
      <button className="menu-item gardenList">
        <FontAwesomeIcon icon={faLayerGroup} />
      </button>
      <button className="menu-item volume" onClick={handleVolumeOnOff}>
        {volumeMute ? (
          <FontAwesomeIcon icon={faVolumeOff} />
        ) : (
          <FontAwesomeIcon icon={faVolumeXmark} />
        )}
      </button>
      <button className="menu-item camera">
        <FontAwesomeIcon icon={faCamera} />
      </button>
    </SNav>
  );
};

export default ToggleButton;
