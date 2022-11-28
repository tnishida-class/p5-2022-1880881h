let scores = [];
let sum = 0;
let average, largest, smallest;

function setup(){
  createCanvas(400, 400);
  background(240);

  colorMode(RGB);
  
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
    sum += scores[i];//合計値
    
   // ここから平均・最大・最小を求めます
  average = sum / 10;
  largest = 0;
  smallest = 100;
  
  for(let i = 0; i < 10; i++){
    if(scores[i] > largest){//最大値
    largest = scores[i];
    }
    else{}
  }

  for(let i = 0; i < 10; i++){
     if(scores[i] < smallest){//最小値
    smallest = scores[i];
    }
    else{}
  }
}
  console.log(average);//平均値記録
  console.log(largest);//最大値記録
  console.log(smallest);//最小値記録
}
  
function draw(){
  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ 
line(0, height * i / n, width, height * i / n);
stroke(0);}
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
   
   
    
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    
    if(scores[i] == largest){
       fill(255,0,0);
       }
    else if(scores[i] == smallest){
      fill(0,0,255);
       }
    else{
    fill(100);
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);
    
  }
for(let i = 0; i < scores.length; i++){
const dx = width / scores.length;
const h = height * scores[i] / 100;
const a = height * average / 100;
line(0, height - a, width, height - a);
    stroke(0,255,0);}
  
 const a = height * average / 100; 
  noStroke();
  fill(0);
  text(average.toPrecision(3), 1 , height - a);
  
  
  // BLANK[5] 平均点の線を引きます

}
