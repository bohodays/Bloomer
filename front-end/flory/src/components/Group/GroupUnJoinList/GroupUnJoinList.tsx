import React from "react";
import GroupUnJoinListITem from "../GroupUnJoinListITem/GroupUnJoinListITem";
import { SMain } from "./styles";

const GroupUnJoinList = ({ groupData }: any) => {
  return (
    <SMain>
      {groupData.map((group: object, idx: number) => {
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
