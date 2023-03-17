import React, { Suspense, useRef } from "react";
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
import Base_map from "../../components/Garden/Base_map";
import ToggleButton from "../../components/common/ToggleButton/ToggleButton";
import Navbar from "../../components/common/Navbar/Navbar";
import { SMain } from "./styles";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <Base_map />
        {/* <EffectComposer multisampling={8}> */}
        {/* <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} /> */}
        {/* </EffectComposer> */}
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
    </>
  );
};

const Garden = () => {
  return (
    <SMain>
      <ToggleButton />
      <Canvas shadows={true}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
        <OrbitControls maxPolarAngle={Math.PI / 2.8} />

        <Scene></Scene>
      </Canvas>
      <Navbar />
    </SMain>
  );
};

export default Garden;
