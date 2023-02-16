/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let ball = [];
let rectangle = [];

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500,500);
    for(let i = 0; i < 20; i++){
        ball[i] = new Particle();
        rectangle[i] = new Particle2(i);
    }
}

function mouseClicked(){
        for(var i = 0; i < rectangle.length; i++){
         rectangle[i].destroyParticle();
            }
    }  


/**
Description of draw()
*/
function draw() {
    background(220);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
        ball[i].updateSpeed(map(mouseX,0,width,0,height,true));
    }
    for(let i = 0; i < rectangle.length; i++){
        rectangle[i].show();
    }
    print(mouseX);
}

class Particle{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(1,30);
        this.speed = 0;
    }
    display(){
        push();
        noStroke();
        fill(this.x,this.y,this.diameter,random(50,100));
        ellipse(this.x,this.y,this.diameter);
        pop();
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
    }
    updateSpeed(mouseSpeed){
        this.speed = mouseSpeed;
    }

}

class Particle2{
    constructor(id){
        this.x = int(random(width));
        this.y = int(random(height));
        this.height = random(20,30);
        this.width = random(20,30);
        this.speed = 2;
        this.tresh = 10;
    }
    show(){
        push();
        noStroke(); 
        fill(this.x,this.y,this.height);
        rect(this.x,this.y,this.height,this.width);
        pop();
        this.x += random(-this.speed,this.speed);
        this.y += random(-this.speed,this.speed);
    }
    destroyParticle(){
    if ( >= dist(mouseX,mouseY,this.x,this.y,this.tresh)){
        rectangle.splice(i,0);
        }
    }
}