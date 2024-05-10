import React, { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

import monigote from "./monigote"

export function MonigoteComponent(props){
    const monigoteRef = useRef();
    const {nodes, materials} = useGLTF("/assets/models/mientras.glb")

    return (
        <group ref={monigoteRef} position={[-9,0,0]} {...props} dispose={null}>

        </group>
    )
}

const MonigoteComponent = () => {
    return (
        <div>
            <h2>Estado del Monigote</h2>
            <p>Hambre: {monigote.estado.hambre}</p>
            <p>Higiene: {monigote.estado.higiene}</p>
            <p>Diversión: {monigote.estado.diversion}</p>
            <p>Felicidad: {monigote.estado.felicidad}</p>
            <p>Ambición: {monigote.estado.ambicion}</p>
            <MonigoteModel />
        </div>
    );
};

export default MonigoteComponent;
