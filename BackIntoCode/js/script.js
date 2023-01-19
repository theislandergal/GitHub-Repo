/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//Setting 
let ponyo;
let xinitPonyo;
let yinitPonyo;

let rad = 40;
let xspeed = 1.5;
let yspeed = 1.5;
let xdirection = 1;
let ydirection = 1;

let verticalOffsetGreen;
let verticalOffsetOrange;
let xinitGreen;
let yinitGreen;
let xinitOrange;
let yinitOrange;

/**
Description of preload
*/
function preload() {
ponyo = loadImage('assets/images/ponyo.png');
}

/**
Description of setup
*/
function setup() {
 createCanvas(700,500);
 frameRate(30);
 ellipseMode(RADIUS);
 // Set the starting position of the shape
  xinitPonyo = width / 2;
  yinitPonyo = height / 2;
  xinitGreen = width - 30;
  yinitGreen = height / 2 - 35;
  xinitOrange = 30;
  yinitOrange = height / 2 - 35;
  verticalOffsetGreen = yinitGreen;
  verticalOffsetOrange = yinitOrange;
}


/**
Description of draw()
*/
function draw() {
  background(187,196,204);
  stroke(255,0,0);
  strokeWeight(3);
  fill(237,240,240);
  circle(350,250,50);
  strokeWeight(5);
  stroke(80,149,226);
  line(350,0,350,500);
  noStroke();
  fill(0,0,255);
  image(ponyo,xinitPonyo,yinitPonyo,rad,rad);
  movePaddleGreen(xinitGreen,verticalOffsetGreen);
  movePaddleOrange(xinitOrange,verticalOffsetOrange);

    // Update the position of the shape
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

function movePaddleGreen(xinitGreen,yinitGreen){
  fill(21,81,36); // Green team
  rect(xinitGreen,yinitGreen,10,70);
}

function movePaddleOrange(xinitOrange,yinitOrange){
  fill(150,65,19); // Orange team
  rect(xinitOrange,yinitOrange,10,70);
}

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