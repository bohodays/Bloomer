import { faMusic, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Button from "../../components/common/Button/Button";
import Navbar from "../../components/common/Navbar/Navbar";
import { SMain, SMusicWrapper } from "./styles";

const DiaryMusicSelect = () => {
  const [selectedItems, setSelectedItems] = useState<any>({
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
  });

  const handleChangeIcon = (e: any) => {
    if (e.target.className.baseVal.includes("item1")) {
      const newSelectedItems = {
        ...selectedItems,
        select1: !selectedItems.select1,
      };
      setSelectedItems(newSelectedItems);
    } else if (e.target.className.baseVal.includes("item2")) {
      const newSelectedItems = {
        ...selectedItems,
        select2: !selectedItems.select2,
      };
      setSelectedItems(newSelectedItems);
    } else if (e.target.className.baseVal.includes("item3")) {
      const newSelectedItems = {
        ...selectedItems,
        select3: !selectedItems.select3,
      };
      setSelectedItems(newSelectedItems);
    } else if (e.target.className.baseVal.includes("item4")) {
      const newSelectedItems = {
        ...selectedItems,
        select4: !selectedItems.select4,
      };
      setSelectedItems(newSelectedItems);
    } else if (e.target.className.baseVal.includes("item5")) {
      const newSelectedItems = {
        ...selectedItems,
        select5: !selectedItems.select5,
      };
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <SMain>
      {/* <div> */}
      <div className="info__wrapper">
        <p>원하는 음악을 선택해주세요? (수정필요)</p>
      </div>
      <SMusicWrapper>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 1</p>
        <FontAwesomeIcon
          className="icon play item1"
          icon={selectedItems.select1 ? faStop : faPlay}
          onClick={handleChangeIcon}
        />
      </SMusicWrapper>
      <SMusicWrapper>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 2</p>
        <FontAwesomeIcon
          className="icon play item2"
          icon={selectedItems.select2 ? faStop : faPlay}
          onClick={handleChangeIcon}
        />
      </SMusicWrapper>
      <SMusicWrapper>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 3</p>
        <FontAwesomeIcon
          className="icon play item3"
          icon={selectedItems.select3 ? faStop : faPlay}
          onClick={handleChangeIcon}
        />
      </SMusicWrapper>
      <SMusicWrapper>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 4</p>
        <FontAwesomeIcon
          className="icon play item4"
          icon={selectedItems.select4 ? faStop : faPlay}
          onClick={handleChangeIcon}
        />
      </SMusicWrapper>
      <SMusicWrapper>
        <FontAwesomeIcon className="icon music" icon={faMusic} />
        <p>제목 5</p>
        <FontAwesomeIcon
          className="icon play item5"
          icon={selectedItems.select5 ? faStop : faPlay}
          onClick={handleChangeIcon}
        />
      </SMusicWrapper>
      {/* </div> */}
      <div className="bottom__wrapper">
        <Button
          // onClick={onCreateDiary}
          contents="선택"
          addStyle={{
            width: "90%",
            // margin: "2rem  0",
            // height: "25%",
            padding: "0.3rem",
            background1: "rgb(244,175,255)",
            background2:
              "linear-gradient(90deg, rgba(244,175,255,1) 0%, rgba(156,147,221,1) 58%, rgba(150,119,210,1) 100%)",
            borderRadius: "12px",
            color: "#ffffff",
            fontSize: "1rem",
          }}
        />
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiaryMusicSelect;
