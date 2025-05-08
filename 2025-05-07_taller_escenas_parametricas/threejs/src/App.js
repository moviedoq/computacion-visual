// App.jsx
import React from "react"; // Importa la librería React.
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas de @react-three/fiber para renderizar la escena 3D.
import { OrbitControls } from "@react-three/drei"; // Importa los controles de órbita de @react-three/drei para permitir la interacción con la escena.
import { useControls } from "leva"; // Importa la función useControls de leva para agregar controles de interfaz de usuario para modificar propiedades de los objetos 3D.

const data = [
  { id: 1, type: "box", position: [0, 0, 0], color: "red" }, // Definición del primer objeto: un cubo rojo en el origen.
  { id: 2, type: "sphere", position: [2, 0, 0], color: "green" }, // Definición del segundo objeto: una esfera verde desplazada a la derecha.
  { id: 3, type: "cylinder", position: [-2, 0, 0], color: "blue" }, // Definición del tercer objeto: un cilindro azul desplazado a la izquierda.
];

function Shape({ type, position, color }) {
  // Componente funcional que recibe el tipo, la posición y el color del objeto 3D.

  // Usa los controles de leva para cambiar la escala y la rotación del objeto 3D.
  const controls = useControls(`Objeto ${type}`, {
    scale: { value: 1, min: 0.2, max: 3 }, // Control de escala con un valor inicial de 1, mínimo 0.2 y máximo 3.
    rotationY: { value: 0, min: 0, max: Math.PI * 2 }, // Control de rotación sobre el eje Y con un valor inicial de 0 y rango de 0 a 2*PI.
  });

  // Propiedades comunes para todos los objetos 3D.
  const commonProps = {
    position, // La posición del objeto en el espacio 3D.
    scale: [controls.scale, controls.scale, controls.scale], // La escala del objeto, controlada por el valor de 'scale'.
    rotation: [0, controls.rotationY, 0], // La rotación sobre el eje Y, controlada por 'rotationY'.
  };

  return (
    <>
      {/* Renderiza el objeto según su tipo (cubo, esfera o cilindro). */}
      {type === "box" && (
        <mesh {...commonProps}>
          <boxGeometry args={[1, 1, 1]} />{" "}
          {/* Geometría de un cubo de 1x1x1 unidades. */}
          <meshStandardMaterial color={color} />{" "}
          {/* Material estándar con el color especificado. */}
        </mesh>
      )}
      {type === "sphere" && (
        <mesh {...commonProps}>
          <sphereGeometry args={[0.6, 32, 32]} />{" "}
          {/* Geometría de una esfera con radio 0.6 y 32 segmentos. */}
          <meshStandardMaterial color={color} />
        </mesh>
      )}
      {type === "cylinder" && (
        <mesh {...commonProps}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />{" "}
          {/* Geometría de un cilindro con radio de 0.5 y altura 1. */}
          <meshStandardMaterial color={color} />
        </mesh>
      )}
    </>
  );
}

export default function App() {
  // Componente principal de la aplicación.
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
      {/* El componente Canvas define el espacio 3D y la cámara inicial con posición (0, 2, 6) y campo de visión (fov) de 50. */}
      <ambientLight intensity={0.5} />{" "}
      {/* Luz ambiental para iluminar la escena de manera uniforme. */}
      <directionalLight position={[2, 2, 2]} />{" "}
      {/* Luz direccional que simula una fuente de luz lejana. */}
      <OrbitControls />{" "}
      {/* Permite la interacción de la cámara con la escena usando controles de órbita. */}
      {/* Mapea los objetos de la lista 'data' y renderiza un 'Shape' para cada uno. */}
      {data.map((obj) => (
        <Shape key={obj.id} {...obj} />
      ))}
    </Canvas>
  );
}
