var triLength = 924/2;
const centerCanvas = 200;
var recursionLimit = 7;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  centerDist = sqrt(80000);
  fill(0);
  strokeWeight(2);
}

function draw() {
  background(220);
  if(triLength <= 924){
    triLength++; 
    }else{
      //noLoop();
    triLength = triLength/2;
  } 
  
  var p0 = {
    x: triLength/2,
    y: 400-(triLength * sqrt(3)/2)
  },
  p1 = {
    x: triLength,
    y: 400
  },
  p2 = {
    x: 0,
    y: 400
  }
  
  addTriangle(p0,p1,p2, recursionLimit);
}

function addTriangle(p0,p1,p2,limit){
  if(limit > 0){
    //get the points of the next set of triangles
    var p0p2 = {
      x:(p0.x + p2.x) / 2,
      y:(p0.y + p2.y) / 2
    },
    p0p1 = {
      x:(p0.x + p1.x) / 2,
      y:(p0.y + p1.y) / 2
    },
    p1p2 = {
      x:(p1.x + p2.x) / 2,
      y:(p1.y + p2.y) / 2
    }
    
    //recursively call the function
    //lower left
    addTriangle(p0p2, p1p2, p2, limit - 1);
    
    //lower right
    addTriangle(p0p1, p1, p1p2, limit - 1);
    
    //top
    addTriangle(p0, p0p1, p0p2, limit - 1);

  }else{
    triangle(p0.x,p0.y,p1.x,p1.y,p2.x,p2.y);
    //console.log(p2.x);
  }
}