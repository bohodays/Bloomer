import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (audioControl.current) {
      if (!isSelected) {
        audioControl.current.pause();
        setIsPlaying(false);
      } else {
        audioControl.current.play();
        setIsPlaying(true);
      }
    }
  }, [isSelected]);

  return (
    <SMusicWrapper isSelected={isSelected} onClick={handlePlay}>
      <FontAwesomeIcon className="icon music" icon={faMusic} />
      <p>{musicTitle.slice(0, 28)}...</p>
      <audio ref={audioControl} src={musicUrl} controls id="myAudio"></audio>
      <FontAwesomeIcon
        className={`icon play`}
        icon={isSelected ? faStop : faPlay}
        // onClick={handlePlay}
      />
    </SMusicWrapper>
  );
};

export default DiaryMusicItem;
