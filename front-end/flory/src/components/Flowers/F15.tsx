/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f15.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    f15_1: THREE.Mesh
    f15_2: THREE.Mesh
    f15_3: THREE.Mesh
    f15_4: THREE.Mesh
  }
  materials: {
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/f15.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.18, 0.83, -0.05]} scale={0}>
        <mesh geometry={nodes.f15_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.f15_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.f15_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.f15_4.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/f15.glb')
