/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f14.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";

type GLTFResult = GLTF & {
  nodes: {
    f14_1: THREE.Mesh;
    f14_2: THREE.Mesh;
  };
  materials: {
    ["rose-yellow"]: THREE.MeshStandardMaterial;
    stem: THREE.MeshStandardMaterial;
  };
};

export function F14(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;

  const { nodes, materials } = useGLTF("/models/flowers/f14.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[x, y, z]} rotation={[1.22, 1.38, -0.79]} scale={0.11}>
        <mesh
          geometry={nodes.f14_1.geometry}
          material={materials["rose-yellow"]}
        />
        <mesh geometry={nodes.f14_2.geometry} material={materials.stem} />
      </group>
    </group>
  );
}

export default F14;
