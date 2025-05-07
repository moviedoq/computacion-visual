
# Análisis de Figuras: Detección de Contornos y Métricas

Este proyecto tiene como objetivo realizar el análisis de figuras en una imagen utilizando técnicas de visión computacional, como la detección de contornos, el cálculo de métricas (área, perímetro) y la clasificación de las figuras en base a su número de vértices. Los resultados se presentan mediante GIFs animados que muestran el proceso de detección y análisis de las figuras.

## Proceso de Análisis

1. **Carga de la Imagen**: La imagen en escala de grises es cargada y binarizada usando un umbral. Esto convierte la imagen en blanco y negro, donde las figuras a analizar son de color negro y el fondo es blanco.
   ![enter image description here](https://github.com/moviedoq/computacion-visual/blob/main/2025-07-05_taller_analisis_figuras_geometricas/python/imagen.jpg?raw=true)
2. **Detección de Contornos**: Utilizamos la función `findContours` de OpenCV para detectar los contornos de las figuras presentes en la imagen binarizada.

3. **Cálculo de Métricas**: Para cada contorno detectado, se calculan el área, el perímetro y el centroide. Estas métricas son útiles para clasificar las figuras en:
   - Triángulo
   - Cuadrado/Rectángulo
   - Círculo

4. **Generación de GIFs Animados**:
   - **Contornos Detectados**: Se muestra una animación con los contornos de las figuras detectadas.
   ![](https://github.com/moviedoq/computacion-visual/blob/main/2025-07-05_taller_analisis_figuras_geometricas/python/contornos.gif?raw=true)
   - **Métricas y Etiquetas**: En esta animación, además de los contornos, se añaden métricas (área, perímetro, coordenadas del centroide) y etiquetas con la clasificación de la figura.


![](https://github.com/moviedoq/computacion-visual/blob/main/2025-07-05_taller_analisis_figuras_geometricas/python/etiquetado.gif?raw=true)

## Código Relevante

El código utilizado para el análisis de imágenes y la generación de GIFs está disponible en el archivo principal del proyecto. Adjunto enlace al notebook de Google Colab en el siguiente enlace.

> [Enlace al notebook de Google Colab](https://colab.research.google.com/drive/17agFO4Mia3t9KMQnZLdP1HmGj7_43YMH?usp=sharing)

## Prompts Utilizados
- Explícame cómo funciona -   `cv2.threshold()`.
`cv2.findContours()`, `cv2.contourArea()`,  `cv2.arcLength()`, `cv2.moments()`.
 -  Este es mi código. Quiero que lo modifiques para que las imágenes generadas queden guardadas en formato .gif
-   Sugerir commits descriptivos y en inglés.

## Aprendizajes y Dificultades Encontradas

Durante el desarrollo de este proyecto, pude mejorar mi comprensión de los algoritmos de visión computacional y cómo manipular imágenes utilizando OpenCV. Sin embargo, algunas dificultades surgieron al trabajar con la detección precisa de contornos y el manejo de las métricas, especialmente cuando los contornos no eran perfectamente definidos o las figuras tenían bordes irregulares. La creación de los GIFs animados también presentó desafíos, especialmente al asegurar que los contornos y las etiquetas se visualizaran de forma clara y sin errores de visualización. Con ayuda de inteligencia artificial pude solventar estas dificultades.

Este proyecto me permitió profundizar en cómo las imágenes pueden ser procesadas y cómo las métricas visuales pueden aportar información adicional sobre las figuras analizadas.
