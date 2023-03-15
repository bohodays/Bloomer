import DiaryListItem from "../DiaryListItem/DiaryListItem";

const DiaryList = ({ DIARY_LIST, page }: any): JSX.Element => {
  return (
    <div>
      {
        // SAMPLE_DIARY_LIST.length !== 0 ? (
        DIARY_LIST.map((diary: any) => (
          <DiaryListItem diary={diary} key={diary.id} page={page} />
        ))
        // )
        // : (
        //   <div>피드가 없습니다.</div>
        // )
      }
    </div>
  );
};
export default DiaryList;
