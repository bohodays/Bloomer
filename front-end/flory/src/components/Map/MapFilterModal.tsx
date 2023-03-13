import Button from "../common/Button/Button";
import BasicModal from "../common/Modal/BasicModal";

const MapFilterModal = () => {
  return (
    <BasicModal modalButton={<button>모달 열기</button>}>
      <h3>그룹 설정</h3>
      <Button
        type="submit"
        addStyle={{
          margin: "auto",
          fontSize: "1rem",
          width: "320px",
          height: "3rem",
          color: "#ffffff",
          background1: "rgb(101,182,255)",
          background2:
            "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
          borderRadius: "24px",
        }}
        contents="확인"
      />
    </BasicModal>
  );
};
export default MapFilterModal;
