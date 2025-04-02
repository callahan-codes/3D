import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function useAnimations() {

  const gltfRefs = [
    useRef(),   // lavaball 1
    useRef(),   // lavaball 2
    useRef(),   // lavaball 3
    useRef(),   // lavaball 4
    useRef()    // lavaball 5
  ];

  // lavaball positions
  const ballPositions = [
    { x: 108.35, y: 56, z: -101.25 },   // lavaball 1
    { x: 109, y: 63.5, z: -101.25 },    // lavaball 2
    { x: 110, y: 57, z: -102 },         // lavaball 3
    { x: 110, y: 59.5, z: -101.25 },    // lavaball 4
    { x: 109, y: 57, z: -102.25 },      // lavaball 5
  ];

  // lavaball animations
  useFrame(({ clock }) => {
    gltfRefs.forEach((ref, index) => {
      if (ref.current) {
        if (index < 5) {
          const speed = 0.5 + (index * 0.2);  
          const amplitude = 1 + (index * 0.5);  
          const yOffset = Math.sin(clock.elapsedTime * speed) * amplitude;  
          const ballPos = ballPositions[index];

          ref.current.position.y = yOffset + ballPos.y;
          ref.current.position.x = ballPos.x;
          ref.current.position.z = ballPos.z;
        }
      }
    });
  });

  return gltfRefs;
}
