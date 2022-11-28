function setup() {
createCanvas(100,100);
background(255,255,255);

  for(let i = 1; i < 11; i++){
    
if(i<5){
let x = 100 - (10 *(i-1) );
stroke(255, 0, 0);
ellipse(50, 50, x);
}
  
else if (5 < i <11 ){
let x = 100 - (10 *(i-1) );
stroke(0, 0, 255);
ellipse(50, 50, x);

}

}
}
