import DiaryListItem from "../DiaryListItem/DiaryListItem";

const SAMPLE_DIARY_LIST = [
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "",
    emotion: "슬픔",
  },
  {
    id: 2,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "",
    emotion: "슬픔",
  },
  {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을했다 ㅠㅠ 야근해서 슬펐지만 집가는 길에 본 노을...",
    imgSrc: "",
    lat: 32,
    lng: 127,
    publicStatus: "전체공개",
    createdTime: "",
    emotion: "슬픔",
  },
];

const DiaryList = ({ SAMPLE_DIARY_LIST }: any): JSX.Element => {
  return (
    <div>
      {
        // SAMPLE_DIARY_LIST.length !== 0 ? (
        SAMPLE_DIARY_LIST.map((diary: any) => (
          <DiaryListItem diary={diary} key={diary.id} page="diary" />
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
