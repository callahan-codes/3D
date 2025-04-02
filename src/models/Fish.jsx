import { useRef } from "react";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";

export default function Fishes() {

  const spriteRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  // sprite data 
  const spriteData = [
    { 
      path: "/3D/images/fish-orange.png", 
      startPosition: [-10, 45, -100], 
      speedX: 0.5, 
      speedY: 1, 
      amplitudeX: 3, 
      amplitudeY: 2,
      scale: 2.5
    },
    { 
      path: "/3D/images/fish-blue.png", 
      startPosition: [10, 45, -100], 
      speedX: 0.6, 
      speedY: 1.2, 
      amplitudeX: 2.5, 
      amplitudeY: 2.5,
      scale: 2
    },
    { 
      path: "/3D/images/fish-green.png", 
      startPosition: [0, 48, -100], 
      speedX: 0.7, 
      speedY: 0.8, 
      amplitudeX: 4, 
      amplitudeY: 1.5,
      scale: 5
    },
    { 
      path: "/3D/images/fish-yellow.png", 
      startPosition: [8, 48, -100], 
      speedX: 0.7, 
      speedY: 1.2, 
      amplitudeX: 12, 
      amplitudeY: 5,
      scale: 6.5
    },
    { 
      path: "/3D/images/pufferfish.png", 
      startPosition: [0, 48, -100], 
      speedX: 0.4, 
      speedY: 0.2, 
      amplitudeX: 18, 
      amplitudeY: 3,
      scale: 8
    },
  ];

  const textures = useLoader(TextureLoader, spriteData.map(data => data.path));

  // sprite animations
  useFrame(({ clock }) => {
    spriteRefs.forEach((ref, index) => {
      if (ref.current) {
        const time = clock.elapsedTime;
        const { speedX, speedY, amplitudeX, amplitudeY, startPosition, scale } = spriteData[index];

        ref.current.position.set(startPosition[0], startPosition[1], startPosition[2]);
        const yPos = Math.sin(time * speedY) * amplitudeY + startPosition[1];
        ref.current.position.y = yPos;

        const xPos = Math.sin(time * speedX) * amplitudeX;
        ref.current.position.x = xPos + startPosition[0];
        ref.current.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <>
      {spriteData.map((_, index) => (
        <sprite key={index} ref={spriteRefs[index]}>
          {textures[index] && <spriteMaterial attach="material" map={textures[index]} />}
        </sprite>
      ))}
    </>
  );
}
