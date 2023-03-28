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
  updatePositionAction,
} from "../../redux/modules/diary";
import Beach_map_edit from "../../components/Garden/Beach/Beach_map_edit";
import Camp_map_edit from "../../components/Garden/Camp/Camp_map_edit";
import Park_map_edit from "../../components/Garden/Park/Park_map_edit";
import Loading from "../Loading/Loading";
// import Base_map_new_test from "../../components/Garden/Base_map_new_test";

const Scene = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.4} />
        {/* <Base_map_new /> */}
        {/* Park 맵 */}
        {/* <Park_map_edit /> */}
        {/* <Base_map_new_edit /> */}

        {/* Beach 맵 */}
        {/* <Beach_map_edit /> */}

        {/* Camp 맵 */}
        <Camp_map_edit />
        {/* <Base_map /> */}
        {/* <EffectComposer multisampling={8}> */}
        {/* <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} /> */}
        {/* </EffectComposer> */}
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

  const imgFile = useAppSelector((state) => state.diaryCreate.imgSrc);

  const handlePositionUpdate = () => {
    if (fromGarden) {
      dispatch(updatePositionAction(diaryData)).then(() => navigate("/garden"));
    } else {
      dispatch(updatePositionAction(diaryData))
        .then(() => {
          console.log(currentCreateDiaryData, "요청 보내기 직전 정보");
          console.log(
            { diaryData: currentCreateDiaryData, imgFile },
            "확인확인"
          );

          dispatch(
            createDiaryAction({ diaryData: currentCreateDiaryData, imgFile })
          );
        })
        .then(() => {
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
        <div className="background" onClick={() => handlePositionUpdate()}>
          <p>완료</p>
        </div>
      </div>
    </SMain>
  );
};

export default GardenEdit;
