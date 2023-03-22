import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BackButton from "../../components/common/BackButton/BackButton";
import GuestBookComment from "../../components/GuestBook/GuestBookComment/GuestBookComment";
import { SMain } from "./styles";

const GuestBook = () => {
  const dummyData = [
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
    {
      name: "박중원",
      // 이미지?
      comment:
        "정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~ 정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~정원 너무 예뻐요~~~",
    },
  ];

  const degArray = [2, -2, 0, 2, 2, -2];

  return (
    <SMain>
      <BackButton color="black" />
      <div className="create">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      {dummyData.map((item, index) => {
        return <GuestBookComment info={item} deg={degArray[index % 6]} />;
      })}
    </SMain>
  );
};

export default GuestBook;
