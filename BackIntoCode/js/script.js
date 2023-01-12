/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
fill(21,81,36); // Green team
fill(150,65,19); // Orange team

var verticalOffset

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
 createCanvas(700,500);
 background(187,196,204);
 stroke(255,0,0);
 strokeWeight(3);
 circle(350,250,80);
 fill(237,240,240);
 strokeWeight(5);
 stroke(80,149,226);
 line(350,0,350,500);
}


/**
Description of draw()
*/
function draw() {
    
}

function keyPressed(){
    if (keyCode == UP_ARROW && verticalOffset > 0){
       verticalOffset = verticalOffset - 10;
     } else if (keyCode == DOWN_ARROW && verticalOffset <= 1000){
       verticalOffset = verticalOffset + 10;
     } else if (keyCode == W && verticalOffset > 0){
        verticalOffset = verticalOffset - 10;
      } else if (keyCode == S && verticalOffset <= 1000){
        verticalOffset = verticalOffset + 10;
      }
    }