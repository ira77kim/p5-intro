
var api = "https://api.giphy.com/v1/gifs/search?";
var apikey = "api_key=0HpZMrJ0jFiu0WZEL058KZCQFnlCyjP5";
var query = "&q=starwars";

function setup(){
  // no p5 canvas
  noCanvas();

  // setting end point
  var url = api+apikey+query;


  // loading data
  loadJSON(url,gotData);

}

function gotData(giphy){
  //create seperate items for each of the data
  for(var i =0; i<25; i++){
    createImg(giphy.data[i].images.fixed_width.url);

  }
}