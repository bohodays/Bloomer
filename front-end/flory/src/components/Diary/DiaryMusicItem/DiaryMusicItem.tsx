import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioControl = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    onClick();
    if (audioControl.current) {
      if (isPlaying) {
        audioControl.current.pause();
        setIsPlaying(false);
      } else {
        audioControl.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <SMusicWrapper isSelected={isSelected}>
      <FontAwesomeIcon className="icon music" icon={faMusic} />
      <p>{musicTitle}</p>
      <audio ref={audioControl} src={musicUrl} controls id="myAudio"></audio>
      <FontAwesomeIcon
        className={`icon play ${musicTitle}`}
        icon={isSelected ? faStop : faPlay}
        onClick={handlePlay}
      />
    </SMusicWrapper>
  );
};

export default DiaryMusicItem;
