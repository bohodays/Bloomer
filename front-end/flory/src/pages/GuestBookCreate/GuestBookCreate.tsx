import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { SSection } from "./styles";
import { FaPencilAlt } from "react-icons/fa";
import BackButton from "../../components/common/BackButton/BackButton";
import { GuestBookAddType } from "../../models/guestBook/GuestBookAddType";
import { useAppDispatch } from "../../redux/store.hooks";
import {
  addGuestBook,
  getAllGuestBookList,
} from "../../redux/modules/guestBook";
import { useNavigate } from "react-router";

const GuestBookCreate = () => {
  const [backgroundColor, setBackGroundColor] = useState("#f4f39e");
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeBackGroundColor = () => {};

  const handleTextChange = (e: any) => {
    contentRef.current!.value = e.target.value;
  };

  const handleSubmit = () => {
    const guestData: GuestBookAddType = {
      gardenId: 8,
      userId: 3,
      contents: contentRef.current!.value,
      color: backgroundColor,
    };
    dispatch(addGuestBook(guestData)).then((res) => {
      dispatch(getAllGuestBookList(8));
      navigate("/guestBook");
    });
  };

  return (
    <SSection backgroundColor={backgroundColor}>
      <BackButton color="black" />
      <div className="create__wrapper">
        <textarea ref={contentRef} onChange={handleTextChange}></textarea>
        <div className="color-button__wrapper">
          <div className="left">
            <button
              className="color yellow"
              onClick={() => setBackGroundColor("#f4f39e")}
            ></button>
            <button
              className="color pink"
              onClick={() => setBackGroundColor("#fdd7db")}
            ></button>
            <button
              className="color blue"
              onClick={() => setBackGroundColor("#b9eaf6")}
            ></button>
          </div>
          <button className="complete">
            <FaPencilAlt onClick={handleSubmit} />
            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
          </button>
        </div>
      </div>
    </SSection>
  );
};

export default GuestBookCreate;
