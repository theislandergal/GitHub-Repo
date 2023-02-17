/**
Particles with Personalities
Carolie Delisle (40179876)

See README.md for complete description
*/

"use strict";

//Setting up the arrays to hold my particles and call on them
let violent = [];
let scared = [];
let ally = [];

/**
 Creating a variating canvas and generating the particles
*/
function setup() {
    createCanvas(windowWidth,windowHeight); // Here I found a way to have the canvas fit the size of the current window
    for(let i = 0; i < 5; i++){ // for loop creating 5 new violent particles and scared particles
        violent[i] = new violentPart();
        scared[i] = new scaredPart();
    }
    for(let j = 0; j < 3; j++){ // for loop creating 3 new violent particles and scared particles
        ally[j] = new allyPart();
    }
}


/**
Displaying a specific coloured background and the particles and running the various connect functions based on the previously created arrays
*/
function draw() {
    background(39,38,64); // deeep purple
    for(let i = 0; i < violent.length; i++){ // for loop, goes through the array based on it's length and performs the various functions
        violent[i].display(); // display the particles
        violent[i].connect(scared); // violent connects to scared
    } 
    for(let i = 0; i < scared.length; i++){ // for loop, goes through the array based on it's length and performs the various functions
        scared[i].display(); // display the particles
        scared[i].connect(violent); // scared connects to violent
    } 
    for(let i = 0; i < ally.length; i++){ // for loop, goes through the array based on it's length and performs the various functions
        ally[i].display(); // display the particles
        ally[i].connect(violent); // ally connects to violent
    } 
}

// Class creation to create the Violent Particles
class violentPart{
    constructor(){
        this.x = random(width); // created at a random x point based on width
        this.y = random(height); // created at a random y point based on height
        this.diameter = random(50,60); // created in a random size within specific range
        this.speed = 5; // will be jittered at a specific speed
        this.xdirection = 0; // direction variables to limit it's movement area
        this.ydirection = 0; // direction variables to limit it's movement area
        this.thresh = 5; // threshold with which it will react to other particles
    }
    display(){
        push(); // push and pop to avoid affecting other elements
        noStroke(); // no stroke
        fill(random(55,65),31,random(65,75)); // Purple fill
        ellipse(this.x,this.y,this.diameter); // Ellipse based on previously determined parameters
        pop();
        this.x += random(-this.speed,this.speed); // Creating a x jitter
        this.y += random(-this.speed,this.speed); // Creating a y jitter
        if (this.y > height - this.diameter/2 || this.y < this.diameter/2) { // Limiting it's movement area y wise
            this.ydirection *= -1; // 180° your direction on the y axis
          }
          if (this.x > width - this.diameter/2 || this.x < this.diameter/2) { // Limiting it's movement area x wise
            this.xdirection *= -1; // 180° your direction on the x axis
        }

    }
    connect(scaredArray){ // connecting to scared particles
        for(let i = 0; i < scaredArray.length; i++){ // for loop, going through each scared particles in the array 
        if (dist(scaredArray[i].x, scaredArray[i].y, this.x, this.y) <= this.thresh) { // if scared particle is located this.thresh to violent particle
            stroke(62,31,71); // then create a line between both, in the violent colour
            strokeWeight(10); // 10px stoke
            line(scaredArray[i].x, scaredArray[i].y, this.x, this.y); // from violent center to scared center
          }
        }
      }
}  

class scaredPart{
    constructor(){
        this.x = random(width); // created at a random x point based on width
        this.y = random(height); // created at a random y point based on height
        this.diameter = random(40,50); // created in a random size within specific range
        this.speed = 3; // will be jittered at a specific speed
        this.xdirection = 0; // direction variables to limit it's movement area
        this.ydirection = 0; // direction variables to limit it's movement area
        this.thresh = 100; // threshold with which it will react to other particles
    }
    display(){
        push(); // push and pop to avoid affecting other elements
        noStroke(); // no stroke
        fill(random(200,220),random(165,175),37); // Golden fill
        ellipse(this.x,this.y,this.diameter); // Ellipse based on previously determined parameters
        pop();
        this.x += random(-this.speed,this.speed); // Creating a x jitter
        this.y += random(-this.speed,this.speed); // Creating a y jitter
        if (this.y > height - this.diameter/2  || this.y < this.diameter/2 ) { // Limiting it's movement area y wise
            this.ydirection *= -1; // 180° your direction on the y axis
          }
        if (this.x > width - this.diameter/2  || this.x < this.diameter/2 ) { // Limiting it's movement area x wise
            this.xdirection *= -1; // 180° your direction on the x axis
        }
    }
    connect(violentArray){  // connecting to violent particles
        for(let i = 0; i < violentArray.length; i++){ // for loop, going through each violent particles in the array 
        if (dist(violentArray[i].x, violentArray[i].y, this.x, this.y) <= this.thresh) { // if violent particle is located this.thresh to scared particle
            stroke(218,173,37); // then create a line between both, in the scared colour
            strokeWeight(3); // 3px stoke
            line(violentArray[i].x, violentArray[i].y, this.x, this.y); // from scared center to violent center
          }
        }
      }
}  

class allyPart{
    constructor(){
        this.x = random(width); // created at a random x point based on width
        this.y = random(height); // created at a random y point based on height
        this.diameter = random(30,40); // created in a random size within specific range
        this.speed = 2; // will be jittered at a specific speed
        this.xdirection = 0; // direction variables to limit it's movement area
        this.ydirection = 0; // direction variables to limit it's movement area
        this.thresh = 100; // threshold with which it will react to other particles
    }

    display(){
        push(); // push and pop to avoid affecting other elements
        noStroke(); // no stroke
        fill(11,random(75,95),random(82,100)); // Teal fill
        ellipse(this.x,this.y,this.diameter); // Ellipse based on previously determined parameters
        pop();
        this.x += random(-this.speed,this.speed); // Creating a x jitter
        this.y += random(-this.speed,this.speed); // Creating a y jitter 
        if (this.y > height - this.diameter || this.y < 0 + this.diameter) { // Limiting it's movement area y wise
            this.ydirection *= -1; // 180° your direction on the y axis
          }
        if (this.x > width - this.diameter || this.x < 0 + this.diameter) { // Limiting it's movement area x wise
            this.xdirection *= -1; // 180° your direction on the x axis
        }
    }
    connect(violentArray){  // connecting to violent particles
        for(let i = 0; i < violentArray.length; i++){ // for loop, going through each violent particles in the array 
        if (dist(violentArray[i].x, violentArray[i].y, this.x, this.y) <= this.thresh) { // if violent particle is located this.thresh to ally particle
            stroke(11,82,91); // then create a line between both, in the ally colour
            strokeWeight(3); // 3px stoke
            line(violentArray[i].x, violentArray[i].y, this.x, this.y); // from ally center to violent center
          }
        }
      }
}  