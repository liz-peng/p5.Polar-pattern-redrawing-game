// example 1 
let sketch1 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangle(0, 100, 0);
  };
};
let example1 = new p5(sketch1, 'sketch1');

// example 2
let sketch2 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch2').clientWidth;
  	let h = document.getElementById('sketch2').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 100, 0);
  };
};
let example2 = new p5(sketch2, 'sketch2');
