import { useGLTF, Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";

export default function Monigote(props) {
    const [modelLoaded, setModelLoaded] = useState(false);
    
    const { nodes, materials } = useGLTF('/assets/models/monigote-test.glb');

    return (
        <group {...props} dispose={null} scale={0.1}>
          <group>
            <group rotation={[-Math.PI / 2, 0, 0.5]}>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group>
                  <group position={[45, 8, 83]} rotation={[-Math.PI / 2, 0, 1]} scale={131}>
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
                      <group position={[2, 5, 20]} scale={100} />
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
