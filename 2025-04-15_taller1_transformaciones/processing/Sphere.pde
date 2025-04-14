void setup() {
  size(600, 600, P3D);
  noStroke();
}

void draw() {
  background(30);
  lights();

  float t = millis() / 1000.0;

  float radius = 150;
  float x = width/2 + cos(t) * radius;
  float y = height/2 + sin(t) * radius;

  float scaleFactor = map(sin(t * 2), -1, 1, 0.5, 1.5);

  pushMatrix();

  translate(x, y, 0);
  rotateY(t * 2);
  scale(scaleFactor);

  // Esfera principal
  fill(254, 3, 15);
  sphere(50);

  // Se añade una marca para contemplar la rotación de la esfera sobre su mismo eje
  pushMatrix();
  translate(0, 0, 50); // Adelante en el eje Z
  fill(0, 0, 255);     // Azul para contraste
  sphere(5);           // Pequeña esfera
  popMatrix();

  popMatrix();
}
