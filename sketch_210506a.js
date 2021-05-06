// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let xStep = 0;
let b1, b2, c1, c2;
let fps = 50;

//let capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(400, 400);
  frameRate(50);
  b1 = color(255);
  b2 = color(0);
  c1 = color(255,116 , 116);
  c2 = color(255, 232, 108);
 
}

function draw() {
  //Background
  
  push();
  clear();
  translate(xStep,0);
  setGradient(0, 0, width*0.5, height, c2, c1, X_AXIS);
  setGradient(width*0.5, 0, width*0.5, height, c2, c1, X_AXIS);
  
  setGradient(-width * 0.5, 0, width*0.5, height, c2, c1, X_AXIS);
  setGradient(-width, 0, width*0.5, height, c2, c1, X_AXIS);

  pop();
  
  

  
  if (frameCount % 400 == 0){
     xStep = 0;
  }else{
     xStep++;  
  }

  //Circle
  translate(width/2, height/2);
  grdCircle2(0,0, width/1.5, c1, c2);
  console.log(frameCount);
  
  
  /*
  if (frameCount === 1) {
    // start the recording on the first frame
    // this avoids the code freeze which occurs if capturer.start is called
    // in the setup, since v0.9 of p5.js
    capturer.start();
  }
  if (frameCount === 400) {
    noLoop();
    console.log('finished recording.');
    capturer.stop();
    capturer.save();
    return;
  }
  // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));
  */
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


function grdCircle2(x, y, d, c1, c2) {
 let c = 100;
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, i/c);
   let a = lerp(PI, 0, i/c);
   
   fill(col);
   noStroke();
   arc(x, y, d, d, -a, a, CHORD);

 }
}
