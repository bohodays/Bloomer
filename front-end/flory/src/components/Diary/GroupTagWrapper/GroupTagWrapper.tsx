import React from "react";
import GroupTag from "../GroupTag/GroupTag";
import { SWrapper } from "./styles";

const GroupTagWrapper = () => {
  const tagList = [
    "# 운동 모임",
    "# 운동 모임",
    "# 운동 모임",
    "# 운동 모임",
    "# 운동 모임",
  ];

  return (
    <SWrapper>
      {tagList.map((item) => (
        <GroupTag item={item} />
      ))}
    </SWrapper>
  );
};

export default GroupTagWrapper;
