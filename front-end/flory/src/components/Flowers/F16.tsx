/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f16.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    f16_1: THREE.Mesh
    f16_2: THREE.Mesh
    f16_3: THREE.Mesh
    f16_4: THREE.Mesh
  }
  materials: {
    stem: THREE.MeshStandardMaterial
    bammoo3: THREE.MeshStandardMaterial
    maebaltob_blule2: THREE.MeshStandardMaterial
    mabaltob_blue: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/f16.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[1.91, 0.26, -73.76]} rotation={[0, -1.3, -Math.PI / 2]} scale={[0.12, 0.07, 0.09]}>
        <mesh geometry={nodes.f16_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f16_2.geometry} material={materials.bammoo3} />
        <mesh geometry={nodes.f16_3.geometry} material={materials.maebaltob_blule2} />
        <mesh geometry={nodes.f16_4.geometry} material={materials.mabaltob_blue} />
      </group>
    </group>
  )
}

useGLTF.preload('/f16.glb')
