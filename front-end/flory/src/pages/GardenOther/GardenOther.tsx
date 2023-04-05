import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
import { useControls, button } from "leva";

import ToggleButton from "../../components/common/ToggleButton/ToggleButton";
import Navbar from "../../components/common/Navbar/Navbar";

// import Base_map_new from "../../components/Garden/Park/Park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { getDiaryListAction } from "../../redux/modules/diary";
import Beach_map from "../../components/Garden/Beach/Beach_map";
import Camp_map from "../../components/Garden/Camp/Camp_map";
import Park_map from "../../components/Garden/Park/Park_map";
import { getCurrentGardenAction } from "../../redux/modules/garden";
import BackButton from "../../components/common/BackButton/BackButton";
import { Translate } from "aws-sdk";
import {
  checkDetail,
  updateShowMusic,
} from "../../redux/modules/music/music-slice";
import { SMain } from "./styles";

let isInitial = true;

const gardenTypeMap = (type: number | null) => {
  if (type === 0) return <Park_map page="other" />;
  else if (type === 1) return <Camp_map page="other" />;
  else if (type === 2) return <Beach_map page="other" />;
};

const Scene = (props: any) => {
  const otherGardenType = props.otherGardenType;
  const gl = useThree((state) => state.gl);
  useControls({
    screenshot: button(() => {
      const link = document.createElement("a");
      link.setAttribute("download", `${props.nickname}님의 감정 정원.png`);
      link.setAttribute(
        "href",
        gl.domElement
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      // console.log("ㅓㅓㅓㅓㅓㅓ", canvas);

      link.click();
    }),
  });

  return (
    <>
      {/* <Loader /> */}
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.4} />
        {gardenTypeMap(otherGardenType)}
        {/* Park 맵 */}
        {/* <Base_map_new /> */}
        {/* <Park_map /> */}

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

const GardenOther = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState(false);
  const otherGardenData = useAppSelector(
    (state) => state.garden.otherGardenData
  );

  // 보고싶은 정원의 테마 type
  const otherGardenType = otherGardenData.type;

  // 보고싶은 정원 ID
  const gardenId = otherGardenData.gardenId;
  // 보고싶은 user ID
  const requestId = parseInt(location.pathname.slice(8));

  const handleMoveToGuestBook = () => {
    navigate("/guestbook", {
      state: {
        gardenData: otherGardenData,
      },
    });
  };

  useEffect(() => {
    dispatch(getCurrentGardenAction(requestId));
  }, []);

  useEffect(() => {
    const inputData = {
      gardenId,
      requestId,
    };
    if (gardenId) {
      dispatch(getDiaryListAction(inputData));
      setIsExist(true);
    }
  }, [gardenId, dispatch]);

  dispatch(updateShowMusic(true));
  dispatch(checkDetail(false));
  return (
    <SMain gardenType={otherGardenType}>
      {/* <> */}
      {isExist && (
        <>
          <BackButton color="white" />

          <div
            style={{
              position: "absolute",
              top: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "10",
              color: "black",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            {otherGardenData.nickname}님의 감정 정원입니다
          </div>
          <ToggleButton state="other" gardenType={otherGardenType} />
          <Canvas shadows={true} gl={{ preserveDrawingBuffer: true }}>
            {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
            <OrbitControls
              maxPolarAngle={Math.PI / 2.8}
              minZoom={30}
              maxZoom={200}
              // 쉬프트 마우스 왼쪽 이동 막는 기능
              enablePan={false}
            />
            <Scene
              otherGardenType={otherGardenType}
              nickname={otherGardenData.nickname}
            ></Scene>
          </Canvas>
          {/* 네브바 */}
          <Navbar />
        </>
      )}
    </SMain>
  );
};

export default GardenOther;
