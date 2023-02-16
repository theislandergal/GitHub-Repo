/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let violent = [];
let scared = [];
let ally = [];

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);
    for(let i = 0; i < 5; i++){
        violent[i] = new violentPart();
        scared[i] = new scaredPart();
    }
    for(let j = 0; j < 3; j++){
        ally[j] = new allyPart();
    }
}


/**
Description of draw()
*/
function draw() {
    background(39,38,64);
    for(let i = 0; i < violent.length; i++){
        violent[i].display();
        violent[i].connect(scared);
    } 
    for(let i = 0; i < scared.length; i++){
        scared[i].display();
        scared[i].connect(violent);
    } 
    for(let i = 0; i < ally.length; i++){
        ally[i].display();
        ally[i].connect(violent);
    } 
}

class violentPart{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(50,60);
        this.speed = 5;
        this.xdirection = 0;
        this.ydirection = 0;
        this.thresh = 5;
    }
    display(){
        push();
        noStroke();
        fill(random(55,65),31,random(65,75));
        ellipse(this.x,this.y,this.diameter);
        pop();
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
        if (this.y > height - this.diameter/2 || this.y < this.diameter/2) {
            this.ydirection *= -1;
          }
          if (this.x > width - this.diameter/2 || this.x < this.diameter/2) {
            this.xdirection *= -1;
        }

    }
    connect(scaredArray){ 
        for(let i = 0; i < scaredArray.length; i++){
        if (dist(scaredArray[i].x, scaredArray[i].y, this.x, this.y) <= this.thresh) {
            stroke(62,31,71);
            strokeWeight(10);
            line(scaredArray[i].x, scaredArray[i].y, this.x, this.y);
          }
        }
      }
}  

class scaredPart{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(40,50);
        this.speed = 3;
        this.xdirection = 0;
        this.ydirection = 0;
        this.thresh = 100;
    }
    display(){
        push();
        noStroke();
        fill(random(200,220),random(165,175),37);
        ellipse(this.x,this.y,this.diameter);
        pop();
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
        if (this.y > height - this.diameter/2  || this.y < this.diameter/2 ) {
            this.ydirection *= -1;
          }
        if (this.x > width - this.diameter/2  || this.x < this.diameter/2 ) {
            this.xdirection *= -1;
        }
    }
    connect(violentArray){ 
        for(let i = 0; i < violentArray.length; i++){
        if (dist(violentArray[i].x, violentArray[i].y, this.x, this.y) <= this.thresh) {
            stroke(218,173,37);
            strokeWeight(3);
            line(violentArray[i].x, violentArray[i].y, this.x, this.y);
          }
        }
      }
}  

class allyPart{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(30,40);
        this.speed = 2;
        this.xdirection = 0;
        this.thresh = 100;
    }

    display(){
        push();
        noStroke();
        fill(11,random(75,95),random(82,100));
        ellipse(this.x,this.y,this.diameter);
        pop();
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
        if (this.y > height - this.diameter || this.y < 0 + this.diameter) {
            this.ydirection *= -1;
          }
        if (this.x > width - this.diameter || this.x < 0 + this.diameter) {
            this.xdirection *= -1;
        }
    }
    connect(violentArray){ 
        for(let i = 0; i < violentArray.length; i++){
        if (dist(violentArray[i].x, violentArray[i].y, this.x, this.y) <= this.thresh) {
            stroke(11,82,91);
            strokeWeight(3);
            line(violentArray[i].x, violentArray[i].y, this.x, this.y);
          }
        }
      }
}  