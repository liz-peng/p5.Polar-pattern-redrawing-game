// polar coordinate radius example
let sketchExpRadius = function(e) { 
  e.setup = function() {
    let w = document.getElementById('sketchExpRadius').clientWidth;
    let h = document.getElementById('sketchExpRadius').clientHeight;
    e.createCanvas(w, h);
    polar.setCenter(w/2, h/2);
    e.noFill();
    e.stroke('#E78C45');
    e.strokeWeight(2.0);
    e.polarTriangle(0, 40, 0);
    e.strokeWeight(0.5);
    e.stroke(204, 204, 204, 120);
    for(i=1; i<=4; i++) {
      e.polarEllipse(0, i*20, 0);
    }
    e.polarLines(3, 100, 0);

    // text
    e.noStroke();
    e.textSize(10);
    e.fill(204, 204, 204, 150);
    e.text('80', -50, -65);
    e.text('60', -40, -48);
    e.text('40', -30, -30);
    e.textSize(11);
    e.text('0°', -3, -110);
    e.text('60°', 95, -55);
    e.text('120°', 95, 60);
    e.text('180°', -10, 115);
    e.text('240°', -115, 65);
    e.text('300°', -115, -55);
  }; 
};
let expRadius = new p5(sketchExpRadius, 'sketchExpRadius');

// polar coordinate angle example
let sketchExpAngle = function(e) { 
  e.setup = function() {
    let w = document.getElementById('sketchExpAngle').clientWidth;
    let h = document.getElementById('sketchExpAngle').clientHeight;
    e.createCanvas(w, h);
    polar.setCenter(w/2, h/2);
    e.noFill();
    e.stroke('#E78C45');
    e.strokeWeight(2.0);
    e.polarTriangle(30, 40, 0);
    e.strokeWeight(0.5);
    e.stroke(204, 204, 204, 120);
    for(i=1; i<=4; i++) {
      e.polarEllipse(0, i*20, 0);
    }
    e.polarLine(30, 50, 50);
    e.polarLines(3, 100, 0);

    // text
    e.noStroke();
    e.textSize(10);
    e.fill(204, 204, 204, 150);
    e.text('80', -50, -65);
    e.text('60', -40, -48);
    e.text('40', -30, -30);
    e.textSize(11);
    e.text('0°', -3, -110);
    e.text('30°', 50, -95);
    e.text('60°', 95, -55);
    e.text('120°', 95, 60);
    e.text('180°', -10, 115);
    e.text('240°', -115, 65);
    e.text('300°', -115, -55);
  }; 
};
let expAngle = new p5(sketchExpAngle, 'sketchExpAngle');

// polar coordinate distance example
let sketchExpDis = function(e) { 
  e.setup = function() {
    let w = document.getElementById('sketchExpAngle').clientWidth;
    let h = document.getElementById('sketchExpAngle').clientHeight;
    e.createCanvas(w, h);
    polar.setCenter(w/2, h/2);
    e.noFill();
    e.stroke('#E78C45');
    e.strokeWeight(2.0);
    e.polarTriangle(30, 40, 40);
    e.strokeWeight(0.5);
    e.stroke(204, 204, 204, 120);
    for(i=1; i<=4; i++) {
      e.polarEllipse(0, i*20, 0);
    }
    e.polarLine(30, 50, 50);
    e.polarLines(3, 100, 0);

    // text
    e.noStroke();
    e.textSize(10);
    e.fill(204, 204, 204, 150);
    e.text('80', -50, -65);
    e.text('60', -40, -48);
    e.text('40', -30, -30);
    e.textSize(11);
    e.text('0°', -3, -110);
    e.text('30°', 50, -95);
    e.text('60°', 95, -55);
    e.text('120°', 95, 60);
    e.text('180°', -10, 115);
    e.text('240°', -115, 65);
    e.text('300°', -115, -55);
  }; 
};
let expDis = new p5(sketchExpDis, 'sketchExpDis');

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
    p.polarTriangle(0, 90, 0);
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
    p.polarTriangle(0, 90, 0);
    p.polarTriangle(180, 90, 0);
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
    p.polarTriangle(0, 90, 45);
    p.polarTriangle(180, 90, 45);
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
    p.polarTriangle(0, 40, 80);
    p.polarTriangle(90, 40, 80);
    p.polarTriangle(180, 40, 80);
    p.polarTriangle(270, 40, 80);
  }; 
};
let example4 = new p5(sketch4, 'sketch4');
