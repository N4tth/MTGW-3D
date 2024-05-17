import "./stylesScene.css"

import { Canvas } from "@react-three/fiber";
import Monigote from "../../components/monigote/Monigote";
import Room from "../../components/room/Room";
import { OrbitControls } from "@react-three/drei";

export default function Scene(props){
    return(

        <Canvas >
            <OrbitControls />
            <Room position-y={-20}/>
            <Monigote/>
        </Canvas>
    )
}