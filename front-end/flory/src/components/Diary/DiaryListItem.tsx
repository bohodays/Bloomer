import * as React from "react";
import { SFeed } from "./styles";
const DiaryListItem: React.FC<{ diary: any }> = (props) => {
  return <SFeed>{props.diary.content}</SFeed>;
};

export default DiaryListItem;
