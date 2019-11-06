
var something;
var search;
var n;
var gotData;
// var i = random(1,100);

function setup() {
    noCanvas();
    var button = select('#submit');
  button.mousePressed(searching);
  input = select('#gif');
  something = input.value();
  console.log(input);

  search ='starwars';
    let api = "https://api.giphy.com/v1/gifs/search?api_key=0HpZMrJ0jFiu0WZEL058KZCQFnlCyjP5&q="
    let url = api + input.value();
    let obj = loadJSON(url,gotData);
    console.log(url);
    console.log(obj);
  console.log(search);
}

function searching(){
    let api = "https://api.giphy.com/v1/gifs/search?api_key=0HpZMrJ0jFiu0WZEL058KZCQFnlCyjP5&q="
    let url =api + input.value();
    loadJSON(url,gotData);

}

function draw() {
    
}

function gotData(giphy){
   n = int(random(0,Object.keys(giphy.data).length));
   console.log(n);
   createImg(giphy.data[n].images.original.url);

}