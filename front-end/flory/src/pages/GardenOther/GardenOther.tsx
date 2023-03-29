import React, { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
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
} from "@react-three/drei"
import ToggleButton from "../../components/common/ToggleButton/ToggleButton"
import Navbar from "../../components/common/Navbar/Navbar"

// import Base_map_new from "../../components/Garden/Park/Park_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import Loading from "../Loading/Loading"
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks"
import { getDiaryListAction } from "../../redux/modules/diary"
import Beach_map from "../../components/Garden/Beach/Beach_map"
import Camp_map from "../../components/Garden/Camp/Camp_map"
import Park_map from "../../components/Garden/Park/Park_map"
import { getCurrentGardenAction } from "../../redux/modules/garden"

let isInitial = true

const Scene = () => {
  return (
    <>
      {/* <Loader /> */}
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.4} />
        {/* Park 맵 */}
        {/* <Base_map_new /> */}
        {/* <Park_map /> */}

        {/* Beach 맵 */}
        <Beach_map />

        {/* Camp 맵 */}
        {/* <Camp_map /> */}

        {/* <EffectComposer multisampling={8}> */}
        {/* <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} /> */}
        {/* </EffectComposer> */}
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
    </>
  )
}

const GardenOther = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [isExist, setIsExist] = useState(false)

  // 보고싶은 정원 ID
  const gardenId = useAppSelector(
    (state) => state.garden.otherGardenData.gardenId
  )
  // 요청하는 user ID
  const requestId = parseInt(location.pathname.slice(8))

  useEffect(() => {
    dispatch(getCurrentGardenAction(requestId))
  }, [])

  useEffect(() => {
    const inputData = {
      gardenId,
      requestId,
    }
    if (gardenId) {
      dispatch(getDiaryListAction(inputData))
      setIsExist(true)
    }
  }, [gardenId, dispatch])

  return (
    <>
      {isExist && (
        <>
          <ToggleButton state="other" />
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
          {/* 네브바 */}
          <Navbar />
        </>
      )}
    </>
  )
}

export default GardenOther
