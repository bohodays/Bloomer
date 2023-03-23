import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import Navbar from "../../components/common/Navbar/Navbar";
import { useAppSelector } from "../../redux/store.hooks";
import { SMain, SMusicWrapper } from "./styles";
import AWS from "aws-sdk";
import DiaryMusicItem from "../../components/Diary/DiaryMusicItem/DiaryMusicItem";

const DiaryMusicSelect = () => {
  const navigate = useNavigate();
  const aa = useAppSelector((state) => state.diaryCreate.diaryCreateData);

  const [selectedItems, setSelectedItems] = useState<any>({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
  });

  const initItem = {
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
  };

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION,
  });
  const s3 = new AWS.S3();
  const [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    const params = {
      Bucket: "bloomer205",
      Key: `music/218-westernet-141021.mp3`,
    };

    s3.getSignedUrlPromise("getObject", params)
      .then((url) => setMusicUrl(url))
      .catch((err) => console.error(err));
  }, []);

  const handleItemClick = (key: string) => {
    setSelectedItems({ ...initItem, [key]: !selectedItems[key] });
  };

  return (
    <SMain>
      <div className="info__wrapper">
        <p>원하는 음악을 선택해주세요? (수정필요)</p>
      </div>
      <DiaryMusicItem
        isSelected={selectedItems.select1}
        musicTitle="제목1"
        musicUrl={musicUrl}
        onClick={() => handleItemClick("select1")}
      />
      <DiaryMusicItem
        isSelected={selectedItems.select2}
        musicTitle="제목1"
        musicUrl={musicUrl}
        onClick={() => handleItemClick("select2")}
      />
      <DiaryMusicItem
        isSelected={selectedItems.select3}
        musicTitle="제목1"
        musicUrl={musicUrl}
        onClick={() => handleItemClick("select3")}
      />
      <DiaryMusicItem
        isSelected={selectedItems.select4}
        musicTitle="제목1"
        musicUrl={musicUrl}
        onClick={() => handleItemClick("select4")}
      />
      <DiaryMusicItem
        isSelected={selectedItems.select5}
        musicTitle="제목1"
        musicUrl={musicUrl}
        onClick={() => handleItemClick("select5")}
      />
      {/* <SMusicWrapper isSelected={selectedItems.select1}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 1</p>
        <audio src={musicUrl} controls id="myAudio"></audio>
        <FontAwesomeIcon
          className="icon play item1"
          icon={selectedItems.select1 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select1: !selectedItems.select1 });
          }}
        />
      </SMusicWrapper> */}
      <div className="select__wrapper">
        <div className="background">
          <p className="select__p">선택</p>
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiaryMusicSelect;
