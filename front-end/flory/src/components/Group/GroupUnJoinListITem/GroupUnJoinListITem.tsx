import React, { useRef, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { SForm, SMain } from "./styles";
import CreateInput from "../../common/CreateInput/CreateInput";

const convertDateFormat = (date: string) => {
  const target = new Date(date);
  const year = target.getFullYear();
  const month = target.getMonth() + 1;
  const day = target.getDate();
  return year + "." + month + "." + day;
};

const GroupUnJoinListITem = ({ group }: any) => {
  const [isDetail, setIsDetail] = useState(false);
  // const [content, setContent] = useState("");
  const contentInput = useRef<HTMLInputElement>(null);

  const handleClickDetail = () => {
    setIsDetail(!isDetail);
  };
  const handleClickFormArea = (e: any) => {
    e.stopPropagation();
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(contentInput.current?.value);
    // 가입 api 쏘기
  };

  return (
    <SMain onClick={handleClickDetail}>
      <div className="title__wrapper">
        <div className="group-name">{group.name}</div>
        <div className="private__section">
          {group.status === "waiting" && (
            <div id="accept-tag">승인 대기 중</div>
          )}
          {group.isPrivate && (
            <div>
              <FaLock color="#656565" />
            </div>
          )}
        </div>
      </div>
      <div className="content__wrapper">
        <div className="flex__oneline">
          <div>
            <FiCalendar />
          </div>
          <div className="group-content">
            {convertDateFormat(group.createdTime)}
          </div>
        </div>
        <div className="flex__oneline">
          <div>
            <FiUser />
          </div>
          <div className="group-content">{group.participantCnt} 명</div>
        </div>
        <div className="flex__oneline">
          <div>
            <RiFilePaper2Line />
          </div>
          {isDetail ? (
            <div className="group-content-detail">{group.info}</div>
          ) : (
            <div className="group-content">{group.info}</div>
          )}
        </div>
        {group.status !== "waiting" && (
          <SForm onClick={handleClickFormArea} isDetail={isDetail}>
            <CreateInput
              contentInput={contentInput}
              placeholder="승인 요청을 위한 가입 메시지를 작성해 주세요"
              page="group"
            />
            <div className="btn__wrapper">
              <button className="btn" onClick={handleSubmitForm}>
                참여 신청하기
              </button>
            </div>
          </SForm>
        )}
      </div>
    </SMain>
  );
};

export default GroupUnJoinListITem;
