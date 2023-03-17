import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../../components/common/Accordion/Accordion";
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
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
        <div className="inner-header flex">환경 설정</div>
      </div>
      {/* 뒤로 가기 아이콘 */}
      <FontAwesomeIcon
        className="back-icon"
        onClick={handleGoBack}
        icon={faArrowLeft}
      />
      <div className="box-Accordion">
        <Accordion title="계정" contents={contents} icon={faUser}/>
        <Accordion title="알림" contents={contents} icon={faBell}/>
        <Accordion title="정보" contents={contents} icon={faCircleInfo}/>
        </div>
    </SMain>
  );
};

export default Setting;
