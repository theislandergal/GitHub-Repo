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
let table; // table variable to hold the data sets columns
let rowPoints = []; //cross matching with the each rows  and putting them each newly created Doggo in an array
let DogImages = []; //Array containing the various dog images.png
let GenMonth = [1,2,3,4,5,6,7,8]; //Cross validation for Months
let OKArrival = true; //Sequencing boolean for Arrival
let OKAdoption = false; //Sequencing boolean for Adoption
let OKDeath = false; //Sequencing boolean for Death
//Dead code for now
// let xMovedDoggo = 0;
// let yMovedDoggo = 0;
// let speeds = [0.2,0.4,0.6];
// let xdirection = 1;
// let ydirection = 1;

// Preloading all my data, images and populating my DogImages array
function preload() {
table = loadTable("animal-data-1.csv", "csv", "header");
let Dog1 = loadImage('assets/images/Dog1.png');
let Dog2 = loadImage('assets/images/Dog2.png');
let Dog3 = loadImage('assets/images/Dog3.png');
let Dog4 = loadImage('assets/images/Dog4.png');
let Husky1 = loadImage('assets/images/Husky1.png');
let Husky2 = loadImage('assets/images/Husky2.png');
let Pitbull = loadImage('assets/images/Pitbull.png');
let Bulldog = loadImage('assets/images/Bulldog.png');
let YoundDog = loadImage('assets/images/YoungDog.png');
let Paw = loadImage('assets/images/Paw.png');

DogImages = [Dog1,Dog2,Dog3,Dog4,Husky1,Husky2,Pitbull,Bulldog,YoundDog];
}

/**
Creating basic canvas and cross generating the rows based on the table array
*/
function setup() {
    createCanvas(windowWidth, windowHeight); // Dynamic canvas based on browser width/height
    background(20); //grey background (loaded once)
    print(table); //print table as a reference point 
    for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
        rowPoints[r] = new Doggos(table.getString(r, 0),//id
                                  table.getString(r, 2),//InMonth
                                  table.getString(r, 6),//animalname
                                  table.getString(r, 7),//breedname
                                  table.getString(r, 12),//AgeFullDays
                                  table.getString(r, 16),//OutMonth
                                  table.getString(r, 23),//DeadMonth
        )
        print(table.getString(r, 2)); // text print the InMonth duplicates to compare when generating the Adoption Phase (month 1 should make 71 dogs appear)
    }
}


/**
Sequencing of the class generations for each steps
*/
function draw() {
    // background(20);
if(OKArrival == true){ // checking that Arrival is set to true
    for (let i=0; i <= rowPoints.length-1; i++){  // looping through rowpoints lenght -1 to avoid stepping out of the array (because it starts at 0)
    //     if (rowPoints[i].InMonth = GenMonth[0]){
            rowPoints[i].Arrival(GenMonth[0]); //for rowpoints[i] (e.g. 0), 
            }
    } else if(OKAdoption == true){

    } else if(OKDeath == true){

    }
}

// function moveDoggos(){
//     xMovedDoggo = xMovedDoggo + speeds[1] * xdirection;
//     yMovedDoggo = yMovedDoggo + speeds[1] * ydirection;
//     // print('Move',xMovedDoggo,yMovedDoggo);

//         // if (this.yinitDoggo > windowHeight - 10 || this.yinitDoggo < windowHeight + 10) {
//         //     this.ydirection *= -1;
//         // }
// }

class Doggos{
    constructor(id,InMonth,animalname,breedname,AgeFullDays,OutMonth,DeadMonth){
        this.id = id; // the ID
        this.size = AgeFullDays; //Age will be used for the size
        this.rad = this.size/2; // radius (half the size) is used to limit the frame of movement
        this.InMonth = InMonth; //Month dog got in the shelter
        this.OutMonth = OutMonth; //Month got was adopted
        this.death = DeadMonth; //Month dog died
        this.name = animalname; //Name of the animal to display when dead
        this.breed = breedname; //breed to circle through the dogimage array
        this.month = GenMonth; //hardcoded month to compare in if statements
        this.xinitDoggo = 500; //x position of dog
        this.yinitDoggo = 500; //y position of dog
    }
    
    Arrival(){
            // for(let i = 0; i <= GenMonth[0]; i++){
                image(DogImages[0],this.xinitDoggo,this.yinitDoggo,20,20);
                // if (i = DogImages.length-1,  i=0);
            // }
        OKArrival = false; // Once circled through month, set Arrival back to false in order to switch phase
        OKAdoption = true; // set Adoption to true to switch phase
//move slowly ++ Frame limits
    }

    Adoption(){
//lerp colour from grey to red
//grows to mapped age size
//move jitter ++ Frame Limits
    OKAdoption = false; // Once circled through month, set Adoption back to false in order to switch phase
    OKDeath = true; // set Death to true to switch phase
    }

    Death(){
// Transform to paw
//stop moving
    OKDeath = false; // Once circled through month, set Death back to false in order to switch phase
    OKArrival = true; // set Arrival to true and process next month
    }
}
