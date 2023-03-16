import { useParams } from "react-router-dom";

const DiaryDetail = () => {
  const { diaryId } = useParams() as { diaryId: string };
  return (
    <div>
      야호
      <p>{diaryId}</p>
    </div>
  );
};
export default DiaryDetail;
