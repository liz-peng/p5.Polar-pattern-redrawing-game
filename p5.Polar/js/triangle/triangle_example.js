// 2.1
let sketch1 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarTriangle(0, 100, 0);
  }; 
};
let example1 = new p5(sketch1, 'sketch1');

// 2.2
let sketch2 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarTriangle(0, 100, 0);
    p.polarTriangle(180, 100, 0);
  }; 
};
let example2 = new p5(sketch2, 'sketch2');

// 2.3
let sketch3 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarTriangle(0, 100, 50);
    p.polarTriangle(180, 100, 50);
  }; 
};
let example3 = new p5(sketch3, 'sketch3');

// 2.4
let sketch4 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarTriangle(0, 50, 100);
    p.polarTriangle(90, 50, 100);
    p.polarTriangle(180, 50, 100);
    p.polarTriangle(270, 50, 100);
  }; 
};
let example4 = new p5(sketch4, 'sketch4');
