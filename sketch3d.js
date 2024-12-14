let canvas;
function setup() {
  noCursor();
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('davotwo');
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  background(0,0,20);
}
  
function draw() {
  // camera(500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 0, 0, 0);
  
  // background(10, 10, 41);
  background(0,0,20);
  // circle(mouseX, mouseY, 5);
  orbitControl();
  stroke(255);
  fill(10,10,41,0);
  sphere(2000);
  box(400);
}
