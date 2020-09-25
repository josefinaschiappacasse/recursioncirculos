


let s1, F; 

function setup() {
  createCanvas(500, 400);
  s1 = createSlider(0,400);
}

function draw() {
  background(0);
  F = s1.value(),
  stroke("white");
  noFill();
  drawCircle(30, 370, 30);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);

  if (x < width) {
    drawCircle(x + 30, y, d* .67);
    drawCircle(x + 30, y - F, d);
   

  }



}
