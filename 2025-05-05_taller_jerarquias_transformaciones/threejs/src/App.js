import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";

function Scene() {
  const parentTransform = useControls("Padre", {
    posX: { value: 0, min: -5, max: 5 },
    posY: { value: 0, min: -5, max: 5 },
    rotY: { value: 0, min: 0, max: Math.PI * 2 },
  });

  const childTransform = useControls("Hijo", {
    posX: { value: 2, min: -5, max: 5 },
    rotZ: { value: 0, min: 0, max: Math.PI * 2 },
  });

  const grandchildTransform = useControls("Nieto", {
    posY: { value: 1, min: -5, max: 5 },
    scale: { value: 1, min: 0.1, max: 2 },
  });

  // Refs para helpers
  const parentRef = React.useRef();
  const childRef = React.useRef();
  const grandchildRef = React.useRef();

  // Mostrar ejes
  useHelper(parentRef, THREE.AxesHelper, 2);
  useHelper(childRef, THREE.AxesHelper, 1.5);
  useHelper(grandchildRef, THREE.AxesHelper, 1);

  return (
    <>
      {/* 🟫 Suelo con cuadrícula */}
      <gridHelper args={[20, 20]} />

      {/* 🟥 Padre */}
      <group
        ref={parentRef}
        position={[parentTransform.posX, parentTransform.posY, 0]}
        rotation={[0, parentTransform.rotY, 0]}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* 🔵 Hijo */}
        <group
          ref={childRef}
          position={[childTransform.posX, 0, 0]}
          rotation={[0, 0, childTransform.rotZ]}
        >
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>

          {/* 🟢 Nieto */}
          <group
            ref={grandchildRef}
            position={[0, grandchildTransform.posY, 0]}
            scale={[
              grandchildTransform.scale,
              grandchildTransform.scale,
              grandchildTransform.scale,
            ]}
          >
            <mesh>
              <coneGeometry args={[0.3, 1, 32]} />
              <meshStandardMaterial color="green" />
            </mesh>
          </group>
        </group>
      </group>
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [6, 6, 6] }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        <Scene />
      </Canvas>
      <Leva collapsed={false} />
    </div>
  );
}
