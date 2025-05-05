
# 🧪 Taller - De Pixels a Coordenadas: Explorando la Imagen como Matriz
Este proyecto demuestra cómo realizar manipulación de imágenes con **OpenCV**, **NumPy** y **Matplotlib**, incluyendo:

- Modificación de regiones específicas usando slicing
- Visualización de canales RGB y HSV por separado
- Cálculo de histogramas por canal
- Ajustes de brillo y contraste
- Generación de GIFs animados para visualizar los efectos

---

## 📌 Manipulación realizada sobre la imagen

### 🎯 Slicing de regiones
Se modificó una región rectangular de la imagen para cambiar su color a rojo, y se sustituyó otra parte pegando una copia de una región distinta, como por ejemplo **la cabeza de un pingüino pegada en otra zona** de la imagen.
![enter image description here](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_imagen_matriz_pixeles/penguin_sliced.png?raw=true)

### 🎯 Ajuste de Brillo y Contraste
Se aplicó la fórmula:

    python
    nueva = alpha * imagen + beta
    Con np.clip() (ajuste manual)
    
    Con cv2.convertScaleAbs() (OpenCV, más preciso)
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_imagen_matriz_pixeles/brillo_contraste.gif?raw=true)
### 🎯 **Visualización por Canales**
Se extrajeron los canales individuales:
RGB (r, g, b)
HSV (h, s, v)

y se mostraron en animación para ver cómo se comporta cada componente.
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_imagen_matriz_pixeles/canales_rgb_hsv.gif?raw=true)
### 🎯 Histogramas
Se graficaron los histogramas de intensidad de los canales rojo, verde y azul por separado, mostrando la distribución de los niveles de color en la imagen.
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_imagen_matriz_pixeles/histogramas_rgb.gif?raw=true)
## 🔗 Código fuente
Puedes abrir y ejecutar el notebook en Google Colab:

[👉 Abrir en Colab](https://colab.research.google.com/drive/13wDweHHNOaDeE8usgAxhBEb_fWfB62qD?usp=sharing)


## **✅ Prompts utilizados**
Durante la generación del código y estructura del proyecto, se usaron prompts como:

* "¿Cómo utilizar slicing de matrices para modificar regiones específicas de la imagen"
* "Aplicar ajustes de brillo y contraste"
* "Haz un gif mostrando el efecto de estos cambios"
* "¿Qué aplicación debo usar para seleccionar coordenadas de la imagen?" (para el slicing)
* "¿Cómo resolevr el error **ValueError: could not broadcast input array from shape (5,163,3) into shape (70,60,3)**? "

### ✍️ Comentarios personales

Uno de los retos fue identificar regiones exactas de interés (como la cabeza del pingüino) sin herramientas visuales. Aprendí a usar [Photophea ](https://www.photopea.com/)para hacer clic y detectar coordenadas, fue muy útil.

También aprendí las diferencias entre el ajuste manual de brillo/contraste y el uso de funciones como cv2.convertScaleAbs(), que son más precisas por su redondeo interno.

Finalmente, generar GIFs me ayudó a visualizar mejor los efectos progresivos, y facilitó mucho explicar mis resultados.
