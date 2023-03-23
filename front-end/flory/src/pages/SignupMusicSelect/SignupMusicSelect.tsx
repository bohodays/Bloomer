import React, { useState, useEffect } from "react";
import { ReactComponent as Wave } from "../../assets/imgs/wave.svg";
import { SMain } from "./styles";

// mui
import Button from "../../components/common/Button/Button";
import Chip from "../../components/common/Chip/Chip";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store.hooks";
import { signupAction } from "../../redux/modules/user";

const SignupMusicSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const signupData = location.state.signupData;

  const [selectedItems, setSelectedItems] = useState<any>({
    classic: false,
    jazz: false,
    pop: false,
    hiphop: false,
    reggae: false,
    RnB: false,
    electronic: false,
  });

  const handleSignUp = () => {
    const userData = {
      ...signupData,
      ...selectedItems,
    };

    dispatch(signupAction(userData)).then(() => {
      navigate("/login");
    });
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
          active={selectedItems.classic}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              classic: !selectedItems.classic,
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
          active={selectedItems.jazz}
          onClick={() => {
            setSelectedItems({ ...selectedItems, jazz: !selectedItems.jazz });
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
          active={selectedItems.pop}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              pop: !selectedItems.pop,
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
          active={selectedItems.hiphop}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              hiphop: !selectedItems.hiphop,
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
          active={selectedItems.reggae}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              reggae: !selectedItems.reggae,
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
          active={selectedItems.RnB}
          onClick={() => {
            setSelectedItems({
              ...selectedItems,
              RnB: !selectedItems.RnB,
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
