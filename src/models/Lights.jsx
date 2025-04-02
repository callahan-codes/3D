import React from 'react';

export default function Lights() {

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 10, 10]} intensity={0.7} />

      <rectAreaLight
        position={[-122, 94, 72.5]}
        color={0x0000FF}  
        intensity={50}  
        width={80}  
        height={50}  
        rotation={[0, Math.PI / 2, 0]}  
      />
    </>
  );
}
