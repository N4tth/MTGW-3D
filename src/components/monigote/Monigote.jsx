import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { create } from "zustand";

import useMonigoteStore from "./monigoteStore"

export default function Monigote(props) {
    const { nodes, materials } = useGLTF('/assets/models/monigote-test.glb')

    return (
        <group {...props} dispose={null} scale={0.1}>
          <group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group>
                  <group position={[0, 7.997, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={267.814}>
                    <group>
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        geometry={nodes.Object_88.geometry}
                        material={materials['lambert4SG.001']}
                        skeleton={nodes.Object_88.skeleton}
                      />
                      <skinnedMesh
                        geometry={nodes.Object_89.geometry}
                        material={materials['lambert11SG.001']}
                        skeleton={nodes.Object_89.skeleton}
                      />
                      <group position={[0, 7.997, -49.682]} scale={100} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      )
}

useGLTF.preload('/assets/models/monigote-test.glb')