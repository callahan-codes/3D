import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Controls from './models/Controls';
import Lights from './models/Lights';
import Model from './models/Model';
import SceneBloom from './models/Bloom';
import LoadingScreen from './models/LoadingScreen';
import IFrameModel from './models/IFrame';
import Hitboxes from './models/Hitboxes';
import Fishes from './models/Fish';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [cursorStyle, setCursorStyle] = useState('default');

  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  const handleEnterClick = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="main-scene">
        {loading && <LoadingScreen isModelLoaded={modelLoaded} onEnterClick={handleEnterClick} />}
        <Canvas shadows
                camera={{
                  position: [220, 125, 220],
                  near: 0.1,
                  far: 10000.0,
                }}
                style={{ cursor: cursorStyle }}>
                  
          <Controls />
          <SceneBloom />
          <Lights />
          
          <IFrameModel />
          <Suspense fallback={null}>
            <Model onModelLoaded={handleModelLoaded} />
          </Suspense>
          <Hitboxes setCursorStyle={setCursorStyle} />  
          <Fishes/>

        </Canvas>
      </div>
    </>
  );
}

export default App;
