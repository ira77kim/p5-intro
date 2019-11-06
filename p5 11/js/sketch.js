var line;
var n;

function preload(){
  pokemon = loadStrings('pokemon.csv');
}


function setup(){
  createCanvas(600,600);
  background(180);

  for(var i=0; i<pokemon.length; i++){
    let data = pokemon[i].split(/,/);
    console.log( i + data);
  }
}

function draw(){
  background(180);
  line = random(0,20)
  text(data[line],width/9,height/5);
}