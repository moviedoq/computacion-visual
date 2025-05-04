# 🧪 Segmentación y Detección de Monedas con OpenCV

## 📖 Descripción del proceso

En este taller se utilizó una imagen en escala de grises que contiene varias monedas. El objetivo fue **segmentar** las monedas usando técnicas de **umbralización fija y adaptativa**, y luego **detectar los contornos** para:

-   Dibujar bounding boxes (cajas alrededor de cada moneda)
    
-   Calcular y marcar el centro de masa de cada forma
    
-   Obtener métricas como el número total de formas detectadas, área promedio y perímetro promedio.
    

Se aplicó un **filtro de desenfoque (Gaussian Blur)** previo a la umbralización para reducir el ruido en la imagen y mejorar la calidad de la segmentación.

----------

## 🎞️ GIF Animado del Proceso
![enter image description here](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_segmentacion_formas/deteccion_monedas.gif?raw=true)


----------

## 🧠 Código relevante

 **👉 [Ver Notebook en Colab*](https://colab.research.google.com/drive/1kpIic1odrGLvRT24zfCZqTOVe3lPH34e?usp=sharing)*

----------

## 🧩 Prompts usados
Este proyecto fue asistido por IA con los siguientes prompts:
- Este es mi código. Quiero que lo modifiques para que las imagenes generadas queden guardadas en formato .gif
-   Sugerir commits descriptivos y en inglés.
----------

## 💬 Reflexión final

Este taller fue una excelente introducción práctica a la segmentación de imágenes y al análisis de formas con OpenCV. Aprendí a aplicar distintos tipos de umbralización y entendí cómo combinar procesamiento previo con detección de contornos para obtener resultados precisos.

La parte más desafiante fue ajustar el umbral y el área mínima para filtrar formas relevantes (monedas) sin perder información útil. No entendí como hacer para que el texto de cada imagen sea visible así que consulte a ChatGPT.