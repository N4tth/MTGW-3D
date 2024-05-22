import "./sceneInt"

import { Canvas } from "@react-three/fiber";
import Monigote from "../../components/monigote/Monigote";
import Room from "../../components/room/Room";
import { OrbitControls } from "@react-three/drei";

export default function Scene(props){


    return(

        <Canvas >
            <OrbitControls/>
            <Room position-y={-20}/>
            <Monigote position-y={-10} scale={0.1}/>
        </Canvas>
    )
}