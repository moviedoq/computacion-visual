import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente que anima la esfera
const AnimatedSphere = () => {
  const meshRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const t = clock.getElapsedTime();

    // Movimiento circular
    meshRef.current.position.x = Math.sin(t) * 2;
    meshRef.current.position.z = Math.cos(t) * 2;

    // Rotación
    meshRef.current.rotation.y += 0.01;

    // Escalado suave
    const scale = Math.sin(t) + 1.5;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={meshRef}>
      {/* Esfera principal */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Marca azul */}
      <mesh position={[0, 0, 1.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <OrbitControls />
    </Canvas>
  );
};

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1 style={{ position: 'absolute', color: 'white', zIndex: 1 }}>
        Hola desde React
      </h1>
      <Scene />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
