// 🧩 Importación de React y hooks necesarios
import React, { useRef, useState, Suspense } from "react";

// 🎨 Importación del motor de renderizado de Three.js para React
import { Canvas, useLoader } from "@react-three/fiber";

// 🧰 Utilidades de Drei (extensiones para Three.js en React)
import { OrbitControls, Edges, useGLTF } from "@react-three/drei";

// 🔧 Importación de constantes y utilidades desde Three.js
import * as THREE from "three";

// 📦 Componente que carga y muestra el modelo 3D
function ModelViewer({ viewMode }) {
  const group = useRef(); // Referencia al grupo que contiene el modelo

  // 🧲 Cargar el archivo GLB (debe estar en la carpeta /public)
  const { scene } = useGLTF("/modelo.glb");

  // 🔍 Buscar la primera malla con geometría en el modelo
  let mesh = null;
  scene.traverse((child) => {
    if (child.isMesh && !mesh) {
      mesh = child;
    }
  });

  // ⚠️ Si no se encuentra geometría, se interrumpe el renderizado
  if (!mesh) {
    console.warn("⚠️ No se encontró geometría en el modelo.");
    return null;
  }

  // 🎨 Visualización condicional según el modo actual: caras, aristas o puntos
  return (
    <group ref={group} scale={1.5}>
      {/* Vista: Caras del modelo (sólido) */}
      {viewMode === "faces" && (
        <mesh geometry={mesh.geometry}>
          <meshStandardMaterial color="white" side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Vista: Aristas con wireframe y bordes destacados */}
      {viewMode === "edges" && (
        <mesh geometry={mesh.geometry}>
          <meshStandardMaterial color="white" wireframe />
          <Edges />
        </mesh>
      )}

      {/* Vista: Vértices del modelo como puntos rojos */}
      {viewMode === "points" && (
        <points geometry={mesh.geometry}>
          <pointsMaterial size={0.02} color="red" />
        </points>
      )}
    </group>
  );
}

// 🚀 Componente principal que define la escena 3D y la interfaz
export default function App() {
  const [viewMode, setViewMode] = useState("faces"); // Estado para cambiar vista: 'faces', 'edges', 'points'

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* 🎬 Escena principal de Three.js */}
      <Canvas camera={{ position: [2, 2, 4] }}>
        <ambientLight intensity={0.6} /> {/* Luz ambiental suave */}
        <directionalLight position={[5, 5, 5]} /> {/* Luz direccional */}
        <OrbitControls /> {/* Control de cámara con el mouse */}
        <Suspense fallback={null}>
          {" "}
          {/* Esperar a que cargue el modelo */}
          <ModelViewer viewMode={viewMode} />
        </Suspense>
      </Canvas>

      {/* 🖱️ Interfaz flotante para seleccionar modo de visualización */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "white",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        }}
      >
        <strong>Visualización:</strong>
        <br />
        <button onClick={() => setViewMode("faces")}>Caras</button>
        <button onClick={() => setViewMode("edges")}>Aristas</button>
        <button onClick={() => setViewMode("points")}>Vértices</button>
      </div>
    </div>
  );
}
