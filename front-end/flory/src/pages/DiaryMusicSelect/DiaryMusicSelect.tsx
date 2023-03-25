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
  const [musicData, setMusicData] = useState<any>(null);
  const [totalData, setTotalData] = useState<any>([]);

  // 응답받은 음악 제목들을 순회하면서 s3의 url을 저장하는 함수
  const getMusicUrls = (musicArray: any) => {
    let test: any = [];

    musicArray.map((item: any) => {
      const params = {
        Bucket: "bloomer205",
        Key: `music/${item.title}.mp3`,
      };
      s3.getSignedUrlPromise("getObject", params)
        .then((url) => {
          test.push(url);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setMusicUrls(test);
        });
    });
  };

  useEffect(() => {
    if (!musicData) {
      dispatch(getMusicInfoAction("happy")).then((res) => {
        setMusicData(res.payload.response);
      });
    }

    // let test;
    if (musicData !== null) {
      getMusicUrls(musicData);
      if (musicData.length === 5 && musicUrls.length === 5) {
        const newItem = [];
        for (let i = 0; i < 5; i++) {
          const splitedTitle = musicData[i].title.split("-");
          const newTitle = splitedTitle
            .splice(0, splitedTitle.length - 1)
            .join(" ");

          newItem.push([newTitle, musicUrls[i]]);
        }
        setTotalData(newItem);
      }
    }
  }, [dispatch, musicData]);

  const handleItemClick = (key: string) => {
    setSelectedItems({ ...initItem, [key]: !selectedItems[key] });
  };

  const handleNavigate = () => {
    let musicId: any;
    const keys = Object.keys(selectedItems);
    for (let i = 0; i < keys.length; i++) {
      if (selectedItems[keys[i]] === true) {
        musicId = i;
      }
    }
    const musicTitle = { musicTitle: musicData[musicId].title };
    dispatch(createInfoSaveAction(musicTitle)).then(() => {
      navigate("/garden/edit");
    });
  };

  return (
    <SMain>
      <div className="info__wrapper">
        <p>원하는 음악을 선택해주세요? (수정필요)</p>
      </div>
      {totalData.length &&
        totalData.map((item: any, i: number) => {
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
