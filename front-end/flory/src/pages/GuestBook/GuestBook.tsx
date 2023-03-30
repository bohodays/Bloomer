import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/common/BackButton/BackButton";
import GuestBookComment from "../../components/GuestBook/GuestBookComment/GuestBookComment";
import { getAllGuestBookList } from "../../redux/modules/guestBook";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { SMain } from "./styles";

const GuestBook = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const guestBookList = useAppSelector(
    (state) => state.guestBook.guestBookList
  );

  useEffect(() => {
    // =============================
    // gardenId 수정 필요!!!
    // =============================
    dispatch(getAllGuestBookList(8));
  }, []);

  const degArray = [2, -2, 0, 2, 2, -2];

  return (
    <SMain>
      <BackButton color="black" />
      <div className="create" onClick={() => navigate("/guestbook/create")}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      {guestBookList.map((item, index) => {
        return <GuestBookComment info={item} deg={degArray[index % 6]} />;
      })}
    </SMain>
  );
};

export default GuestBook;
