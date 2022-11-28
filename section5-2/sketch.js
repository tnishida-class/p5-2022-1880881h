// 正N角形代入
let N = 8;
// 正N角形代入

function setup(){
  createCanvas(400, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  star(250, 50, 40);
  
  translate(width * 0.87, height / 2);
  regularPolygon(0, 0, 40, N);
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
function regularPolygon(cx, cy, r, npoints) {
  fill(255,0,0);
  noStroke();
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let x = cx + cos(a) * r;
    let y = cy + sin(a) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
