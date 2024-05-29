import { useGLTF, Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";

export default function Monigote(props) {
    const [modelLoaded, setModelLoaded] = useState(false);
    const { nodes, materials } = useGLTF('/assets/models/monigote-test.glb');

    useEffect(() => {
        if (nodes && materials) {
            setModelLoaded(true);
        }
    }, [nodes, materials]);

    if (!modelLoaded) {
        return <Html><div>Cargando...</div></Html>;
    }

    const monigoteMesh = "MONIGOTEMESH"; //geometry
    const monigoteMaterial = "MONIGOTEMATERIAL";

    if (!nodes[monigoteMesh] || !nodes[monigoteMesh].geometry || !materials[monigoteMaterial]){
        console.error(`Geometry not found ${monigoteMesh} or material ${monigoteMaterial}`);
        return <Html><div> MODEL ERROR </div></Html>
    }

    return (
        <group {...props} dispose={null} scale={0.1}>
            <group>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group>
                            <group position={[0, 7.997, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={267.814}>
                                <group>
                                    <primitive object={nodes[monigoteMesh]} />
                                    <skinnedMesh
                                        geometry={nodes[monigoteMesh].geometry}
                                        material={materials[monigoteMaterial]}
                                        skeleton={nodes[monigoteMesh].skeleton}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}


useGLTF.preload('/assets/models/monigote-test.glb');
