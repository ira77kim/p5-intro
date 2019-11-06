function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background(0);
    
    rotateX(frameCount * 0.01+mouseX/10);
    rotateY(frameCount * 0.01+mouseY/10);
    fill(100+mouseY/4,150,220)
    box(50,mouseX,mouseY);
  }