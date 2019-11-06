let winddirection;
let position;
let temp;
let pressure;
let input;


function setup(){
    createCanvas(720,480); 

    let button = select('#submit');
    button.mousePressed(askWeather);
    input = select('#city')

    position = createVector(width/2, height/2);
    wind = createVector();
    // let url = "http://api.weatherstack.com/current?access_key=1a588bdc5215e7abe3310f0e68fe9db6&query=London"
    
    
    

    // let api = ' '
    // let city = ' '
    // let url = ' '

}

function askWeather(){
    let api = "http://api.weatherstack.com/current?access_key=1a588bdc5215e7abe3310f0e68fe9db6&query="
    let url =api + input.value();
    loadJSON(url,gotWeather);

}
function gotWeather(weather){
    let angle = radians(Number(weather.current.wind_degree));
    let windmagnitude = Number(weather.current.wind_speed);
    temp = Number(weather.current.temperature);
    pressure = Number(weather.current.pressure);
    wind = p5.Vector.fromAngle(angle);
}

function draw(){
    background(200,180,255*(15 / temp));

    //Arrow pointing out the wind direction
    push();
    translate(32, height-32);
    rotate(wind.heading()+PI/2);
    fill(80,150,200);
    ellipse(0,0,48,48);
    stroke(20,120,200);
    strokeWeight(3);
    line(0,-16,0,16);

    noStroke();
    fill(45,123,123);
    triangle(0,-18,-6,-10,6,-10);



    pop();
    position.add(wind);

    stroke(255);
    strokeWeight(4);
    fill(255);
    ellipse(position.x, position.y,16,16);

    // for(let j = 0 ; j*(pressure/10) <= width; j++){
    //     for(let k = 0 ; k*(pressure/10) <= width; k++){
    //         fill(120);
    //         ellipse(j,k,5,5);
    //     }
    // }
    for (var x = 0; x < width; x += width / (pressure/100)) {
		for (var y = 0; y < height; y += height / (pressure/100)) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}


    //this shape will follow the wind

    if(position.x >width) position.x = 0;
    if(position.x <0) position.x = width;
    if(position.y >width) position.y = 0;
    if(position.y <0) position.y = width;
}

