import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../../components/common/Accordion/Accordion";
import { useNavigate } from 'react-router-dom';
import { logoutAction } from "../../redux/modules/user";
import { localData } from "../../redux/modules/user/token";
import { useAppDispatch } from "../../redux/store.hooks";

const Setting = () => {
  const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
  };

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const accessToken = localData.getAccessToken();
    dispatch(logoutAction(accessToken)).then(() => {
      localData.clear();
    });
  };

  const contents = (
    <div>
        <ul>
				<li><a href="#">Photoshop</a></li>
				<li><a href="#">HTML</a></li>
				<li><a href="#">CSS</a></li>
				<li><a href="#">Maquetacion web</a></li>
		</ul>
    </div>
  );
  
  return (
    <SMain>
      <div className="header">
        {/* 뒤로 가기 아이콘 */}
        <FontAwesomeIcon
          className="back-icon"
          onClick={handleGoBack}
          icon={faArrowLeft}
        />
        <div className="inner-header flex">환경 설정</div>
      </div>
      
      <div className="box-Accordion">
        <Accordion title="계정" contents={contents} icon={faUser}/>
        <Accordion title="알림" contents={contents} icon={faBell}/>
        <Accordion title="정보" contents={contents} icon={faCircleInfo}/>
      </div>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
        <button>회원탈퇴</button>
      </div>
    </SMain>
  );
};

export default Setting;
