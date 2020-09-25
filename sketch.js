

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  stroke("white");
  noFill();
  drawCircle(30, 370, 30);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);

  if (x < width) {
    drawCircle(x + 40, y, d* .67);
    drawCircle(x + 40, y - 30, d);
   

  }



}