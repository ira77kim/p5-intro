function setup(){
    createCanvas(720,480); 
    //intialize a new obj with jitter class
    bug = new jitter();
}

function draw(){
    background(30,130,255);

    //display obj
    bug.display();
    //move obj
    bug.move();
}

//want to create class :jitter

class jitter{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = (10,30);
        this.speed = 1;

    }
    display(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    move(){
        this.x +=random(-this.speed, this.speed);
    }
}