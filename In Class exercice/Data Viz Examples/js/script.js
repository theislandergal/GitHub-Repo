let table;
let points = [];


function preload() {
table = loadTable("EVA_Data.csv", "csv", "header");
}

function setup() {
createCanvas(800, 800);
background(0);
for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
points[r] = new DataPoint(table.getString(r, 1),
                          table.getString(r, 2),
                          table.getString(r, 5),
                          table.getString(r, 0),
                          new Date (table.getString(r,4)));
                          
// Pass through the values in each row
  if(points[r].country = "USA"){
    points[r].drawBasic(255,0,0,375);
  }
  if(points[r].country = "Russia"){
    points[r].drawBasic(0,255,0,775);
  }
  }
}


class DataPoint {
constructor(country, name, duration, ID, date){
// Add each data point to the object
  this.country = country;
  this.duration = duration;
  this.name = name;
  this.ID = ID;
  this.date = date;
  this.x;
  this.y;
}

drawBasic(r,g,b,line){
  let angleText = radians(-45);
  this.x = random(width);
  this.y = line;
  push();
  fill(r,g,b);
  ellipse(this.x, this.y,int(this.duration)*3);
  pop();
  push();
  textSize(5);
  fill(200);
  text(this.name,this.x,this.y);
  translate(this.x,this.y);
  rotate(angleText);
  pop();
}

drawCircle(){
  this.radius = 150;
  this.t=0;
  this.angle = map(this.ID, 0, table.getRowCount(), 0, 1)*Math.PI*2;
  this.x = Math.cos(this.angle)*this.radius+width/2;
  this.y = Math.sin(this.angle)*this.radius+height/2;
  noStroke();
  fill(0, 200, 20, 40);
  ellipse(this.x, this.y,int(this.duration)*3);
  fill(0, 100, 200);
  textSize(5);
  push();
  if(this.angle > Math.PI/2 && this.angle < Math.PI*1.5){
    this.t = textWidth(this.name);
    fill(255, 0,0);
    translate(this.x, this.y);
    rotate(this.angle+Math.PI);
    } else {
      translate(this.x, this.y);
      rotate(this.angle);
    }
  text(this.name, 0-this.t, 0);
  pop();
  }
}