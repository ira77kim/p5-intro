let posx, posy, speedx,speedy;

function setup() {
  createCanvas(400, 500);
    posx = 200;
    posy = 300;
    speedx =1;
    speedy =1;
}

function draw() {
  background(255);

  fill(255,0,0);
  circle(posx, posy, 30);
  posx = posx + speedx;
  posy = posy + speedy;
  
  if(posx <= 0 || posx >= width){
      speedx = speedx * -1.01;
    }
  
  if(posy <= 0 || posy >= height){
      speedy = speedy * -1.01;
  }
}