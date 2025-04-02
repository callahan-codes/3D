import React from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export default function IFrameModel() { 

  return (
    <mesh           
      position={[-117, 80, -35]} 
      rotation={[0, Math.PI / 2, 0]}
    >
      <planeGeometry args={[30, 10]} />
      <meshBasicMaterial color="white" side={THREE.DoubleSide}>
        <Html 
          transform 
          // occlude 
          position={[-114.5, 80, -35]} 
          rotation={[0, Math.PI / 2, 0]}
        >
          <iframe
            width="1515"
            height="975"
            src="https://callahan-codes.github.io/client/"
            frameBorder="0px"
          />
        </Html>
      </meshBasicMaterial>
    </mesh>
  );
}
