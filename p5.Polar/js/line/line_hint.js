// 1.1
let m1 = function(m) { 
  m.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	m.createCanvas(w, h);
    polar.setCenter(w/2, h/2);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('Lv 1.1', -w/3-50, -h/3-30);
    m.text('Radius 150', -w/3-50, -h/3-15);
    m.text('0°', -3, -154);
  }; 
};
let hint1 = new p5(m1, 'm1');

// 1.2
let m2 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    m.createCanvas(w, h);
    polar.setCenter(w/2, h/2);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('Lv 1.2', -w/3-50, -h/3-30);
    m.text('Radius 150', -w/3-50, -h/3-15);
    m.text('0°', -3, -154);
    m.text('90°', 162, 8);
  }; 
};
let hint2 = new p5(m2, 'm2');

// 1.3
let m3 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    m.createCanvas(w, h);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('Lv 1.3', -w/3-50, -h/3-30);
    m.text('Radius 150', -w/3-50, -h/3-15);
    m.text('Right Offset 50', -w/3-50, -h/3);
    m.text('0°', -3, -154);
    m.text('90°', -128, 10);
  }; 
};
let hint3 = new p5(m3, 'm3');

// 1.4
let m4 = function(m) { 
  m.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    m.createCanvas(w, h);
    m.noFill();
    m.stroke(204, 204, 204, 0);
    // angle reference
    m.polarLine(0, 150, 0);
    // text starts from here
    m.textSize(11);
    m.fill(204, 204, 204, 150);
    m.text('Lv 1.4', -w/3-50, -h/3-30);
    m.text('Radius 150', -w/3-50, -h/3-15);
    m.text('0°', -3, -154);
    m.text('30°', 76, -134);
    m.text('60°', 138, -74);
    m.text('90°', 162, 10);
    m.text('120°', 140, 90);
    m.text('150°', 78, 154);
  }; 
};
let hint4 = new p5(m4, 'm4');
