# Taller 1. Transformaciones

En este taller se exploran diferentes transformaciones geométricas (la traslación, rotación y escala) en diferentes entornos de programación. 


## 1. Implementación en Python

### Descripción:
En esta [implementación](https://colab.research.google.com/drive/1mk7YfmJPC2F4L_MBUHZr8xsRdO7S9XG9?usp=sharing) , se genera una animación en la que una esfera (representada como un círculo 2D) se transforma mediante una combinación de rotación, escaladoy traslación. Los resultados se guardan como imágenes individuales y se combinan en un GIF.

![GIF de transformación](https://raw.githubusercontent.com/moviedoq/computacion-visual/refs/heads/main/2025-04-15_taller1_transformaciones/python/transformacion_esfera_con_matriz.gif)

## 2. Implementación en Three.js (React Three Fiber)

### Descripción:
Esta implementación crea una animación de una esfera en 3D que se mueve en un círculo, rota sobre su eje Y y cambia de escala suavemente. Se utiliza React con la librería `@react-three/fiber` y `three.js` para la animación interactiva en un navegador. Se añade un pequeño punto azul para que se pueda apreciar la rotación sobre su eje.
![GIF de transformación](https://raw.githubusercontent.com/moviedoq/computacion-visual/refs/heads/main/2025-04-15_taller1_transformaciones/threejs/SphereGif.gif)
### Codigo relevante:

    import React, { useRef } from 'react';
    import { createRoot } from 'react-dom/client';
    import { Canvas, useFrame } from '@react-three/fiber';
    import { OrbitControls } from '@react-three/drei';
    import * as THREE from 'three';
    
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
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
          </mesh>
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

## 3. Implementación en Processing

### Descripción:

Esta implementación en Processing crea una esfera en 3D que se mueve en un círculo, rota sobre su eje Y y cambia de escala de forma oscilante. Es una visualización interactiva que se ejecuta en un entorno de Processing. También se añade un punto azul para visualizar mejor su rotación.

![GIF de transformación](https://raw.githubusercontent.com/moviedoq/computacion-visual/refs/heads/main/2025-04-15_taller1_transformaciones/processing/rotating_sphere.gif)


