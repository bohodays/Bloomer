import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { SMain } from "./styles";
import AWS from "aws-sdk";
import DiaryMusicItem from "../../components/Diary/DiaryMusicItem/DiaryMusicItem";
import { createInfoSaveAction } from "../../redux/modules/diaryCreate";

const DiaryMusicSelect = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const aa = useAppSelector((state) => state.diaryCreate.diaryCreateData);
  console.log(aa);

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

  // 일기 작성할 때 보내야 하는 건 music id임
  // 근데 감정 보내면 받는 응답은 음악들의 타이틀임
  // 내가 그 음악들의 id를 어떻게 알지?

  // 선택된 select를 보고 mid로 변환해야 함

  const handleNavigate = () => {
    const musicData = { mid: 1 };
    dispatch(createInfoSaveAction(musicData)).then(() => {
      navigate("/garden/edit");
    });
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
      <div className="select__wrapper" onClick={handleNavigate}>
        <div className="background">
          <p className="select__p">선택</p>
        </div>
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiaryMusicSelect;
