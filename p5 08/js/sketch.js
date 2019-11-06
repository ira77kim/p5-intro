var nyppl = 250;
var seppl = 250;
var tappl = 250;
var beppl = 250;
var loppl = 250;
var sippl = 250;

var timeofday = [];
var temp = [];
//night color
var nightR = 120;
var nightG = 110;
var nightB = 190;
//day color
var dayR = 200;
var dayG = 220;
var dayB = 230;
var nyclr;
var seclr;
var taclr;
var beclr;
var loclr;
var siclr;

var city = [];

function preload(){
  city = ['New York','Seoul','Taipei','Beijing','London','Singapore'];
  console.log(city);
  askSky(city);
}

function setup(){
  createCanvas(900,900);
  // setting end point
  //var url = api+apikey+query;
  // loading data
  //loadJSON(url,gotData);

}

function askSky(city){
  for (let i = 0; i < city.length; i++){
    let api = "http://api.weatherstack.com/current?access_key=1a588bdc5215e7abe3310f0e68fe9db6&query="
    let url =api + city[i];
    loadJSON(url,gotWeather);

  }
  
  console.log(timeofday);
  console.log(temp);
}

function gotWeather(weather){
  console.log(weather);
    timeofday.push(weather.current.is_day);
    temp.push(weather.current.temperature);
 
  }



function draw(){
  background(150,150,255);
  
  circle(mouseX, mouseY, 50);
  fill(0);
  stroke(255);
  strokeWeight(3);
  textSize(72);
  textAlign(CENTER);
  text('Watch the Sky',width/2, 100);
  textSize(18);
  text('New York',width/7, 170);
  text('Seoul',width*2/7, 170);
  text('Taipei',width*3/7, 170);
  text('Beijing',width*4/7, 170);
  text('London',width*5/7, 170);
  text('Singapore',width*6/7, 170);
 
  if(timeofday[0] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width/7-40,height/2 - nyppl/2,80, temp[0]*25);
  if(timeofday[0] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width*2/7-40,height/2 - seppl/2,80,temp[1]*25);
  if(timeofday[1] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width*3/7-40,height/2 - tappl/2,80,temp[2]*25);
  if(timeofday[2] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width*4/7-40,height/2 - beppl/2,80,temp[3]*25);
  if(timeofday[3] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width*5/7-40,height/2 - loppl/2,80,temp[4]*25);
  if(timeofday[4] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
  rect(width*6/7-40,height/2 - sippl/2,80,temp[5]*25);
  if(timeofday[5] == 'no'){
    fill(color(nightR, nightG, nightB));
  }
  else{
    fill(color(dayR, dayG, dayB));
  }
}




function gotData(giphy){
  //create seperate items for each of the data
  for(var i =0; i<25; i++){
    createImg(giphy.data[i].images.fixed_width.url);

  }
}