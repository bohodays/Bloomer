import React, { useState, useEffect } from "react";
import { ReactComponent as Wave } from "../../assets/imgs/wave.svg";
import { SMain } from "./styles";

// mui
import Button from "../../components/common/Button/Button";
import Chip from "../../components/common/Chip/Chip";
import { useLocation, useNavigate } from "react-router-dom";

const SignupMusicSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const signupData = location.state.signupData;

  const [selectedItems, setSelectedItems] = useState<any>({
    Classic: false,
    Jazz: false,
    Pop: false,
    HipHop: false,
    Reggae: false,
    RandB: false,
    Electronic: false,
  });

  const handleSignUp = () => {
    navigate("/login");
  };

  return (
    <SMain>
      <div className="header">
        <div className="inner-header flex"></div>
        <div>
          <Wave />
        </div>
      </div>
      <p className="select__music-info">좋아하는 음악 장르를 선택해주세요.</p>
      <div className="chip__wrapper col1">
        <Chip
          content="클래식"
          addStyle={{
            fontColor: "#096BDE",
            borderColor: "#ADDBFF",
            hoverColor: "#e3f2fd",
            activeColor: "#bbdefb",
          }}
          active={selectedItems.Classic}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              Classic: !selectedItems.Classic,
            });
          }}
        />
        <Chip
          content="재즈"
          addStyle={{
            fontColor: "#e91e63",
            borderColor: "#f8bbd0",
            hoverColor: "#fce4ec",
            activeColor: "#f48fb1",
          }}
          active={selectedItems.Jazz}
          onClick={() => {
            setSelectedItems({ ...selectedItems, Jazz: !selectedItems.Jazz });
          }}
        />
      </div>
      <div className="chip__wrapper col2">
        <Chip
          content="팝"
          addStyle={{
            fontColor: "#ff9800",
            borderColor: "#ffe0b2",
            hoverColor: "#fff3e0",
            activeColor: "#ffcc80",
          }}
          active={selectedItems.Pop}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              Pop: !selectedItems.Pop,
            });
          }}
        />
        <Chip
          content="힙합"
          addStyle={{
            fontColor: "#673ab7",
            borderColor: "#d1c4e9",
            hoverColor: "#ede7f6",
            activeColor: "#b39ddb",
          }}
          active={selectedItems.HipHop}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              HipHop: !selectedItems.HipHop,
            });
          }}
        />
        <Chip
          content="레게"
          addStyle={{
            fontColor: "#4caf50",
            borderColor: "#c8e6c9",
            hoverColor: "#e8f5e9",
            activeColor: "#a5d6a7",
          }}
          active={selectedItems.Reggae}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              Reggae: !selectedItems.Reggae,
            });
          }}
        />
      </div>
      <div className="chip__wrapper col3">
        <Chip
          content="R&B"
          addStyle={{
            fontColor: "#795548",
            borderColor: "#d7ccc8",
            hoverColor: "#efebe9",
            activeColor: "#bcaaa4",
          }}
          active={selectedItems.RandB}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              RandB: !selectedItems.RandB,
            });
          }}
        />
        <Chip
          content="일렉트로닉"
          addStyle={{
            fontColor: "#607d8b",
            borderColor: "#cfd8dc",
            hoverColor: "#eceff1",
            activeColor: "#b0bec5",
          }}
          active={selectedItems.electronic}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              electronic: !selectedItems.electronic,
            });
          }}
        />
      </div>
      <div className="button__wrapper">
        <Button
          onClick={handleSignUp}
          addStyle={{
            margin: "auto",
            fontSize: "1rem",
            width: "50%",
            height: "2.2rem",
            color: "#ffffff",
            background1: "rgb(101,182,255)",
            background2:
              "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
            borderRadius: "16px",
            boxShadow: "5px 5px 5px 0px rgb(158 158 158)",
          }}
          contents="회원가입"
        />
      </div>
    </SMain>
  );
};

export default SignupMusicSelect;
