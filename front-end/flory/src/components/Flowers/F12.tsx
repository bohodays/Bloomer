/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f12.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    f12_1: THREE.Mesh
    f12_2: THREE.Mesh
    f12_3: THREE.Mesh
    f12_4: THREE.Mesh
  }
  materials: {
    stem: THREE.MeshStandardMaterial
    ['Material.046']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.048']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/f12.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-1.93, 0.26, -74.42]} rotation={[-0.73, 0.83, 0.55]} scale={0.17}>
        <mesh geometry={nodes.f12_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f12_2.geometry} material={materials['Material.046']} />
        <mesh geometry={nodes.f12_3.geometry} material={materials['Material.047']} />
        <mesh geometry={nodes.f12_4.geometry} material={materials['Material.048']} />
      </group>
    </group>
  )
}

useGLTF.preload('/f12.glb')
