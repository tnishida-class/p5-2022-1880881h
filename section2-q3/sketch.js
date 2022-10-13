/function setup(){
    createCanvas(500, 500);
    background(255);
  }

  function draw(){

//円1：黒
　stroke(255);
    fill(0);
    ellipse(250, 250,350);

    for(let i = 0; i < 20; i++){
    
    let rate1 = (i-1) / 20;
    let rate2 = i / 20;

let angle1 = TWO_PI * rate1;
    let angle2 = TWO_PI * rate2
    let n = i % 2
    console.log(i, rate1 , rate2 , angle1 , angle2 ,n  );

   if(n == 1){
    stroke(255);

　//円2：緑
    fill(0,84,56);
    arc(250, 250, 270, 270, angle1, angle2 ,PIE );

　//円3：ベージュ
    fill(231,208,169);
    arc(250, 250, 250, 250, angle1, angle2 ,PIE );

　//円4：緑
    fill(0,84,56);
    arc(250, 250, 170, 170, angle1, angle2 ,PIE );

   //円5：ベージュ
    fill(231,208,169);
    arc(250, 250, 150, 150, angle1, angle2 ,PIE );

    }

    
    else if(n == 0){
    stroke(255);

    //円2：赤
    fill(192,0,0);
    arc(250, 250, 270, 270, angle1, angle2 ,PIE );

　//円３：黒
    fill(0);
    arc(250, 250, 250, 250, angle1, angle2 ,PIE );

    //円4：赤
    fill(192,0,0);
    arc(250, 250, 170, 170, angle1, angle2 ,PIE );

    //円5：黒
    fill(0);
    arc(250, 250, 150, 150, angle1, angle2 ,PIE );
    }

//円6：緑
　stroke(255);
    fill(0,84,56);
    ellipse(250, 250,40);

//円7：赤
　stroke(255);
    fill(192,0,0);
    ellipse(250, 250,20);
    
    
  }
  
}
