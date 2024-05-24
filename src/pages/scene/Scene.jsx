import React from 'react';
import { Canvas } from '@react-three/fiber';
import Monigote from '../../components/monigote/Monigote';
import Room from '../../components/room/Room';
import { OrbitControls } from '@react-three/drei';

export default function Scene(props) {
  return (
    <Canvas>
      <OrbitControls />
      {/* Escala el objeto Room para que ocupe toda la pantalla */}
      <Room scale={[10, 10, 10]} />
      {/* Pasa la posición y la escala al Monigote */}
      <Monigote position={[0, -2, 0]} scale={[0.1, 0.1, 0.1]} />
    </Canvas>
  );
}
