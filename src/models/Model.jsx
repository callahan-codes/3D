import React from "react";
import useModelLoader from "./ModelLoader";
import LiveScreens from "./TVScreen";
import useAnimations from "./SceneAnimations";

export default function Model({ onModelLoaded }) {

    const gltf = useModelLoader({ onModelLoaded });
    const animationRefs = useAnimations();

    return (
        <>
            {/* main scene */}
            <primitive object={gltf.scene} scale={5} />

            {/* textures - "screens" */}
            {gltf.scene && <LiveScreens gltf={gltf} />}

            {/* animationed objects (moving parts) */}
            {gltf.scene && (
                <>
                    <primitive object={gltf.scene.getObjectByName("Lavalamp-Ball1")} ref={animationRefs[0]} scale={0.8} />
                    <primitive object={gltf.scene.getObjectByName("Lavalamp-Ball2")} ref={animationRefs[1]} scale={0.2} />
                    <primitive object={gltf.scene.getObjectByName("Lavalamp-Ball3")} ref={animationRefs[2]} scale={1} />
                    <primitive object={gltf.scene.getObjectByName("Lavalamp-Ball4")} ref={animationRefs[3]} scale={0.4} />
                    <primitive object={gltf.scene.getObjectByName("Lavalamp-Ball5")} ref={animationRefs[4]} scale={0.6} />
                </>
            )}
                                    
        </>
    );
}

