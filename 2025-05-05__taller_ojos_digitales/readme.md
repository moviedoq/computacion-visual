# 🧪 Taller de Filtros y Detección de Bordes en Imágenes

📅 **Fecha**  
2025-05-05 

## 🎯 Objetivo del Taller

Explorar el procesamiento de imágenes digitales utilizando técnicas de filtrado y detección de bordes. Se busca comprender cómo diferentes filtros afectan la representación visual de una imagen, y comparar métodos para identificar contornos y detalles mediante técnicas convolucionales y derivadas.

----------

## 🧠 Conceptos Aprendidos

-   Filtros convolucionales (blur, sharpen)
    
-   Detección de bordes (Sobel, Laplaciano)
    
-   Transformación de imágenes a escala de grises
    
-   Visualización con Matplotlib
    
-   Generación de GIFs con PIL
    
-   Comparación visual de efectos aplicados
    
-   Uso básico de OpenCV y NumPy
    

----------

## 🔧 Herramientas y Entornos

-   Python 3.10+
    
-   Librerías:
    
    -   `opencv-python`
        
    -   `numpy`
        
    -   `matplotlib`
        
    -   `Pillow` (PIL)
        
-   Entorno de desarrollo:
    
    -   Google Colab (sin soporte para GUI como `cv2.imshow()` o `createTrackbar`)

📌 Todas las herramientas fueron utilizadas según sus respectivas guías de instalación oficial.


----------

## 🧪 Implementación

### 🔹 Etapas realizadas

1.  **Preparación**  
    Carga de una imagen de entrada en formato BGR y conversión a RGB.
    
2.  **Aplicación de filtros**
    
    -   Filtro de desenfoque (`GaussianBlur`) con kernel grande para suavizado fuerte.
        
    -   Filtro de enfoque (`filter2D`) con kernel personalizado para mejorar bordes.
            
    -   Filtro de **Sobel** aplicado por canal (R, G, B) y combinado.
        
    -   Filtro **Laplaciano**, también aplicado por canal y luego fusionado.
        
3.  **Visualización**
    
    -   Grilla comparativa con `matplotlib`.
        
    -   GIF animado generado con `PIL` incluyendo subtítulos visibles.
        
4.  **Exportación de resultados**
    
    -   Se exportó un GIF `filtros_animados.gif` en alta resolución para comparación clara.


----------

## 📊 Resultados Visuales

![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05__taller_ojos_digitales/comparacion_filtros_imagen.gif?raw=true)

----------

## 🧩 Prompts Usados
- ¿Es posible agregar sliders (`cv2.createTrackbar`) en Google Collab?
-  Sugerir commits descriptivos y en inglés.
----------

## 💬 Reflexión Final

Este taller permitió reforzar conocimientos esenciales sobre el procesamiento de imágenes, especialmente la diferencia entre filtros que suavizan y los que destacan bordes. Me ayudó a entender cómo aplicar operaciones en cada canal RGB de forma independiente, lo cual fue clave para adaptar los filtros Sobel y Laplaciano a imágenes a color.

La parte más interesante fue construir el GIF paso a paso, con anotaciones dinámicas y tamaño de fuente escalado para facilitar la comprensión visual. En futuros proyectos aplicaría la misma lógica para filtros personalizados o incluso procesamiento en tiempo real con webcam si se hace en local.

----------

