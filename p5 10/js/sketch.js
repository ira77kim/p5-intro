var video;
var cols = 40;
var rows = 30;

var boxes = [];

function setup(){
  noCanvas();
  pixelDensity(1);

 // create a new variable for video
  video = createCapture(VIDEO);
  video.size(cols,rows);

  // create multiple checkboxes to refect the video
  for(let y = 0; y<rows; y++){
    for(let x = 0; x< cols; x++){
      var box = createCheckbox();
      box.style('display','inline');
      box.parent('mirror');
      boxes.push(box);
    }

    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');

  }
}

function draw(){
  video.loadPixels();

  for(let y=0; y<video.height; y++){
    for(let x = 0; x<video.width; x++){
      var index = (video.width - x+1+(y*video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright= (r+g+b)/3;

      var threshold = 127;

      var checkIndex = x + y*cols;

      if(bright >threshold){
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }


    }
  }
}


//create a new variable for video

//multiple check box to reflect the video