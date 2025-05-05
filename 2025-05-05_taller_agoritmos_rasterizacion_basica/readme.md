# 🖼️ Algoritmos de Dibujo: Línea, Círculo y Triángulo Relleno

Este proyecto implementa algoritmos clásicos de gráficos por computador utilizando Python puro con PIL y Matplotlib. El objetivo es demostrar cómo se pueden generar primitivas gráficas básicas (líneas, círculos, polígonos) directamente sobre una imagen, sin usar funciones de alto nivel como `draw.line()` o `draw.polygon()`.

---

## 📌 Algoritmos Implementados

### 1️⃣ **Algoritmo de Bresenham para líneas**

El algoritmo de Bresenham permite dibujar líneas entre dos puntos utilizando **solo enteros**, lo que lo hace extremadamente rápido. Ideal para renderizado eficiente en dispositivos de bajo nivel.

📎 Código relevante:
```python
def bresenham(x0, y0, x1, y1):
    dx = abs(x1 - x0)
    dy = abs(y1 - y0)
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx - dy

    while True:
        pixels[x0, y0] = (255, 0, 0)
        if x0 == x1 and y0 == y1:
            break
        e2 = 2 * err
        if e2 > -dy:
            err -= dy
            x0 += sx
        if e2 < dx:
            err += dx
            y0 += sy 

```
### 2️⃣ **Algoritmo de Punto Medio para círculos**

Este algoritmo dibuja un círculo completo utilizando la simetría de los octantes y también trabaja completamente con enteros. Muy útil para obtener círculos suaves sin depender de funciones trigonométricas.

📎 Código relevante:

```python

`def  midpoint_circle(x0, y0, radius):
    x = radius
    y = 0 p = 1 - radius while x >= y: for dx, dy in [(x, y), (y, x), (-x, y), (-y, x),
                       (-x, -y), (-y, -x), (x, -y), (y, -x)]: if  0 <= x0 + dx < width and  0 <= y0 + dy < height:
                pixels[x0 + dx, y0 + dy] = (0, 0, 255)
        y += 1  if p <= 0:
            p = p + 2*y + 1  else:
            x -= 1 p = p + 2*y - 2*x + 1` 
```

----------

### 3️⃣ **Relleno de triángulo (rasterización por scanline)**

Este método rellena un triángulo usando **interpolación de bordes** y recorrido horizontal línea por línea (scanlines). Es uno de los enfoques más simples y rápidos para rellenar polígonos convexos.

📎 Código relevante:
```python
`def  fill_triangle(p1, p2, p3):
    pts = sorted([p1, p2, p3], key=lambda p: p[1])
    (x1, y1), (x2, y2), (x3, y3) = pts def  interpolate(y0, y1, x0, x1): if y1 - y0 == 0: return [] return [int(x0 + (x1 - x0) * (y - y0) / (y1 - y0)) for y in  range(y0, y1)]

    x12 = interpolate(y1, y2, x1, x2)
    x23 = interpolate(y2, y3, x2, x3)
    x13 = interpolate(y1, y3, x1, x3)

    x_left = x12 + x23 for y, xl, xr in  zip(range(y1, y3), x13, x_left): for x in  range(min(xl, xr), max(xl, xr)): if  0 <= x < width and  0 <= y < height:
                pixels[x, y] = (0, 255, 0)` 
```

## 🖼️ Resultado visual

Ejemplo de imagen generada con los tres algoritmos aplicados:
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_agoritmos_rasterizacion_basica/resultados/linea.png?raw=true)
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_agoritmos_rasterizacion_basica/resultados/circulo.png?raw=true)
![](https://github.com/moviedoq/computacion-visual/blob/main/2025-05-05_taller_agoritmos_rasterizacion_basica/resultados/triangulo.png?raw=true)

----------

## 🧠 Reflexión: Comparación entre los algoritmos

| Algoritmo                  | Velocidad ⚡ | Precisión 📐 | Observación                                                                                                                                 |
|----------------------------|--------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **Bresenham (línea)**      | 🔥 Muy alta  | ✅ Muy alta  | Solo utiliza operaciones con enteros. Perfecto para renderizado en tiempo real o dispositivos con recursos limitados.                     |
| **Punto medio (círculo)**  | 🔥 Alta      | ✅ Muy buena | Aprovecha la simetría de los octantes. Muy eficiente y evita funciones costosas como raíces o senos.                                       |
| **Rasterización (triángulo)** | 🟡 Media  | 🟢 Suficiente | Útil para rellenar polígonos convexos, pero requiere ordenamiento e interpolación precisa para evitar artefactos visuales


### 💬 Opinión personal

Estos algoritmos me ayudaron a comprender cómo se representan gráficamente formas básicas en una malla de píxeles. Ver cómo una figura emerge punto por punto.
También entendí la importancia de la **simetría** y las **operaciones enteras** en programación gráfica para maximizar velocidad y reducir errores. Utilice **inteligencia artificial** para ayudarme a entender y a explicar los anteriores algoritmos y para generar mejores *commits*.