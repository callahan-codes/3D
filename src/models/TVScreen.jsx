import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VideoTexture } from 'three'; 

export default function LiveScreens({ gltf }) {

    useEffect(() => {
        if (gltf && gltf.scene) {

            // video elements
            const videoElementTV = document.createElement('video');
            const videoElementLaptop = document.createElement('video');

            // video sources
            videoElementTV.src = '/videos/television-vid.mp4'; 
            videoElementLaptop.src = '/videos/television-vid.mp4'; 

            // looped
            videoElementTV.loop = true;
            videoElementLaptop.loop = true;
            
            // muted
            videoElementTV.muted = true;
            videoElementLaptop.muted = true;

            // playback
            videoElementTV.playsInline = true; 
            videoElementLaptop.playsInline = true;

            // play video
            videoElementTV.play();
            videoElementLaptop.play();

            // video textures
            const videoTextureTV = new VideoTexture(videoElementTV);
            const videoTextureLaptop = new VideoTexture(videoElementLaptop);

            // texture properties
            videoTextureTV.minFilter = videoTextureTV.magFilter = THREE.LinearFilter;
            videoTextureTV.format = THREE.RGBFormat;

            videoTextureLaptop.minFilter = videoTextureLaptop.magFilter = THREE.LinearFilter;
            videoTextureLaptop.format = THREE.RGBFormat;

            // get 3d objects to place textures
            const tvScreen = gltf.scene.getObjectByName("Television-Screen");
            const LaptopScreen = gltf.scene.getObjectByName("Laptop-Screen");

            if (tvScreen) {
                tvScreen.material.map = videoTextureTV;
                tvScreen.material.needsUpdate = true;
                tvScreen.rotation.x = Math.PI / 2;
            }

            if (LaptopScreen) {
                LaptopScreen.material.map = videoTextureLaptop;
                LaptopScreen.material.needsUpdate = true;
            }
        }
    }, [gltf]);

    return null;
};
