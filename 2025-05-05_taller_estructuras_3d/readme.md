
# Visualización 3D de Modelos `.obj` / `.glb` en Python y JavaScript

  

Este proyecto contiene dos implementaciones para la carga, visualización e inspección de modelos 3D en formato `.obj` y `.glb`, usando dos tecnologías distintas:

  

- 💻 **Python** con `trimesh`, `vedo` y `matplotlib`

- 🌐 **JavaScript** con `React Three Fiber` y `Three.js`

  

---

  

## 📁 1. Visualización 3D en Python (Google Colab / Jupyter Notebook)

  ![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_estructuras_3d/python/rotacion.gif?raw=true)

### 🔧 Tecnologías usadas:

- `trimesh` para cargar y analizar modelos `.obj`, `.stl`, `.gltf`

- `vedo` para renderizado 3D interactivo y animaciones

- `imageio` para exportar animaciones como `.gif`

  

### 🔍 Funcionalidades:

- Carga de archivos `.obj` con `trimesh`

- Vista previa con colores distintos para vértices (rojo), aristas (verde) y caras (azul claro)

- Animación rotatoria exportable en formato `.gif`

- Información estructural básica del modelo: número de vértices, aristas y caras

  

### 📌 Lecciones aprendidas:

- Las transformaciones como `rotate()` en `vedo` son acumulativas; por ello se debe clonar la malla y aplicar rotaciones incrementales para evitar errores.

- Algunos efectos visuales como wireframe + puntos requieren combinación cuidadosa de `Mesh`, `Points`, y `Edges`.

---

  

## 🌐 2. Visualización Web 3D con React Three Fiber

![enter image description here](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_estructuras_3d/threejs/frog.png?raw=true)
### 🔧 Tecnologías usadas:

- `React` + `Vite`

- `@react-three/fiber` para integrar Three.js con React

- `@react-three/drei` para usar componentes utilitarios como `OrbitControls` y `Edges`

- `Three.js` directamente para cargar `.glb` y manipular materiales

  

### 🔍 Funcionalidades:

- Carga de un modelo `.glb` desde la carpeta `public/`

- Visualización con `OrbitControls`

- Alternancia entre:

- Vista por **caras** (`meshStandardMaterial`)

- Vista por **aristas** (`wireframe` + `Edges`)

- Vista por **vértices** (`pointsMaterial`)

- Interfaz básica con botones para cambiar el modo de visualización

  

### ✅ Archivo cargado:

`/public/modelo.glb`

  

---

  

## 🧠 Comentarios generales y reflexiones

  

### Lo aprendido:

- Cómo trabajar con diferentes formas de cargar geometrías en Python y JavaScript.

- Diferencias clave entre entornos locales (Jupyter/Colab) y web (Three.js):

- Python es excelente para análisis estructural y preprocesamiento.

- React Three Fiber es ideal para visualizaciones interactivas en la web.

- La importancia del manejo correcto de transformaciones 3D (evitar acumulación de rotaciones).

  

### Dificultades encontradas:

- Algunas funciones como `useOBJ` o `useSTL` no existen en `drei`, lo cual obligó a usar loaders manuales (`OBJLoader`, `GLTFLoader`).

- En `vedo`, deshacer transformaciones rotacionales no siempre regresaba la malla a su estado original — se solucionó usando rotaciones incrementales.

- En CodeSandbox, asegurarse de que los archivos `.glb` estén bien ubicados en `/public/` y se usen con rutas absolutas (`/modelo.glb`).

  

---

  

## 🧪 Prompts usados (en caso de modelos generativos o IA)

  

No se utilizaron modelos generativos automáticos, pero se utilizaron asistentes tipo IA (como ChatGPT) para:

- Generar código base para `vedo`, `trimesh`, y React Three Fiber

- Identificar errores como el mal uso de rotaciones acumulativas

- Sugerir formas eficientes de detectar mallas válidas (`isMesh`) dentro de la jerarquía GLTF

- Sugerir commits descriptivos y en inglés.
---

  

## 📌 Conclusión

  

Este proyecto permitió comparar dos enfoques modernos para trabajar con modelos 3D. A través de herramientas científicas y web, se lograron visualizaciones eficientes y adaptables para distintos propósitos: análisis técnico y presentación interactiva.