/**
Clifford
Carolie Delisle (40179876)

This project is a data visualisation project inspired by an animal shelter data set and Clifford the big red dog imagery

Credits: 
Dog by Marco Ricci from <a href="https://thenounproject.com/browse/icons/term/dog/" target="_blank" title="Dog Icons">Noun Project</a>
Dog by madebygrids from <a href="https://thenounproject.com/browse/icons/term/dog/" target="_blank" title="Dog Icons">Noun Project</a>
*/

"use strict";


/**
Preloading the animal shelter data for usage
*/
let table;
let DogImages = []; 


function preload() {
table = loadTable("animal-data-1.csv", "csv", "header");
let Dog1 = loadImage('/assets/images/Dog1.png');
let Dog2 = loadImage('/assets/images/Dog2.png');
let Dog3 = loadImage('/assets/images/Dog3.png');
let Dog4 = loadImage('/assets/images/Dog4.png');
let Husky1 = loadImage('/assets/images/Husky1.png');
let Husky2 = loadImage('/assets/images/Husky2.png');
let Pitbull = loadImage('/assets/images/Pitbull.png');
let Bulldog = loadImage('/assets/images/Bulldog.png');
let YoundDog = loadImage('/assets/images/YoungDog.png');
let Paw = loadImage('/assets/images/Paw.png');

DogImages = [Dog1,Dog2,Dog3,Dog4,Husky1,Husky2,Pitbull,Bulldog,YoundDog,Paw];
}



/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {

}