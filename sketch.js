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
    p.polarTriangle(0, 80, 0);
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
    p.polarTriangles(2, 80, 0);
  };
};
let example2 = new p5(sketch2, 'sketch2');

// example 3
let sketch3 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 80, 0);
    p.polarEllipse(0, 40, -40);
  };
};
let example3 = new p5(sketch3, 'sketch3');

// example 4
let sketch4 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 80, 0);
    p.polarEllipses(6, 40, 40);
  };
};
let example4 = new p5(sketch4, 'sketch4');

// example 5
let sketch5 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch5').clientWidth;
    let h = document.getElementById('sketch5').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 80, 0);
    p.polarEllipses(6, 40, 40);
    p.polarLines(3, 100, 0);
  };
};
let example5 = new p5(sketch5, 'sketch5');

// example 6
let sketch6 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch6').clientWidth;
    let h = document.getElementById('sketch6').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 80, 0);
    p.polarEllipses(6, 40, 40);
    p.polarLines(3, 100, 0);
    p.polarEllipses(6, 8, 100);
  };
};
let example6 = new p5(sketch6, 'sketch6');


// example 7
let sketch7 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch7').clientWidth;
    let h = document.getElementById('sketch7').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarTriangles(2, 80, 0);
    p.polarEllipses(6, 40, 40);
    p.polarLines(3, 100, 0);
    p.polarEllipses(6, 8, 100);
    p.polarHexagon(30, 80, 0);
  };
};
let example7 = new p5(sketch7, 'sketch7');
