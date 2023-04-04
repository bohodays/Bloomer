import { DiaryType } from "../../../models/diary/diaryType";
import DiaryListItem from "../DiaryListItem/DiaryListItem";

const DiaryList = ({ DIARY_LIST, page }: any): JSX.Element => {
  return (
    <div>
      {DIARY_LIST.length !== 0 ? (
        DIARY_LIST.map((diary: DiaryType, idx: number) => (
          <DiaryListItem diary={diary} key={idx} page={page} />
        ))
      ) : (
        <div>일기가 아직 없습니다 🌻</div>
      )}
    </div>
  );
};
export default DiaryList;
