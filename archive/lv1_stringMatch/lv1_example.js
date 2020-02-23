// lv1-1 radius
let sketch1 = function(p) { 
  p.setup = function() {
  	let w = document.getElementById('sketch1').clientWidth;
  	let h = document.getElementById('sketch1').clientHeight;
  	p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipse(0, 50, 0);
  }; 
};
let example1 = new p5(sketch1, 'sketch1');

// lv1-2 angle
let sketch2 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch2').clientWidth;
    let h = document.getElementById('sketch2').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipse(30, 50, 0);
  }; 
};
let example2 = new p5(sketch2, 'sketch2');

// lv1-3 distance
let sketch3 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch3').clientWidth;
    let h = document.getElementById('sketch3').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipse(0, 50, 50);
    p.polarEllipse(0, 50, -50);
  }; 
};
let example3 = new p5(sketch3, 'sketch3');

// lv1-4 multi function
let sketch4 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch4').clientWidth;
    let h = document.getElementById('sketch4').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipses(2, 50, 50);
  }; 
};
let example4 = new p5(sketch4, 'sketch4');

// lv1-5 change of multi function
let sketch5 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch5').clientWidth;
    let h = document.getElementById('sketch5').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipses(10, 50, 50);
  }; 
};
let example5 = new p5(sketch5, 'sketch5');

// lv1-6 change of multi function 
let sketch6 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch6').clientWidth;
    let h = document.getElementById('sketch6').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.stroke('#ccc');
    p.strokeWeight(0.5); 
    polar.setCenter(w/2, h/2);
    p.polarEllipses(20, 25, 50);
    p.polarEllipses(20, 50, 50);
  }; 
};
let example6 = new p5(sketch6, 'sketch6');
