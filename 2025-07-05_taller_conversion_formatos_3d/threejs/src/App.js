import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Componente que carga el modelo según el formato y extrae información
function Modelo({ formato, setInfo }) {
  const groupRef = useRef();

  useEffect(() => {
    let loader, url;

    switch (formato) {
      case "OBJ":
        loader = new OBJLoader();
        url = "/modelo.obj";
        break;
      case "STL":
        loader = new STLLoader();
        url = "/modelo.stl";
        break;
      case "GLTF":
        loader = new GLTFLoader();
        url = "/modelo.gltf";
        break;
      default:
        return;
    }

    loader.load(
      url,
      (obj) => {
        let mesh;
        let vertexCount = 0;

        if (formato === "GLTF") {
          mesh = obj.scene;
          mesh.traverse((child) => {
            if (child.isMesh && child.geometry?.attributes?.position) {
              vertexCount += child.geometry.attributes.position.count;
            }
          });
        } else if (formato === "STL") {
          const material = new THREE.MeshStandardMaterial({ color: "orange" });
          mesh = new THREE.Mesh(obj, material);
          vertexCount = obj.attributes.position.count;
        } else {
          mesh = obj;
          mesh.traverse?.((child) => {
            if (child.isMesh && child.geometry?.attributes?.position) {
              vertexCount += child.geometry.attributes.position.count;
            }
          });
        }

        // Limpiar el grupo antes de agregar el nuevo mesh
        while (groupRef.current?.children.length > 0) {
          groupRef.current.remove(groupRef.current.children[0]);
        }

        groupRef.current.add(mesh);
        setInfo({ formato, vertices: vertexCount });
      },
      undefined,
      (err) => console.error("Error al cargar el modelo:", err)
    );
  }, [formato, setInfo]);

  return <group ref={groupRef} />;
}

// Componente principal de la app
export default function App() {
  const [formato, setFormato] = useState("OBJ");
  const [info, setInfo] = useState({ formato: "OBJ", vertices: 0 });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Botones para cambiar de formato y mostrar info */}
      <div
        style={{ position: "absolute", zIndex: 1, padding: 10, color: "black" }}
      >
        <button onClick={() => setFormato("OBJ")}>OBJ</button>
        <button onClick={() => setFormato("STL")}>STL</button>
        <button onClick={() => setFormato("GLTF")}>GLTF</button>
        <p>
          🧾 Formato actual: <strong>{info.formato}</strong>
        </p>
        <p>
          🔢 Número de vértices: <strong>{info.vertices}</strong>
        </p>
      </div>

      {/* Lienzo 3D */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <OrbitControls />
        <Modelo formato={formato} setInfo={setInfo} />
      </Canvas>
    </div>
  );
}
