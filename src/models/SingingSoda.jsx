import { useState, useEffect } from 'react';

export default function useSingingSoda() {

  const [audio] = useState(new Audio('/3D/public/audio/jugg-jingle.mp3'));

  // cleanup
  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  // play audio 
  const playSound = () => {
    audio.play().catch(error => {
      console.error('Audio play failed:', error);
    });
  };

  // stop audio 
  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return { playSound, stopSound };
};
