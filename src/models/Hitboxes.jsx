import React, { useState, useCallback } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import useSingingSoda from './SingingSoda';

export default function Hitboxes({ setCursorStyle }) {

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { camera, controls } = useThree();
  const tl = gsap.timeline();
  const { playSound, stopSound } = useSingingSoda();

  // hover
  const onPointerOver = useCallback(() => {
    setHovered(true);
    setCursorStyle('pointer');
  }, [setCursorStyle]);

  const onPointerOut = useCallback(() => {
    setHovered(false);
    setCursorStyle('default');
  }, [setCursorStyle]);

  // cam & target positions per view
  const cameraPostions = {
    monitorView: [-90, 78.5, -35],
    tvView: [-75, 90, 72.5],
    fishView: [1.5, 41, -50],
    laptopView: [-30, 30, 74],
    juggView: [-38, 38, 48],
    shelvesView: [85, 65, -40]
  };

  const targetPositions = {
    monitorView: [-130, 76, -35],
    tvView: [-130, 95, 72.5],
    fishView: [1.5, 41, -100],
    laptopView: [-130, 35, 74],
    juggView: [-130, 33, 48],
    shelvesView: [85, 65, -100],
  };

  // camera animation
  const animateCamera = (cameraPosition, targetPosition) => {
    tl.clear();

    animateTarget(targetPosition);

    tl.to(camera.position, {
      onStart: () => {
        controls.minDistance = 10;
      },
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
      duration: 1.75,
      ease: 'power2.out',
    }, 0);
  };

  //target animation
  const animateTarget = (targetPosition) => {
    tl.to(controls.target, {
      onComplete: () => {
        controls.enableZoom = false;
        controls.enableRotate = false;
      },
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 1.75,
      ease: 'power2.out',
    });
  };

  // camera target/position reset
  const resetCamera = () => {
    tl.to(controls.target, {
      x: 0,
      y: 50,
      z: 0,
      duration: 1.75, 
      ease: 'power2.out',
      onComplete: () => {
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.minDistance = 150;
      }
    });
    tl.to(camera.position, {
      x: 220,
      y: 125,
      z: 220,
      duration: 1.75,
      ease: 'power2.out',
    }, 0);
  };

  // 3d object click handler
  const handleClick = (type) => {
    if (clicked) {
      resetCamera();
      stopSound();

    } else {
      switch (type) {
        case 'monitor':
          animateCamera(cameraPostions.monitorView, targetPositions.monitorView, type);
          break;

        case 'television':
          animateCamera(cameraPostions.tvView, targetPositions.tvView, type);
          break;

        case 'laptop':
          animateCamera(cameraPostions.laptopView, targetPositions.laptopView, type);
          break;

        case 'fishtank':
          animateCamera(cameraPostions.fishView, targetPositions.fishView, type);
          break;

        case 'shelves':
          animateCamera(cameraPostions.shelvesView, targetPositions.shelvesView, type);
          break;

        case 'jugg':
          animateCamera(cameraPostions.juggView, targetPositions.juggView, type);
          playSound();
          break;

        default:
          break;
      }
    }
    setClicked(!clicked);
  };

  return (
    <group>
      {/* monitor hitboxes */}
      <mesh
        position={[-102, 29, -33.5]}
        onClick={() => handleClick('monitor')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[40, 50, 85]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>

      {/* tv hitbox */}
      <mesh
        position={[-115, 95, 72.5]}
        onClick={() => handleClick('television')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[10, 50, 72]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>

      {/* laptop hitbox */}
      <mesh
        position={[-40, 41, 73.5]}
        onClick={() => handleClick('laptop')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[18, 10, 15]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>

      {/* fishtank hitbox */}
      <mesh
        position={[1.5, 41, -108]}
        onClick={() => handleClick('fishtank')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[65, 44, 1]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>

      {/* fishtank hitbox */}
      <mesh
        position={[85, 65, -108]}
        onClick={() => handleClick('shelves')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[70, 90, 1]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>

      {/* juggernaug hitbox */}
      <mesh
        position={[-48, 38, 50]}
        onClick={() => handleClick('jugg')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <boxGeometry args={[10, 2, 8.5]} />
        <meshStandardMaterial opacity={0} transparent={true} wireframe={false} />
      </mesh>
    </group>
  );
}
