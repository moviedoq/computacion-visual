

# 🌐 Visualización y Exportación de Objetos 3D con Python y React Three Fiber

Este proyecto explora dos enfoques complementarios para la generación de objetos 3D en el espacio:

1. 🔧 **Python**: usando `vedo`, `trimesh` y `open3d` para crear, visualizar y exportar modelos 3D en formatos estándar.
2. 💻 **React Three Fiber**: para renderizar objetos 3D en tiempo real desde un array de datos, controlando sus propiedades con `leva`.

---

## 📌 Generación desde Datos

### 🧠 Python

- Se define una lista de puntos 3D (coordenadas x, y, z).
- A cada punto se le asigna una **primitiva 3D** (cubo, esfera o cilindro) dependiendo de su índice.
- Se generan los objetos usando tres librerías distintas:
  - `vedo` (visualización rápida)
  - `trimesh` (manipulación y exportación)
  - `open3d` (operaciones avanzadas y exportación a GLTF)
- Las figuras se exportan en tres formatos:
  - `scene_vedo.stl`
  - `scene_trimesh.obj`
  - `scene_open3d.glb`

### 💡 React Three Fiber + Leva

- Se define un array de objetos 3D con tipo, posición y color.
- Se renderizan dinámicamente con `.map()` y condicionales según el tipo.
- Cada figura se puede controlar visualmente (escala, rotación) desde una interfaz creada con `leva`.

---

## 🎞️ GIFs de Ejemplo

### 🔍 Python – Escena generada y exportada
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-07_taller_escenas_parametricas/python/python.png?raw=true)

### 🌐 React Three Fiber – Control en tiempo real
![enter image description here](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-07_taller_escenas_parametricas/threejs/threejs.png?raw=true)

---

## 🧩 Código relevante

### ▶️ Python

Archivo: `scene_generator.py`

```python
points = [(0,0,0), (2,0,0), ...]
for i, (x,y,z) in enumerate(points):
    if i % 3 == 0: shape = vedo.Cube(...)
    elif i % 3 == 1: shape = vedo.Sphere(...)
    ...
    trimesh_objects.append(...)
    open3d_meshes.append(...)
vedo.write(scene_vedo, "scene_vedo.stl")
...
```

### ▶️ React

Archivo: `App.jsx`

```jsx
{data.map(obj => (
  <Shape key={obj.id} {...obj} />
))}

function Shape({ type, ... }) {
  const controls = useControls(...)
  return (
    type === "box" ? <mesh><boxGeometry /></mesh> : ...
  )
}
```

---

## ✅ Prompts utilizados

- *"Crear una lista de coordenadas para definir puntos en el espacio 3D..."*
- *"Generar primitivas 3D (cubos, esferas, cilindros) a partir de esos puntos"*
- *"¿Cómo usar bucles y condicionales para variar parámetros como tamaño, color o forma"?"
- *"Exportar la escena como archivos .OBJ, .STL, .GLTF"*
- *"Usar Three.js con React Three Fiber en codesandbox.io con leva"*

---

## 📁 Exportación a Formatos Estándar

| Formato | Librería     | Archivo generado          |
|---------|--------------|---------------------------|
| `.STL`  | vedo         | `scene_vedo.stl`          |
| `.OBJ`  | trimesh      | `scene_trimesh.obj`       |
| `.GLB`  | open3d       | `scene_open3d.glb`        |

Todos los objetos se combinaron en una sola escena y se exportaron correctamente.

---

## 💬 Comentarios personales

Durante el desarrollo:

- 💡 Aprendí cómo manejar escenas 3D desde diferentes librerías con estructuras similares, usando únicamente coordenadas y bucles.
- 💻 React Three Fiber con `leva` fue especialmente útil para visualizar cambios **en tiempo real**, ideal para entornos interactivos.
- 🛠️ El reto principal fue exportar múltiples objetos juntos (en `vedo`, se resolvió usando `Assembly`).

---

