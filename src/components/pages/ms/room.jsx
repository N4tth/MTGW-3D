import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import "./room.css"

import { MonigoteComponent } from './monigote';
import MonigoteModel from "../assets/models/monigote.glb";

const Room = () => {
  const feedButtonRef = useRef();
  const canvasRef = useRef();
  const navigate = useNavigate();
  const [feeding, setFeeding] = useState(false);

  const handleFeedButtonClick = () => {
    setFeeding(true);
    setTimeout(() => {
      setFeeding(false);
    }, 1000); 
  };
  const { nodes: roomNodes, animations: roomAnimations } = useGLTF("/assets/build/models/room.glb");
  const { nodes: monigoteNodes, animations: monigoteAnimations } = useGLTF(MonigoteModel);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <mesh position={[0, 0, -10]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>
        <group>
          <primitive object={monigoteNodes.Monigote} scale={0.02} />
          {monigoteAnimations.map((clip) => (
            <primitive key={clip.uuid} object={clip} />
          ))}
        </group>
        <group>
          <primitive object={roomNodes.Cuarto} />
          {roomAnimations.map((clip) => (
            <primitive key={clip.uuid} object={clip} />
          ))}
          <mesh
            position={[0, 0, -5]}
            onClick={handleFeedButtonClick}
            ref={feedButtonRef}
          >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
          </mesh>
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Room;