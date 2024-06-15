import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';


import Monigote from '../../components/monigote/Monigote';
import Room from '../../components/room/Room';
import SceneInt from '../../components/sceneInterface/SceneInt';
import styles from './stylesScene.css';

const CameraController = () => {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(30, 20, 10); 
      cameraRef.current.lookAt(0, 15, 2.5); 
    }
    
  });

  return <PerspectiveCamera makeDefault ref={cameraRef} fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={100} />;
};

export default function Scene(props) {
    return (
      <div className="scene-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <CameraController />
          <OrbitControls />
          <Room />
          <Monigote />
        </Canvas>
        <div className="FooterButtonsContainer">
        <button className={styles.FooterButton} onClick={SceneInt.handleBath}>Baño</button>
          <button className={styles.FooterButton} onClick={SceneInt.handleFeed}>Alimentar</button>
          <button className={styles.FooterButton} onClick={SceneInt.handlePlay}>Jugar</button>
        </div>
      </div>
    );
  };
