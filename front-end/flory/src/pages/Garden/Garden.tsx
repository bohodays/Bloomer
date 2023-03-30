import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sky,
  Cloud,
  Bvh,
  OrbitControls,
  Environment,
  Lightformer,
  Float,
  Sparkles,
  Stars,
} from "@react-three/drei";
import ToggleButton from "../../components/common/ToggleButton/ToggleButton";
import Navbar from "../../components/common/Navbar/Navbar";
import { SMain } from "./styles";

// import Base_map_new from "../../components/Garden/Park/Park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { getDiaryListAction } from "../../redux/modules/diary";
import Beach_map from "../../components/Garden/Beach/Beach_map";
import Camp_map from "../../components/Garden/Camp/Camp_map";
import Park_map from "../../components/Garden/Park/Park_map";

let isInitial = true;

const Scene = () => {
  return (
    <>
      {/* <Loader /> */}
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.4} />
        {/* Park 맵 */}
        {/* <Base_map_new /> */}
        <Park_map />

        {/* Beach 맵 */}
        {/* <Beach_map /> */}

        {/* Camp 맵 */}
        {/* <Camp_map /> */}

        {/* <EffectComposer multisampling={8}> */}
        {/* <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} /> */}
        {/* </EffectComposer> */}
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
    </>
  );
};

const Garden = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const gardenData = useAppSelector((state) => state.garden.gardenData);
  const locationData = location.state !== null ? location.state : null;

  // 보고 싶은 정원 ID
  const gardenId =
    locationData !== null && locationData.gid !== null
      ? locationData.gid
      : gardenData.gardenId;
  // 본인 ID
  const requestId = useAppSelector((state) => state.user.userData.userId);

  useEffect(() => {
    const inputData = {
      gardenId,
      requestId,
    };
    if (gardenId) {
      dispatch(getDiaryListAction(inputData));
    }
  }, [gardenId, dispatch]);

  return (
    <SMain>
      {locationData !== null && (
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10",
            color: "white",
          }}
        >
          {locationData.year}/{locationData.month}
        </div>
      )}
      <ToggleButton />
      <Canvas shadows={true}>
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
      {/* 이용안내 이동 버튼 */}
      <button onClick={() => navigate("/info")} className="moveToInfo">
        <FontAwesomeIcon icon={faQuestion} />
      </button>
      {/* 정원 편집 모드 버튼 */}
      <button
        onClick={() =>
          navigate("/garden/edit", {
            state: {
              garden: true,
            },
          })
        }
        className="moveToEdit"
      >
        <FontAwesomeIcon icon={faPaintRoller} />
      </button>
      {/* 네브바 */}
      <Navbar />
    </SMain>
  );
};

export default Garden;
