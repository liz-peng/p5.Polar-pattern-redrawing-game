// Level-1: Ellipse 
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
    p.polarEllipse(0, 200, 0);
  };
};
let example1 = new p5(sketch1, 'sketch1');
