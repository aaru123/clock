function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
 background(0);
translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  var sc1 = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sc1);
  
  stroke("green");
  var mn1 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mn1);
  
  stroke("blue");
  var hr1 = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hr1);
  
  push();
  rotate(sc1);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mn1);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hr1);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  }