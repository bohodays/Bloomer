import {
  faMusic,
  faPlay,
  faStop,
  faCirclePlay,
  faCirclePause,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { convertMusicFormat } from "../../../utils/utils";
import { SMusicWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import { updateIsPlaying } from "../../../redux/modules/music/music-slice";

interface Props {
  musicUrl: string;
}

const DiaryMusicButton = ({ musicUrl }: Props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioControl = useRef<HTMLAudioElement>(null);
  const music = useAppSelector((store) => store.music);
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    console.log("야호");
    if (audioControl.current) {
      if (music.isPlaying) {
        console.log("야호1");
        dispatch(updateIsPlaying(false));
      } else {
        console.log("야호2");
        dispatch(updateIsPlaying(true));
      }
    }
  };
  useEffect(() => {
    if (music.isPlaying && audioControl.current?.src) {
      console.log("재생");
      audioControl.current.play();
      setIsPlaying(true);
    } else {
      console.log("정지");
      audioControl.current?.pause();
      setIsPlaying(false);
    }
  }, [music, musicUrl]);

  console.log(music.isPlaying, "와아아아아ㅏㅇ아");
  return (
    <SMusicWrapper onClick={handlePlay}>
      {musicUrl && (
        <audio
          ref={audioControl}
          src={musicUrl}
          loop
          autoPlay
          controls
          id="myAudio"
        ></audio>
      )}
      <FontAwesomeIcon
        className={`icon play`}
        icon={isPlaying ? faVolumeHigh : faVolumeMute}
      />
    </SMusicWrapper>
  );
};

export default DiaryMusicButton;
