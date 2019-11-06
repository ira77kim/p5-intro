function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background(0);
    noStroke();
    rotateX(frameCount * 0.01+mouseX/10);
    rotateY(frameCount * 0.01+mouseY/10);
    translate(mouseX/10, mouseY/10)
    fill(255 - mouseX*(255/400),255 - mouseY*(255/400),220)
    sphere(50,abs(3+int(mouseX/40)),abs(3+int(mouseY/40)));
    //box(50);
    
   
  }