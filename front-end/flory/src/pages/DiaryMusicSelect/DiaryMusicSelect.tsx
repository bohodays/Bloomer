import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import Navbar from "../../components/common/Navbar/Navbar";
import { SMain, SMusicWrapper } from "./styles";

const DiaryMusicSelect = () => {
  const navigate = useNavigate();
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

  return (
    <SMain>
      {/* <div> */}
      <div className="info__wrapper">
        <p>원하는 음악을 선택해주세요? (수정필요)</p>
      </div>
      <SMusicWrapper isSelected={selectedItems.select1}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 1</p>
        <FontAwesomeIcon
          className="icon play item1"
          icon={selectedItems.select1 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select1: !selectedItems.select1 });
          }}
        />
      </SMusicWrapper>
      <SMusicWrapper isSelected={selectedItems.select2}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 2</p>
        <FontAwesomeIcon
          className="icon play item2"
          icon={selectedItems.select2 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select2: !selectedItems.select2 });
          }}
        />
      </SMusicWrapper>
      <SMusicWrapper isSelected={selectedItems.select3}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 3</p>
        <FontAwesomeIcon
          className="icon play item3"
          icon={selectedItems.select3 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select3: !selectedItems.select3 });
          }}
        />
      </SMusicWrapper>
      <SMusicWrapper isSelected={selectedItems.select4}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 4</p>
        <FontAwesomeIcon
          className="icon play item4"
          icon={selectedItems.select4 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select4: !selectedItems.select4 });
          }}
        />
      </SMusicWrapper>
      <SMusicWrapper isSelected={selectedItems.select5}>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 5</p>
        <FontAwesomeIcon
          className="icon play item5"
          icon={selectedItems.select5 ? faStop : faPlay}
          onClick={() => {
            setSelectedItems({ ...initItem, select5: !selectedItems.select5 });
          }}
        />
      </SMusicWrapper>
      {/* </div> */}
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
