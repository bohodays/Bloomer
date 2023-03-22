import React, { useEffect, useState } from "react";
import GroupSearchInput from "../../components/Group/GroupSearchInput/GroupSearchInput";
import GroupUnJoinList from "../../components/Group/GroupUnJoinList/GroupUnJoinList";
import { SMain } from "./styles";

const GroupList = () => {
  return (
    <SMain>
      <div className="search__wrapper">
        <GroupSearchInput />
      </div>
      <div className="grouplist__wrapper">
        <GroupUnJoinList />
      </div>
    </SMain>
  );
};

export default GroupList;
