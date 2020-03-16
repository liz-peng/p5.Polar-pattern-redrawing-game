// ch1.1
let m1 = function(m) { 
  m.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	m.createCanvas(w, h);
    polar.setCenter(w/2, h/2+15);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarTriangle(0, 90, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('# Challenge 1.1', -w/3-50, -h/3-30);
    m.text('Line Radius 120', -w/3-50, -h/3-15);
    m.text('0°', -3, -130);
  }; 
};
let hint1 = new p5(m1, 'm1');

// ch1.2
let m2 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    m.createCanvas(w, h);
    polar.setCenter(w/2, h/2+15);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('# Challenge 1.2', -w/3-50, -h/3-30);
    m.text('Line Radius 120', -w/3-50, -h/3-15);
    m.text('0°', -3, -130);
    m.text('45°', 94, -90);
    m.text('90°', 132, 2);
    m.text('135°', 94, 98);
  }; 
};
let hint2 = new p5(m2, 'm2');

// ch1.3
let m3 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    m.createCanvas(w, h);
    polar.setCenter(w/2, h/2+15);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('# Challenge 1.3', -w/3-50, -h/3-30);
    m.text('Line Radius 120', -w/3-50, -h/3-15);
    m.text('Triangle Radius 80', -w/3-50, -h/3);
    m.text('Distance 40', -w/3-50, -h/3+15);
    m.text('0°', -3, -130);
    m.text('45°', 94, -90);
    m.text('90°', 132, 2);
    m.text('135°', 94, 98);
  }; 
};
let hint3 = new p5(m3, 'm3');

// ch1.4
let m4 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    m.createCanvas(w, h);
    polar.setCenter(w/2, h/2+15);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('# Challenge 1.4', -w/3-50, -h/3-30);
    m.text('Line Radius 120', -w/3-50, -h/3-15);
    m.text('Triangle Radius 80', -w/3-50, -h/3);
    m.text('Distance 40', -w/3-50, -h/3+15);
    m.text('0°', -3, -130);
    m.text('45°', 94, -90);
    m.text('90°', 132, 2);
    m.text('135°', 94, 98);
    m.text('180°', -10, 140);
    m.text('225°', -112, 102);
    m.text('270°', -152, 6);
    m.text('315°', -110, -92);
  }; 
};
let hint4 = new p5(m4, 'm4');
