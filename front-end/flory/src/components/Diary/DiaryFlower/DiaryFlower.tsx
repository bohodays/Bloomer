// three
import * as THREE from "three";
import { useGLTF, OrthographicCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Tulip2 from "../../Flower/Tulip2";
import { SMain } from "./styles";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <Tulip2 />
      </Suspense>
    </>
  );
};

const DiaryFlower = () => {
  return (
    <SMain>
      <Canvas shadows={true}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2.8}
          minPolarAngle={Math.PI / 2.8}
          minZoom={20}
          maxZoom={20}
        />

        <Scene></Scene>
      </Canvas>
    </SMain>
  );
};
export default DiaryFlower;
