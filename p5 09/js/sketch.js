var nyppl = 250;
var seppl = 250;
var tappl = 250;
var beppl = 250;
var loppl = 250;
var sippl = 250;

var cityData = [];
var temp = [];
//night color
var nightR = 120;
var nightG = 110;
var nightB = 190;
//day color
var dayR = 200;
var dayG = 220;
var dayB = 230;
//temp color
var tempcolorR;
var tempcolorG;
var tempcolorB;
var nyclr;
var seclr;
var taclr;
var beclr;
var loclr;
var siclr;
var img;


var city = [];

function preload(){
  city = ['New York','Seoul','Taipei','Beijing','London','Singapore','Tokyo','Hong Kong'];
  // console.log(city);
 
  askSky(city);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  img = loadImage('assets/cloud.png');
}

function askSky(city){
  for (let i = 0; i < city.length; i++) {
    let api = "http://api.weatherstack.com/current?access_key=0fed8c0ebcdebd1cae59bacf1ea3ca27&query="
    let url =api + city[i];
    // console.log("url: " + url);
    
    loadJSON(url,gotWeather);

  }
  // console.log("Time of Day: "+ timeofday);
  // console.log(timeofday);
  // console.log(temp);
}

function gotWeather(weather){
  console.log(city);
  console.log("Weather" + weather);
  // console.log(count++ + "City: " + weather.location.name + " Time " + weather.current.is_day);

  
  for(i=0; i<city.length; i++){

    if(weather.location.name == city[i]) {
      
      cityData.push({name:city[i],time:weather.current.is_day,temp:weather.current.temperature});
      // timeofday.name.push(city[i]);
      // temp.push(weather.current.temperature);
    }
  }
    
    
 
  }

  
  


function draw(){
  background(239, 226, 69);
  noCursor();
  
  // circle(mouseX, mouseY, 50);
  
  image(img, mouseX-img.width/8, mouseY-img.height/8,img.width/4,img.height/4);
  fill(228, 115, 32);
  stroke(255);
  strokeWeight(1.5);
  //texts
  textSize(84);
  textFont("Coiny");
  textAlign(CENTER);
  text('Watching the Sky',width/2, height/6);
  textSize(70);
  text("for da buddies", width/2, height*1.6/6);
  //cloud size 1
  image(img,width/2.6, height/2.3,img.width/1.5,img.height/1.5);
  image(img,width/1.1, height/9,img.width/1.5,img.height/1.5);
  image(img,width/10, height/1.4,img.width/1.5,img.height/1.5);
  //cloud size 2
  image(img,width/24, height/9,img.width/1.1,img.height/1.1);
  image(img,width/1.4, height/1.5,img.width/1.1,img.height/1.1);
  //cloud size 3
  image(img, width/1.5, height/2.7,img.width/3,img.height/3);
  // noStroke();
  // circle(width/3, height/2.3, 100*(width/height));
  // circle(width/4.0, height/1.87, 60*(width/height));
  // circle(width/3, height/1.8, 60*(width/height));
  // circle(width/2.6, height/1.9, 60*(width/height));
  // circle(width/3.6, height/1.9, 80*(width/height));
  // circle(width/2.6, height/2.1, 80*(width/height));
  // circle(width/2.3, height/1.9, 70*(width/height));
  // //cloud 2
  // circle(width/4.0, height/1.87, 60*(width/height));
 

  textSize(18);
  text('New York',width/9, 320);
  text('Seoul',width*2/9, 320);
  text('Taipei',width*3/9, 320);
  text('Beijing',width*4/9, 320);
  text('London',width*5/9, 320);
  text('Singapore',width*6/9, 320);
  text('Tokyo',width*7/9, 320);
  text('Hong Kong',width*8/9, 320);
  

  
 
  for(let i =0; i<cityData.length; i++) {
    console.log(cityData[i].name);

    
    strokeWeight(10);
    
    if(cityData[i].name == 'New York'){
      // console.log("Here");
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width/9-40,height/2 - nyppl/2,80,80, 25);

    } else if(cityData[i].name == 'Seoul'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width*2/9-40,height/2 - nyppl/2,80,80, 25);

    } else if(cityData[i].name == 'Taipei'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width*3/9-40,height/2 - nyppl/2,80,80, 25);

    } else if(cityData[i].name == 'Beijing'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width*4/9-40,height/2 - nyppl/2,80,80, 25);

    } else if(cityData[i].name == 'London'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width*5/9-40,height/2 - nyppl/2,80,80, 25);

    } else if(cityData[i].name == 'Singapore'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      rect(width*6/9-40,height/2 - nyppl/2,80,80, 25);
      
    } else if(cityData[i].name == 'Tokyo'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      console.log(cityData.temp);
      rect(width*7/9-40,height/2 - nyppl/2,80,80, 25);
      
    } else if(cityData[i].name == 'Hong Kong'){
      if(cityData[i].time =='no'){
        fill(color(nightR, nightG, nightB));
      }
      else{
        fill(color(dayR, dayG, dayB));
      }
      tempcolorR = map(temp,30,-15,225,30);
      tempcolorG = map(temp,30,-15,120,100);
      tempcolorB = map(temp,30,-15,30,225);
      stroke(tempcolorR,tempcolorG,tempcolorB);
      console.log(cityData.temp);
      rect(width*8/9-40,height/2 - nyppl/2,80,80, 25);

    } 
  //   if(cityData[i].name == 'New York' && cityData[i].time == 'no'){
  //     console.log("Here");
      
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width/7-40,height/2 - nyppl/2,80, cityData[i].temp*25);
  //   if(cityData[i].name == 'Seoul' && cityData[i].time == 'no'){
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width*2/7-40,height/2 - seppl/2,80,temp[1]*25);
  //   if(cityData[2].name == 'Taipei' && cityData[2].time == 'no'){
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width*3/7-40,height/2 - tappl/2,80,temp[2]*25);
  //   if(cityData[3].name == 'Beijing' && cityData[3].time == 'no'){
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width*4/7-40,height/2 - beppl/2,80,temp[3]*25);
  //   if(cityData[4].name == 'London' && cityData[4] == 'no'){
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width*5/7-40,height/2 - loppl/2,80,temp[4]*25);
  //   if(cityData[5].name == 'Singapore' && cityData[5] == 'no'){
  //     console.log("Singapore");
      
  //     fill(color(nightR, nightG, nightB));
  //   }
  //   else{
  //     fill(color(dayR, dayG, dayB));
  //   }
  //   rect(width*6/7-40,height/2 - sippl/2,80,temp[5]*25);
  // }
  
}

}