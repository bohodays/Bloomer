import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import DiaryCreateInput from "../../components/Diary/DiaryCreateInput/DiaryCreateInput";
import { SMain, SSection } from "./styles";
import useGeolocation from "react-hook-geolocation";

// mui
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";

import GroupTagWrapper from "../../components/Diary/GroupTagWrapper/GroupTagWrapper";
import Button from "../../components/common/Button/Button";
import BasicModal from "../../components/common/Modal/BasicModal";
import DiaryLocationModal from "../../components/Diary/DiaryLocationModal/DiaryLocationModal";

import { PlaceType } from "../../models/map/placeType";

declare global {
  interface Window {
    kakao: any;
  }
}

const DiaryCreate = () => {
  const [place, setPlace] = useState<PlaceType>({
    placeName: "",
    address: "",
    x: 0,
    y: 0,
  });

  const [selectedValue, setSelectedValue] = React.useState("a");

  // ============이미지 삽입 관련 변수=============
  const [selectedImg, setSelectedImg] = useState({
    image_file: "",
    preview_URL: "",
  });
  const fileInput = React.useRef<HTMLInputElement>(null);
  // ============================================

  const geolocation = useGeolocation();
  let isGeolocation = geolocation.latitude != null;
  let geocoder = new kakao.maps.services.Geocoder();

  function searchDetailAddrFromCoords(callback: any) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다

    geocoder.coord2Address(
      geolocation.longitude,
      geolocation.latitude,
      callback
    );
  }

  // 현재 위치 반환
  const getGeo = () => {
    if (isGeolocation) {
      searchDetailAddrFromCoords(function (result: any, status: any) {
        if (status === kakao.maps.services.Status.OK) {
          var detailAddr = !!result[0].road_address
            ? result[0].road_address.address_name
            : "";

          setPlace({
            placeName: "",
            address: detailAddr,
            x: geolocation.longitude,
            y: geolocation.latitude,
          });
        }
      });
    }
  };

  useEffect(() => {
    getGeo();
  }, [isGeolocation]);

  const handleAddImg = (e: React.MouseEvent<SVGSVGElement>) => {
    fileInput.current!.click();
  };

  const handleImgChange = (e: any) => {
    const imgFile = e.target.files[0];
    let reader = new FileReader();
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result as string;
      if (previewImgUrl) {
        setSelectedImg({
          image_file: imgFile,
          preview_URL: previewImgUrl,
        });
      }
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <SMain>
      <SSection>
        {/* 전체 공개인 경우 height 60% 올리는 로직 추가하기! */}
        <DiaryCreateInput />
        <div className="input__wrapper">
          <button className="image__button">
            <FontAwesomeIcon
              className="image-input__icon"
              icon={faImage}
              onClick={handleAddImg}
            />
          </button>
          <input
            className="file__input"
            type="file"
            ref={fileInput}
            // 가능한 업로드 파일 형식 제한
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleImgChange}
          />
          {/* {selectedImg.preview_URL && (
            <img className="preview-image" src={selectedImg.preview_URL} />
          )} */}

          <BasicModal
            modalButton={
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="전체 공개"
                />
              </FormGroup>
            }
          >
            <h3>공개 설정</h3>
            <div className="radio__wrapper">
              <p>전체 공개</p>
              <Radio {...controlProps("a")} />
            </div>
            <div className="radio__wrapper">
              <p>그룹 공개</p>
              <Radio {...controlProps("b")} />
            </div>
            <div className="radio__wrapper last__radio">
              <p>나만 공개</p>
              <Radio {...controlProps("c")} />
            </div>
          </BasicModal>
        </div>
        <div className="preview-image__wrapper">
          {selectedImg.preview_URL && (
            <img className="preview-image" src={selectedImg.preview_URL} />
          )}
        </div>
        {/* 많아졌을 때 문제있음. API 연결하고 수정해야 됨 */}
        {/* 그룹 태그 */}
        <GroupTagWrapper />
        <div className="location__wrapper">
          <div>기록 위치</div>
          <div className="location">
            {place.placeName ? place.placeName : place.address}
          </div>

          <DiaryLocationModal place={place} setPlace={setPlace} />
        </div>
      </SSection>
      <div className="bottom__wrapper">
        <Button
          contents="기록 완료"
          addStyle={{
            width: "90%",
            // margin: "2rem  0",
            height: "25%",
            background1: "rgb(46,33,98)",
            background2:
              "linear-gradient(90deg, rgba(132,120,185,1) 0%, rgba(46,33,98,1) 100%)",
            borderRadius: "16px",
            color: "#ffffff",
            fontSize: "1rem",
          }}
        />
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiaryCreate;
