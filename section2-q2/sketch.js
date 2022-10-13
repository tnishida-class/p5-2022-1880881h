function setup(){
createCanvas(80,80);
background(255,255,255);
  
for(let i = 0; i < 9; i++){
  
  for(let j = 0; j < 9; j++){
    
    let n = (i + j) % 2
   
    console.log(i, j , n); 
    
  // 格子模様 
if(n == 1){
  // 奇数
  fill(150,150,150);
  noStroke();
  rect(i * 10, j * 10, 10, 10);
  
  // 丸
  if(j < 4){
  fill(255, 0, 0);
  ellipse(5+10*(i-1), 5+10*(j-1), 8);
  }
  else if(j > 5 && j <9){
  fill(0, 0, 0);
  ellipse(5+10*(i-1), 5+10*(j-1), 8);
  }
  
}
    
else{
  fill(255,255,255);
  noStroke();
  rect(i * 10, j * 10, 10, 10);
}


    
    
}
}
}
