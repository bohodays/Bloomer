import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SMusicWrapper } from "./styles";

interface Props {
  isSelected: boolean;
  musicTitle: string;
  musicUrl: string;
  onClick: () => void;
}

const DiaryMusicItem = ({
  isSelected,
  musicTitle,
  musicUrl,
  onClick,
}: Props) => {
  return (
    <SMusicWrapper isSelected={isSelected}>
      <FontAwesomeIcon className="icon music" icon={faMusic} />
      <p>{musicTitle}</p>
      <audio src={musicUrl} controls id="myAudio"></audio>
      <FontAwesomeIcon
        className={`icon play ${musicTitle}`}
        icon={isSelected ? faStop : faPlay}
        onClick={onClick}
      />
    </SMusicWrapper>
  );
};

export default DiaryMusicItem;
