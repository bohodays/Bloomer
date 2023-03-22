import React, { useState } from "react";
import { ReactComponent as Wave } from "../../assets/imgs/wave.svg";
import { SMain } from "./styles";

// mui
import Chip from "@mui/joy/Chip";
import { red } from "@mui/material/colors";
import Button from "../../components/common/Button/Button";

const SignupMusicSelect = () => {
  const [selectedItems, setSelectedItems] = useState({
    Classic: false,
    Jazz: false,
    Pop: false,
    HipHop: false,
    Reggae: false,
    RandB: false,
    electronic: false,
  });

  const initItems = {
    Classic: false,
    Jazz: false,
    Pop: false,
    HipHop: false,
    Reggae: false,
    RandB: false,
    electronic: false,
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
          color="primary"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          클래식
        </Chip>
        <Chip
          color="neutral"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          재즈
        </Chip>
      </div>
      <div className="chip__wrapper col2">
        <Chip
          color="danger"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          팝
        </Chip>
        <Chip
          color="info"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          힙합
        </Chip>
        <Chip
          color="success"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          레게
        </Chip>
      </div>
      <div className="chip__wrapper col3">
        <Chip
          color="warning"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          R&B
        </Chip>
        <Chip
          color="danger"
          disabled={false}
          onClick={function () {}}
          size="lg"
          variant="outlined"
        >
          일렉트로닉
        </Chip>
      </div>
      <div className="button__wrapper">
        <Button
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
