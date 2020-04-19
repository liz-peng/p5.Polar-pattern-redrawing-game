// example 1
let sketch1 = function(p) { 
  p.setup = function() {
    let w = document.getElementById('sketch1').clientWidth;
    let h = document.getElementById('sketch1').clientHeight;
    p.createCanvas(w, h);
    p.noFill();
    p.strokeWeight(0.7); 
    polar.setCenter(w/2, h/2);
    p.stroke('#ffc425');
    p.polarEllipses(6, 120, 120, 120);
    p.stroke('#f37735');
    p.polarTriangles(2, 240, 0);
    p.strokeWeight(0.5); 
    p.stroke('#ccc');
    p.polarLines(3, 300, 0);
    p.polarEllipses(6, 8, 8, 300);
    p.polarHexagon(30, 240, 0);
    p.polarHexagons(2, 276, 0);
  }; 
};
let example1 = new p5(sketch1, 'sketch1');