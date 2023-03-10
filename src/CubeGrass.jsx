/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 cubeGrass.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cubeGrass.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.dirt.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.grass.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/cubeGrass.glb')
