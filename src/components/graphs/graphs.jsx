import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Material } from "three";

function graphs({completedCount}){
    const size = 1 + completedCount * 0.1;
    
    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10,10,10]}/>
            <Box args={[1, size, size]} position={[0,0,0]}> 
                <meshStandardMaterial attach={Material} color={"red"}/>
            </Box>
        </Canvas>
    );

}

export default graphs;
