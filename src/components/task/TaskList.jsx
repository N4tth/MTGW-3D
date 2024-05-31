// src/Planner.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useStore } from './store';
import { Box } from '@react-three/drei';

function BoxItem({ position }) {
  return (
    <Box args={[1, 1, 1]} position={position}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  );
}

export default function TaskList(props) {
  const items = useStore(state => state.items);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {items.map((item, index) => (
        <BoxItem key={index} position={item.position} />
      ))}
    </Canvas>
  );
}
