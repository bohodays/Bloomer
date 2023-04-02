import {
  faMusic,
  faPlay,
  faStop,
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { convertMusicFormat } from "../../../utils/utils";
import { SMusicWrapper } from "./styles";

interface Props {
  musicUrl: string;
}

const DiaryMusicButton = ({ musicUrl }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioControl = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
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
    if (audioControl.current?.play) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [audioControl.current?.play]);

  return (
    <SMusicWrapper onClick={handlePlay}>
      <audio
        ref={audioControl}
        src={musicUrl}
        autoPlay
        loop
        controls
        id="myAudio"
      ></audio>
      <FontAwesomeIcon
        className={`icon play`}
        icon={isPlaying ? faCirclePause : faCirclePlay}
      />
    </SMusicWrapper>
  );
};

export default DiaryMusicButton;
