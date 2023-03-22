import React from "react";
import GroupUnJoinListITem from "../GroupUnJoinListITem/GroupUnJoinListITem";
import { SMain } from "./styles";

const SAMPE_DATA = [
  {
    id: 1,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "unjoin", //대기중 or 조인 or 조인X
  },
  {
    id: 2,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "HEllo what are you doing today??? this time i'll show you how to do this!!! first of all what about doign this like that?? this is very goot for you.fad", //설명
    isPrivate: true, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "unjoin", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
  {
    id: 3,
    name: "역삼동", //팀이름
    createdTime: "2023-03-15T13:20:26.98129", //그룹 만들어진 시간
    participantCnt: 5, //팀 조인인원
    info: "저희 방은 ~~~~~~~~~~를 위해 만들어졌습니다..!!! 두 줄까지 작성 가능 넘어가면 말줄ㅇ림표로 표시 될 예정!!!!!!!!!!!!호호호클릭하게 되면 남은 글자 모두 보이게 됩니다!!", //설명
    isPrivate: false, //비밀 그룹인지
    status: "waiting", //대기중 or 조인 or 조인X
  },
];

const GroupUnJoinList = () => {
  return (
    <SMain>
      {SAMPE_DATA.map((group, idx) => {
        return (
          <div>
            <GroupUnJoinListITem group={group} key={idx} />
          </div>
        );
      })}
    </SMain>
  );
};

export default GroupUnJoinList;
