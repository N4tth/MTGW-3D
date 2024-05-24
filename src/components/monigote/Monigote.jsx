import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Monigote(props) {
    const [modelLoaded, setModelLoaded] = useState(false);
    const { nodes, materials } = useGLTF('/assets/models/monigote-test.glb');

    useEffect(() => {
        // Verificar si el modelo se ha cargado
        if (nodes && materials) {
            setModelLoaded(true);
        }
    }, [nodes, materials]);

    if (!modelLoaded) {
        return null; // O cualquier otro indicador de carga
    }

    return (
        <group {...props} dispose={null} scale={0.1}>
            {/* Renderizar el modelo 3D ahora que está cargado */}
            <group>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group>
                            <group position={[0, 7.997, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={267.814}>
                                <group>
                                    {/* Asegúrate de que los nombres de las geometrías coincidan exactamente */}
                                    <primitive object={nodes["YOUR_GEOMETRY_NAME"]} />
                                    <skinnedMesh
                                        geometry={nodes["YOUR_GEOMETRY_NAME"].geometry}
                                        material={materials["YOUR_MATERIAL_NAME"]}
                                        skeleton={nodes["YOUR_GEOMETRY_NAME"].skeleton}
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

// Preload del modelo GLTF
useGLTF.preload('/assets/models/monigote-test.glb');
