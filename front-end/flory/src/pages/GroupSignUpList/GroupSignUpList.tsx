import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSignUpMemberListAction } from "../../redux/modules/group";
import { useAppDispatch } from "../../redux/store.hooks";
import { SMain } from "./styles";

const GroupSignUpList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const groupId = parseInt(location.pathname.slice(18));

  useEffect(() => {
    dispatch(getSignUpMemberListAction(groupId)).then((res) => {
      const response = res.payload.response;
      if (response) {
        
      }
    });
  }, []);

  return (
    <SMain>
      테스트
    </SMain>
  );
};

export default GroupSignUpList;
