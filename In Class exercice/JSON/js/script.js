let weather;


function preload() {
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=57.14&longitude=-2.10&hourly=temperature_2m,cloudcover_mid,windspeed_80m,winddirection_80m&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FLondon&past_days=5');

}

var currentCloudCover;
var currentWindSpeed;
var currentWindDirection;
var sinceSunrise;
var toSunset;

function setup() {
  currentCloudCover = weather.hourly.cloudcover_mid.length-1;
  createCanvas(windowWidth, windowHeight);
  print(currentCloudCover);
  background(currentCloudCover);
  print(weather);
  print("The Weather:")
  print("Located at: "+ weather.latitude+", "+weather.longitude);  
  print("Current temp: "+ weather.current_weather.temperature);
  print("Current wind speed: "+ weather.current_weather.windspeed);
  print("Cloud Cover: "+ weather.hourly.cloudcover_mid[currentCloudCover]);
  print("The hourly temperature is (in C): ");
  for(let i = 0; i < 5; i++){
    print(weather.hourly.temperature_2m[i]+" C");
  }
  textAlign(CENTER,TOP);
}

function draw() {
  currentWindSpeed = weather.hourly.windspeed_80m.length-1;
  currentWindDirection = weather.hourly.winddirection_80m.length-1;
  let windData = "Wind Speed: "+ weather.hourly.windspeed_80m[currentWindSpeed] + " km/h" + " Wind Direction: "+ weather.hourly.winddirection_80m[currentWindDirection] + " degrees";
  
  push();
  rectMode(CENTER);
  fill(0, 102, 153);
  textSize(32);
  text(windData,width/2,height/2,width/2,height/2);
  pop();

  fill(0,255,0);
  ellipse(windowWidth/2+weather.latitude,weather.longitude,50,50);

  for(let i = 0; i < 5; i++){
  fill(255,0,0);
  circle(weather.hourly.winddirection_80m[i],weather.hourly.winddirection_80m[i],weather.hourly.temperature_2m[i]*5);
  }

  let splitTime = split(weather.current_weather.time, 'T');
  let splitSunrise = split(weather.daily.sunrise[5], 'T');
  let splitSunset = split(weather.daily.sunset[5], 'T');

  sinceSunrise = int(splitTime[1])-int(splitSunrise[1]);
  toSunset = int(splitSunset[1])-int(splitTime[1]);
  push();
  rectMode(CENTER);
  fill(0, 109,270);
  textSize(32);
  text(sinceSunrise+ " hours since Sunrise",200,windowHeight-200);
  pop();

  push();
  rectMode(CENTER);
  fill(0, 109,270);
  textSize(32);
  if(toSunset >= 0){
    text(toSunset+ " hours to Sunset",700,windowHeight-200);
  }
  else {
    text("The sun as set over Aberdeen",700,windowHeight-200);
  }
  pop();

}