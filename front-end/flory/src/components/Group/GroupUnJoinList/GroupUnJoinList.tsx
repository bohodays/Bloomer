import React from "react";
import GroupUnJoinListITem from "../GroupUnJoinListITem/GroupUnJoinListITem";
import { SMain } from "./styles";

const GroupUnJoinList = ({ groupData, top }: any) => {
  return (
    <SMain ref={top}>
      {groupData.map((group: object, idx: number) => {
        return <GroupUnJoinListITem group={group} key={idx} />;
      })}
    </SMain>
  );
};

export default GroupUnJoinList;
