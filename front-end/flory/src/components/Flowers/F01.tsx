import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";
import { useFrame, useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";

type GLTFResult = GLTF & {
  nodes: {
    f01_1: THREE.Mesh;
    f01_2: THREE.Mesh;
    f01_3: THREE.Mesh;
  };
  materials: {
    stem: THREE.MeshStandardMaterial;
    crokus: THREE.MeshStandardMaterial;
    bammoo: THREE.MeshStandardMaterial;
  };
};

export function F01(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;
  const location = useLocation();
  const modelRef = useRef<any>();
  const groupRef = useRef<any>();

  const { scene, camera } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  const [isDragging, setIsDragging] = useState(false);
  const [clickFlag, setClickFlag] = useState();

  useFrame(({ mouse }) => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }

    // console.log(isDragging);

    if (location.pathname.includes("garden/edit")) {
      if (isDragging) {
        const found = intersect(mouse);
        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue;

            // 물체가 마우스와 만난 지점으로 위치를 업데이트합니다.
            const newPosition = found[i].point;
            setPosition({ x: newPosition.x, y: y, z: newPosition.z });
          }
        }
      }
    }
  });

  if (location.pathname.includes("garden/edit")) {
    window.addEventListener("click", (e) => {
      console.log("클릭됨1");

      if (isDragging) {
        setIsDragging(false);
      }
    });
  }

  // 꽃을 클릭하면 isDragging 상태 변경
  const handleSetIsDragging = () => {
    if (location.pathname.includes("garden/edit")) {
      console.log("클릭됨2");
      if (!isDragging) {
        setIsDragging(true);
      }
    }
  };

  const [position, setPosition] = useState({ x, y, z });
  console.log(position);

  const { nodes, materials } = useGLTF("/models/flowers/f01.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[position.x, position.y, position.z]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? groupRef : modelRef}
        userData={{ draggable: true, name: "f01" }}
        onClick={() => {
          handleSetIsDragging();
        }}
      >
        <mesh geometry={nodes.f01_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f01_2.geometry} material={materials.crokus} />
        <mesh geometry={nodes.f01_3.geometry} material={materials.bammoo} />
      </group>
    </group>
  );
}

export default F01;
