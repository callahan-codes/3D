import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function useModelLoader({ onModelLoaded }) {

  // load gltf
  const gltf = useLoader(GLTFLoader, 'https://github.com/callahan-codes/3D/blob/main/src/gltf/project.gltf');

  // notify when the model is loaded
  useEffect(() => {
    if (gltf) {
      onModelLoaded(); 
    }
  }, [gltf, onModelLoaded]);

  return gltf;
}
