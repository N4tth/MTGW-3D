import React from 'react';
import { Canvas } from '@react-three/fiber';
import Monigote from '../../components/monigote/Monigote';
import Room from '../../components/room/Room';
import { OrbitControls } from '@react-three/drei';
import SceneInt from '../../components/sceneInterface/SceneInt';


export default function Scene(props) {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <Room scale={[10, 10, 10]} />
        <Monigote position={[0, -2, 0]} scale={[0.1, 0.1, 0.1]} />
      </Canvas>
      {/* Superponer SceneInt sobre el Canvas */}
      <SceneInt />
    </div>
  );
}
