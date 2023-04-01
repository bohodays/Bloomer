import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SMain } from "./styles";

import Base_map_new from "../../components/Garden/Park/Park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
// import Base_map_new_edit from "../../components/Garden/Park/Park_map_edit";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import {
  createDiaryAction,
  getDiaryListAction,
  updatePositionAction,
} from "../../redux/modules/diary";
import Beach_map_edit from "../../components/Garden/Beach/Beach_map_edit";
import Camp_map_edit from "../../components/Garden/Camp/Camp_map_edit";
import Park_map_edit from "../../components/Garden/Park/Park_map_edit";
import Loading from "../Loading/Loading";
import { dataReset } from "../../redux/modules/diaryCreate/diaryCreate-slice";
import { log } from "console";
// import Base_map_new_test from "../../components/Garden/Base_map_new_test";

const gardenTypeMap = (type: number | null) => {
  if (type === 0) return <Park_map_edit />;
  else if (type === 1) return <Camp_map_edit />;
  else if (type === 2) return <Beach_map_edit />;
};

const Scene = () => {
  const gardenType = useAppSelector((state) => state.garden.gardenData.type);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.4} />
        {gardenTypeMap(gardenType)}
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
    </>
  );
};

const GardenEdit = () => {
  // 현재 작성 중인 일기 데이터
  const currentCreateDiaryData = useAppSelector(
    (state) => state.diaryCreate.diaryCreateData
  );

  // 디버깅용
  // console.log(currentCreateDiaryData);

  const location = useLocation();
  // 일기 작성 flow 중 정원 편집 모드로 온 것이 아닌
  // 메인 화면에서 정원 편집모드로 온 것을 판별하기 위한 변수
  const fromGarden = location.state?.garden;

  const canvasRef = useRef<any>();
  const navigate = useNavigate();
  const diaryData = useAppSelector((state) => state.diary.diaryData);
  const dispatch = useAppDispatch();
  const requestId = useAppSelector((state) => state.user.userData.userId);
  const gardenId = currentCreateDiaryData.gid;

  function base64toFile(base_data: any, filename: any) {
    var arr = base_data.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // const replacedBase64String: any = base64String?.replace(
  //   /^data:image\/\w+;base64,/,
  //   ""
  // );
  // const blob = new Blob([replacedBase64String], { type: "image/png" });
  // const formData: any = new FormData();
  // formData.append("file", blob);
  // console.log(typeof formData, "asdasdasdasd");
  // console.log(formData, "asdasdasdasd1111111");
  // for (let value of formData.values()) {
  //   console.log(value, "value");
  // }
  // for (let key of formData.keys()) {
  //   console.log(key, "key");
  // }
  // const imgSrc = formData.get("file");
  // console.log(imgSrc, "뭔가 이상한거 같음...");

  const handlePositionUpdate = () => {
    // 가든에서 왔으면 꽃 움직이게만 하기
    if (fromGarden) {
      dispatch(updatePositionAction(diaryData)).then(() => navigate("/garden"));
      // 일기 작성 flow에서 왔으면 일기 저장 로직 수행
    } else {
      dispatch(updatePositionAction(diaryData))
        .then(async () => {
          console.log("아래되나용?");
          const base64String: string | null = localStorage.getItem("imgFile");

          let imgFile = null;
          if (base64String) {
            const file = base64toFile(base64String, "image_file.png");
            const form_data = new FormData();
            form_data.append("file", file);

            imgFile = form_data.get("file");
          }

          console.log(currentCreateDiaryData, "일기 생성 데이터 확인!!!");
          await dispatch(
            createDiaryAction({
              diaryData: currentCreateDiaryData,
              imgFile,
            })
          );
          dispatch(dataReset());
        })
        .then(async () => {
          localStorage.removeItem("imgFile");
          const inputData = {
            gardenId,
            requestId,
          };
          await dispatch(getDiaryListAction(inputData));
          navigate("/garden");
        });
    }
  };

  return (
    <SMain>
      <Canvas shadows={true} ref={canvasRef}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2.8}
          minZoom={30}
          maxZoom={200}
          // 쉬프트 마우스 왼쪽 이동 막는 기능
          enablePan={false}
        />
        <Scene></Scene>
      </Canvas>
      <div className="info__wrapper">
        <div className="background" onClick={handlePositionUpdate}>
          <p>완료</p>
        </div>
      </div>
    </SMain>
  );
};

export default GardenEdit;
