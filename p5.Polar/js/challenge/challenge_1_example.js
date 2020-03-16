// ch1.1
let sketch1 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2+15);
    p.polarLine(0, 120, 0);
  }; 
};
let example1 = new p5(sketch1, 'sketch1');

// ch1.2
let sketch2 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2+15);
    p.polarLine(0, 120, 0);
    p.polarLine(45, 120, 0);
    p.polarLine(90, 120, 0);
    p.polarLine(135, 120, 0);
  }; 
};
let example2 = new p5(sketch2, 'sketch2');

// ch1.3
let sketch3 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2+15);
    p.polarLine(0, 120, 0);
    p.polarLine(45, 120, 0);
    p.polarLine(90, 120, 0);
    p.polarLine(135, 120, 0);
    p.polarTriangle(0, 80, 40);
  }; 
};
let example3 = new p5(sketch3, 'sketch3');

// ch1.4
let sketch4 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2+15);
    p.polarLine(0, 120, 0);
    p.polarLine(45, 120, 0);
    p.polarLine(90, 120, 0);
    p.polarLine(135, 120, 0);
    p.polarTriangle(0, 80, 40);
    p.polarTriangle(45, 80, 40);
    p.polarTriangle(90, 80, 40);
    p.polarTriangle(135, 80, 40);
    p.polarTriangle(180, 80, 40);
    p.polarTriangle(225, 80, 40);
    p.polarTriangle(270, 80, 40);
    p.polarTriangle(315, 80, 40);
  }; 
};
let example4 = new p5(sketch4, 'sketch4');
