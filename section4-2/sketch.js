let balls = []; 


function setup(){
  createCanvas(windowWidth, windowHeight);
 
  }


function draw(){
  noStroke();
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const size = random(10,100);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
