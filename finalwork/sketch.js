let r = 200;

let n1 = 0;
let n2 = 0;

let X = 0;
let Y = 360;
let Z = -30;

let h = 270;
let H = 270;
let S = 100;
let B  = 50;

function setup(){
  
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(1.6);
  noFill();
  pixelDensity(2);
 
}
function windowResized(){ 
resizeCanvas(windowWidth, windowHeight); 
}

function draw(){

 clear()
 background(0,0,0);
  rotateX(X);
  rotateY(Y);
  rotateZ(Z);
  
if(Y > 140){
Y -= 0.55752661;}
else{
Y = 140
}

SphericalLissajous();

if(n1 < 1){
n1 += 0.005;
h -= 0.1;
S -= 0.1;
B += 0.1;
  }
  
else if(n1 < 19.5){
n1 += 0.02;
h -= 1;
S -= 0.1;
B = 80;
}

  
if(h > 0){
H = h;
}
else if(h < 0){
H = h + 360;
}
else if(h < -720){
H = h + 720;
}
  
stroke(H,S,B);
 

if(n2 < 1){
n2 += 0.005;}
else if(n2 < 19.5){
n2 += 0.05;}
else if(n2 < 20){
n2 += 0.001;}
else{
n2 = 20;
}
  
if(keyIsDown(" ".charCodeAt(0))){ X += 1; }
else{ X = 0;}

}


function SphericalLissajous(){
  beginShape(POINTS);
  for(let theta = 0; theta < 360; theta += 0.1){
    let x = r * cos(theta*n1);
    let y = r * sin(theta*n1) * sin(theta*n2);
    let z = r * sin(theta*n1) * cos(theta*n2);
    vertex(x, y, z); 
  }
  endShape(POINTS);
}
