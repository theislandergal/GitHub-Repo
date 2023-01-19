/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//Setting up Ponyo Variable
let ponyo; // image holder
let xinitPonyo; // starting x position
let yinitPonyo; // starting y position

let rad = 40;  // Size of the image 
let xspeed = 1.5;  // speed of the image on the x axis
let yspeed = 1.5; // speed of the image on the y axis
let xdirection = 1; // variable holder for direction change on the x axis
let ydirection = 1; // variable holder for direction change on the y axis

// Setting up team paddle variables
let verticalOffsetGreen; // variable holder for paddle direction change on the y axis
let verticalOffsetOrange; // variable holder for paddle direction change on the y axis
let xinitGreen; // starting x position green team
let yinitGreen; // starting y position green team
let xinitOrange; // starting x position orange team
let yinitOrange; // starting y position orange team

/**
Description of preload
*/
function preload() {
// Preloading Ponyo image from assets
ponyo = loadImage('assets/images/ponyo.png');
}

/**
Description of setup
*/
function setup() {
 createCanvas(700,500); // canvas size
 frameRate(30); // framerate for 
 ellipseMode(RADIUS); // ellipse mode based on Radius size
 // Set the starting position of Ponyo and paddles
  xinitPonyo = width / 2;
  yinitPonyo = height / 2;
  xinitGreen = width - 30;
  yinitGreen = height / 2 - 35;
  xinitOrange = 30;
  yinitOrange = height / 2 - 35;
  // Setting first variable for vertical off sets
  verticalOffsetGreen = yinitGreen;
  verticalOffsetOrange = yinitOrange;
}


/**
Description of draw()
*/
function draw() {
  background(187,196,204); // constantly drawing background in draw
  // Setting visual elements, Center circle and line.
  stroke(255,0,0);
  strokeWeight(3);
  fill(237,240,240);
  circle(350,250,50);
  strokeWeight(5);
  stroke(80,149,226);
  line(350,0,350,500);
  noStroke();
  fill(0,0,255);
  // Loading image and paddles with inital positions
  image(ponyo,xinitPonyo,yinitPonyo,rad,rad);
  // Calling paddle moving functions
  movePaddleGreen(xinitGreen,verticalOffsetGreen);
  movePaddleOrange(xinitOrange,verticalOffsetOrange);

    // Update the position of Ponyo
    // Code taken from the p5js reference
    xinitPonyo = xinitPonyo + xspeed * xdirection;
    yinitPonyo = yinitPonyo + yspeed * ydirection;
  
    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xinitPonyo > width - rad || xinitPonyo < rad) {
      xdirection *= -1;
    }
    if (yinitPonyo > height - rad || yinitPonyo < rad) {
      ydirection *= -1;
    }
}

// Paddle creation functions
function movePaddleGreen(xinitGreen,yinitGreen){
  fill(21,81,36); // Green team
  rect(xinitGreen,yinitGreen,10,70);
}

function movePaddleOrange(xinitOrange,yinitOrange){
  fill(150,65,19); // Orange team
  rect(xinitOrange,yinitOrange,10,70);
}

// Paddle Moving function by key pressing
function keyPressed(){
    if (keyCode == UP_ARROW && verticalOffsetGreen > 0){
       verticalOffsetGreen = verticalOffsetGreen - 20;
     } else if (keyCode == DOWN_ARROW && verticalOffsetGreen <= height){
       verticalOffsetGreen = verticalOffsetGreen + 20;
     } else if (keyCode == 87 && verticalOffsetOrange > 0){
        verticalOffsetOrange = verticalOffsetOrange - 20;
      } else if (keyCode == 83 && verticalOffsetOrange <= height){
        verticalOffsetOrange = verticalOffsetOrange + 20;
      }
    }