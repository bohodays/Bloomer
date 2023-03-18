/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f24.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";

type GLTFResult = GLTF & {
  nodes: {
    f24_1: THREE.Mesh;
    f24_2: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function F24(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;

  const { nodes, materials } = useGLTF("/models/flowers/f24.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[x, y, z]} scale={[0.02, 0.55, 0.02]}>
        <mesh
          geometry={nodes.f24_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.f24_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

export default F24;
