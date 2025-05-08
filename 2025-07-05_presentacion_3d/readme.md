
# README - Presentación: Sombreado y Suavizado en Computación Visual

Presentado por:

- Sergio Alejandro Ruiz Hurtado

- Michael Daniels Oviedo Quiroga

- David Santiago Velásquez Gómez
  

## Introducción

  

Este proyecto forma parte del curso de **Computación Visual** y tiene como objetivo explorar y explicar los fundamentos del **sombreado y suavizado** en gráficos 3D. A través de esta presentación, se abordan conceptos esenciales relacionados con la iluminación en entornos tridimensionales, así como técnicas clave utilizadas para representar de manera más realista las superficies de los objetos en una escena gráfica.

  

---

  

## Contenido de la Presentación

  

### 💡 Importancia de la Iluminación en 3D

  

-  **Realismo**: Simula cómo percibimos los objetos en el mundo real.

-  **Percepción de Forma y Volumen**: Ayuda a revelar la tridimensionalidad de las superficies.

-  **Atmósfera y Emoción**: Dirige la atención y establece un tono visual.

-  **Contexto Visual**: Sin luz, los objetos no serían visibles o parecerían planos.

  

### 📈 Interpolación de Color y Normales

  

- La **interpolación** es el proceso de estimar valores intermedios entre puntos conocidos.

- En gráficos, permite calcular colores o normales en los píxeles internos de un polígono a partir de sus vértices.

- Mejora la **eficiencia computacional** y aporta **suavidad visual**.

  

---

  

## Técnicas de Sombreado

  

### 1. **Flat Shading (Sombreado Plano)**

  

- Utiliza una única normal por cara.

- Cálculo de iluminación único por polígono.

- Resultado: color uniforme en toda la cara.

  

**Ventajas**:

- Muy rápido y eficiente.

- Útil para estilos *low-poly* o prototipado.

  

**Desventajas**:

- Apariencia facetada y poco realista.

- Saltos abruptos entre caras.

  

---

  

### 2. **Gouraud Shading**

  

- Interpola colores calculados en los vértices.

- Se produce un degradado suave a través de la superficie del polígono.

  

**Ventajas**:

- Suaviza la apariencia de los objetos.

- Menor costo computacional que Phong.

  

**Desventajas**:

- Los reflejos especulares pueden perderse.

- No representa bien detalles finos de iluminación.

  

---

  

### 3. **Phong Shading**

  

Esta técnica interpola **las normales** en cada píxel y calcula la iluminación usando el modelo de reflexión de Phong. A diferencia del método de Gouraud, el sombreado de Phong realiza cálculos por píxel, lo que resulta en un acabado mucho más detallado y realista.

  

**Ventajas**:

- Mayor realismo visual.

- Representación precisa de reflejos especulares.

- Ideal para superficies curvas.

- Base de muchos algoritmos modernos.

  

**Desventajas**:

- Mayor carga computacional.

- Limitado para materiales complejos.

- Aunque eficaz, puede considerarse obsoleto frente a modelos físicamente basados (PBR).

  

---

  

## ✍️ Aporte Personal

  

Mi participación en este proyecto se centró en la elaboración de la sección correspondiente al **Sombreado de Phong**. Me encargué de:

  

- Investigar el modelo de reflexión de Phong.

- Redactar la explicación técnica y visual.

- Sintetizar sus ventajas y desventajas.

- Preparar los elementos visuales de la diapositiva.

  

Este aporte permitió resaltar una de las técnicas más influyentes y utilizadas en el renderizado clásico, contribuyendo a la comprensión de cómo se logra el realismo gráfico en superficies curvas y brillantes.

  

