import {
  faBars,
  faCamera,
  faLayerGroup,
  faVolumeOff,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import { SNav } from "./styles";
import { updateIsPlaying } from "../../../redux/modules/music/music-slice";

const ToggleButton = ({ state }: any) => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const music = useAppSelector((store) => store.music);
  const [volumeMute, setVolumeMute] = useState(false);
  // 토글 핸들러 함수
  const handleToggleOnOff = () => {
    setToggleOnOff(!toggleOnOff);
  };

  // 소리 음소거 핸들러 함수
  const handleVolumeOnOff = () => {
    console.log("볼륨 조정", volumeMute);
    if (music.isPlaying) {
      dispatch(updateIsPlaying(false));
      setVolumeMute(true);
    } else {
      dispatch(updateIsPlaying(true));
      setVolumeMute(false);
    }
  };

  useEffect(() => {
    if (music.isPlaying) {
      setVolumeMute(true);
    } else {
      setVolumeMute(false);
    }
  }, [music]);

  const handleMoveToGardenList = () => {
    navigate("/garden/list");
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
      {state !== "other" && (
        <button
          className="menu-item gardenList"
          onClick={handleMoveToGardenList}
        >
          <FontAwesomeIcon icon={faLayerGroup} />
        </button>
      )}
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
