let x,y,start,end,r,vr;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

  start = width / 4;
  end = width / 3;
  r = start
  vr = 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, r);

  r += vr;

  if(r < start || r > end){ vr = -1 * vr; }

  r = constrain(r, start, end);
}


function keyPressed(){
  if(key == " "){ 
    vr += 10 ; } 
}

function keyReleased(){
  if(key == " "){ 
    vr = 2  ; } 
}
