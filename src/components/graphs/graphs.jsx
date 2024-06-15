import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';

const Bar = ({ scale, position, color }) => {
  return (
    <Box args={[1, 1, 1]} scale={scale} position={position}>
      <meshStandardMaterial attach="material" color={color} />
    </Box>
  );
};

const Graphs = ({ firstBarScale }) => {
  const barScales = [
    [firstBarScale, 1, 1], 
    [2, 1, 1], 
    [1, 1, 1] 
  ];

  const barPositions = [
    [firstBarScale / 2, -2, 0], 
    [1, 0, 0], 
    [0.5, 2, 0] 
  ];

  const barColors = ['#FF9EAA', '#FFD0D0', '#80B9AD'];

  return (
    <div className="graphs">
      <Canvas style={{ width: '600px', height: '400px' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-5, 5, 5]} intensity={3} />
        {barScales.map((scale, index) => (
          <Bar 
            key={index}
            scale={scale}
            position={barPositions[index]}
            color={barColors[index]}
          />
        ))}
        
        <PerspectiveCamera
          makeDefault  
          position={[0, 0, 7]}  
          fov={65}  
          aspect={600 / 400}  
          near={0.6} 
          far={100} 
        />
        
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Graphs;

