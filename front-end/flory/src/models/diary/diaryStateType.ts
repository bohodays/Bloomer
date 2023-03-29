import { ReduxStateType } from "../reduxStateType";
import { DiaryType } from "./diaryType";

export type DiaryStateType = {
  //  수정 해야 됨
  diaryData: DiaryType[];
  create: ReduxStateType;
  positionUpdate: ReduxStateType;
  allDiaryList: DiaryType[];
  monthDiaryList: DiaryType[];
  mapDiaryList: DiaryType[];
  groupDiaryList: DiaryType[];
};
