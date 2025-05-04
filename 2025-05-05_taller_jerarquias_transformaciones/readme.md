
# 🌐 Visualización Jerárquica 3D con React Three Fiber + Leva

Este proyecto demuestra cómo construir y manipular una **jerarquía padre-hijo-nieto en 3D** utilizando **React Three Fiber** y **Leva** (sliders interactivos) para aplicar transformaciones en tiempo real.


## 🚀 Tecnologías utilizadas

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) – motor 3D basado en React
- [Three.js](https://threejs.org/) – motor gráfico WebGL
- [Leva](https://leva.pmnd.rs/) – controles de interfaz para sliders y ajustes en tiempo real
- [CodeSandbox](https://codesandbox.io/) – entorno de desarrollo web

---

## 🎯 Objetivos cumplidos

✅ Crear un proyecto con Vite y React Three Fiber  
✅ Estructura padre → hijo → nieto usando `<group>` y `<mesh>`  
✅ Aplicar transformaciones (rotación, traslación, escala) al nodo padre  
✅ Controlar esas transformaciones en tiempo real con sliders usando **Leva**  
✅ Bonus: agregar un **tercer nivel (nieto)** con transformaciones encadenadas  
✅ Mostrar un **suelo con cuadrícula (`GridHelper`)**

---

## 📦 Estructura de jerarquía

<group> Padre 🔴 Cubo rojo  
└── <group> Hijo 🔵 Esfera azul  
└── <group> Nieto 🟢 Cono verde


---

## 📸 Visualización (GIFs animados)
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_jerarquias_transformaciones/threejs/visualizacion.gif?raw=true)

---


## 🧠 Prompts utilizados

Este proyecto fue asistido por IA con los siguientes prompts:

-   “¿Cómo crear un sistema padre-hijo con transformaciones en React Three Fiber?”
    
-   “¿Cómo hacer sliders en tiempo real para rotación y posición?”
    
-   “Muestra una cuadrícula con `GridHelper`”
    
-   “Explica las transformaciones encadenadas en jerarquías 3D”

### ⚠️ Dificultades encontradas:
    
-   Las transformaciones encadenadas pueden ser difíciles de observar sin buena visualización (resuelto con `GridHelper`)
    
-   Algunos helpers no se renderizaban si el modelo era muy pequeño o si el fondo era muy claro.
## 📌 Conclusión

Este proyecto demuestra cómo representar relaciones jerárquicas en 3D usando React y Three.js. Es una excelente base para animaciones articuladas, simulación de brazos robóticos o visualización de transformaciones encadenadas en gráficos 3D.