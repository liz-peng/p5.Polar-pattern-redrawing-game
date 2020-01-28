// lv1-1 
let sketch1 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#8896a7');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarEllipse(0, 60, 0);
  };
};
let example1 = new p5(sketch1, 'sketch1');

// lv1-2 
let sketch2 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#8896a7');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarEllipse(0, 60, 60);
    p.polarEllipse(0, 60, -60);
  };
};
let example2 = new p5(sketch2, 'sketch2');

// lv1-3 
let sketch3 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#8896a7');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarEllipses(2, 60, 60);
  };
};
let example3 = new p5(sketch3, 'sketch3');

// lv1-4 
let sketch4 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#8896a7');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
  }; 

  p.draw = function() {
    p.polarEllipses(6, 60, 60);
  };
};
let example4 = new p5(sketch4, 'sketch4');
