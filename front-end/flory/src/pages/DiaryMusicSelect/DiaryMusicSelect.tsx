import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { SMain } from "./styles";
import AWS from "aws-sdk";
import DiaryMusicItem from "../../components/Diary/DiaryMusicItem/DiaryMusicItem";
import {
  createInfoSaveAction,
  getMusicInfoAction,
} from "../../redux/modules/diaryCreate";

const DiaryMusicSelect = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<any>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const initItem = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION,
  });
  const s3 = new AWS.S3();
  const [musicUrls, setMusicUrls] = useState<any>([]);
  const [musicData, setMusicData] = useState<any>([]);
  const [totalData, setTotalData] = useState<any>([]);

  // 이전 페이지에서 감정을 저장시켰음
  const emotion = useAppSelector(
    (state) => state.diaryCreate.currentEmotionData[0].largeCategory
  );
  // 유저 id
  const userId = useAppSelector((state) => state.user.userData.userId);
  console.log(emotion, "지배 감정");

  // 텍스트 형태의 감정을 백엔드에 매칭된 인덱스로 바꿔주는 함수
  const changeTextToIndex = (string: string) => {
    if (string === "기쁨") return 0;
    else if (string === "안정") return 1;
    else if (string === "당황") return 2;
    else if (string === "분노") return 3;
    else if (string === "불안") return 4;
    else if (string === "상처") return 5;
    else if (string === "슬픔") return 6;
  };

  // 응답받은 음악 제목들을 순회하면서 s3의 url을 저장하는 함수
  const getMusicUrls = async (musicArray: any) => {
    try {
      const urls = await Promise.all(
        musicArray.map((item: any) => {
          const params = {
            Bucket: "bloomer205",
            Key: `music/${item.title}.mp3`,
          };
          console.log("s3에 넘기는 음악 제목", item.title);
  
          return s3.getSignedUrlPromise("getObject", params);
        })
      );
      console.log("최종 데이터", urls);
      setMusicUrls(urls);
    } catch (err) {
      console.error(err);
    }
  };
  

  useEffect(() => {
    const emotionIndex = changeTextToIndex(emotion);
      const emotionData = { emotionIndex, userId };
      dispatch(getMusicInfoAction(emotionData)).then((res) => {
        console.log(res, "dispatch로 받은 음악데이터")
        setMusicData(res.payload.response);
      });
  }, []);

  useEffect(() => {
    if (musicData && musicData.length > 0) {
      getMusicUrls(musicData);
    }
  }, [musicData]);
  
  useEffect(() => {
    console.log(musicData, musicUrls);
    if (musicUrls && musicUrls.length > 0) {
      const newItem = [];
      for (let i = 0; i < 5; i++) {
        const splitedTitle = musicData[i].title.split("-");
        const newTitle = splitedTitle.splice(0, splitedTitle.length - 1).join(" ");
        newItem.push([newTitle, musicUrls[i]]);
      }
      console.log(newItem, "새로운 데이터");
      setTotalData(newItem);
    }
  }, [musicUrls]);

  console.log("전체 음악", totalData);

  const handleItemClick = (key: string) => {
    setSelectedItems({ ...initItem, [key]: !selectedItems[key] });
  };

  const handleNavigate = () => {
    let musicId = null;
    const keys = Object.keys(selectedItems);
    for (let i = 0; i < keys.length; i++) {
      if (selectedItems[keys[i]] === true) {
        musicId = i;
      }
    }

    if (musicId !== null) {
      const musicTitle = { musicTitle: musicData[musicId].title };
      dispatch(createInfoSaveAction(musicTitle)).then(() => {
        navigate("/garden/edit");
      });
    }
  };

  return (
    <SMain>
      <div className="info__wrapper">
        <p>일기의 배경음악을 선택해주세요.</p>
      </div>
      {totalData.length > 0 &&
        totalData.map((item: any, i: number) => {
          console.log("돌리는 값", item);

          return (
            <DiaryMusicItem
              isSelected={selectedItems[i + 1]}
              musicTitle={item[0]}
              musicUrl={item[1]}
              onClick={() => handleItemClick(`${i + 1}`)}
            />
          );
        })}
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
