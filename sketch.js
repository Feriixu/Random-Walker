var y = 0;
var x = 0;
var xoff = 0;
var yoff = 10000;
var coloff = 0;
var inc = 0.01;
var octavesslider;
var noiseslider;
var octavesinfo;
var noiseinfo;
var clearbt;
var seed;

function setup() {
  createCanvas(800, 800);
  createP("");
  background(51);
  frameRate(60);
  //prepare for first line
  x = noise(xoff) * height;
  y = noise(yoff) * width;
  stroke(255);
  strokeWeight(1);

  //sliders and buttons
  clearbt = createButton("Clear");
  clearbt.mousePressed(cleartr);
  octavesslider = createSlider(1,16,4);
  noiseslider = createSlider(1,10,5);
  octavesinfo = createP();
  noiseinfo = createP();
}

function cleartr() {
  background(51);
}

function draw() {
  octavesinfo.html("Octaves: " + octavesslider.value());
  noiseinfo.html("Detail: " + noiseslider.value()*10 + "%");

  noiseDetail(octavesslider.value(),noiseslider.value()/10);
  stroke(noise(xoff+100)*255,noise(yoff+200)*255,noise(xoff+300,yoff+400)*255);
  beginShape();
  vertex(x,y);
  x = noise(xoff) * height;
  y = noise(yoff) * width;
  vertex(x,y);
  endShape();

  xoff += inc;
  yoff += inc;


  // fill(255);
  // ellipse(x, y, 20, 20);
}
