import { DiaryMemberType } from "./diaryMemberType";

export type DiaryGardenType = {
  id: number;
  deadLine: string;
  member: DiaryMemberType;
  music: string | null;
};
