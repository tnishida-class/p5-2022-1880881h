function setup(){
  createCanvas(400, 400);
  background(255);
  
  translate(width / 2, height / 2);
  textAlign(CENTER, CENTER);
  balloon("I love keyakizaka46");
}

function balloon(t){
  noStroke();
  
  let w = textWidth(t);
  let h = textAscent(t) + textDescent(t);
  let n = - w * 0.6;
  fill(107,142,35);
  rectMode(CENTER);
  rect(0,0, w + 50, h + 50, 20);

  fill(255);
  text(t,0,0);
  
  noStroke();
  fill(107,142,35);
  arc(n, -h + 60 , 50, 50, radians(270), radians(320), PIE);
}
