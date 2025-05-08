
# 🔍 Procesamiento de Imágenes con Convolución Manual en NumPy y OpenCV

Este proyecto demuestra cómo aplicar convolución 2D manualmente a una imagen en escala de grises usando **NumPy**, comparando los resultados con los obtenidos mediante **OpenCV (`cv2.filter2D`)**.

---

## 🧠 Lógica de Convolución Manual

La convolución manual consiste en recorrer cada píxel de la imagen y aplicar un **kernel** (matriz) sobre una **región local** centrada en ese píxel. Se multiplica cada valor de la región por el valor correspondiente del kernel y se suman los resultados. Esto se hace para **modificar características locales** como bordes, desenfoques o nitidez.

🔁 En contraste, `cv2.filter2D()` realiza este proceso **de forma optimizada en C++**, aprovechando funciones internas de OpenCV para hacerlo más rápido y eficiente, pero sin dejar ver el funcionamiento interno del algoritmo.

---

## 🖼️ Resultados Visuales y Comparativos

### 📌 GIF Animado: Comparación de Filtros

![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-07_taller_convoluciones_personalizadas/python/comparacion_filtros.gif?raw=true)
Este GIF muestra:

1. **Imagen original**
2. **Sharpen (manual y OpenCV)**
3. **Blur (manual y OpenCV)**
4. **Detección de esquinas tipo Sobel (manual y OpenCV)**

---

## 📁 Código y Notebook

📎 Puedes ver y ejecutar el código completo en este notebook de Google Colab:

👉 [Abrir Notebook en Google Colab](https://colab.research.google.com/drive/1uk6hZ1_jpMBVCN2n1LVFLRCTaQmHwMuA?usp=sharing)

---

## ✅ Descripción de Prompts Utilizados

Se utilizaron los siguientes prompts para generar el proyecto:

- Solicitar carga de imagen en escala de grises
- Implementación de convolución 2D desde cero con NumPy
- Aplicación de filtros: **sharpen**, **blur**, y **Sobel (bordes/esquinas)**
- Comparación con filtros de OpenCV
- Generación de GIF animado loopeado con `imageio`
- Explicación detallada y README documentado

---

## 🧪 Comentarios sobre el Comportamiento Visual

- El **filtro Sharpen** manual y el de OpenCV producen resultados muy similares, aunque la versión de OpenCV puede ser más precisa en bordes por optimización.
- El **Blur** suaviza la imagen y reduce el ruido; se observa una pérdida de detalle visual.
- El **filtro de esquinas (Sobel)** resalta bordes verticales, útil para detección de contornos o esquinas en visión por computadora.

🔍 Ver los resultados cuadro por cuadro en el GIF ayuda a **entender visualmente cómo actúa cada kernel** sobre la imagen.

---

## 🧠 Lecciones Aprendidas

- Comprender y programar una convolución manual mejora el entendimiento de filtros y visión artificial.
- OpenCV simplifica tareas comunes pero abstrae procesos fundamentales.
- Comparar ambos enfoques ayuda a apreciar la eficiencia de las librerías optimizadas.

