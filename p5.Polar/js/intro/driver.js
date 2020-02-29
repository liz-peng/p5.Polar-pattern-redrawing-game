const driver = new Driver({
  opacity: 0,
  allowClose: false
});

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#step1',
    popover: {
      title: 'p5.Polar Introduction',
      description: 'Welcome to p5.Polar. This is a quick introduction for the application. "Use the arrow keys on your keyboard" or click "Next" to move to the next step',
      position: 'bottom-center'
    }
  },
  {
    element: '#nav',
    popover: {
      title: 'Menu',
      description: 'Navigate to different levels or check p5.Polar source code',
      position: 'bottom-center'
    }
  },
  {
    element: '#step4',
    popover: {
      title: 'Level',
      description: 'Check current level',
      position: 'top-center'
    }
  },
  {
    element: '#step5',
    popover: {
      title: 'Mission',
      description: 'The description here tells you what to do to draw the correct shape/pattern',
      position: 'top-center'
    }
  },
  {
    element: '#step6',
    popover: {
      title: 'Hint',
      description: 'Check hints here to get the function names that you need to draw the shape/pattern',
      position: 'top-center'
    }
  },
  {
    element: '#step7',
    popover: {
      title: 'Run Your Code',
      description: 'Run your code with "Shift + Enter" keys in the box below',
      position: 'top-center'
    }
  },
  {
    element: '#codemirror',
    popover: {
      title: 'Type Your Code',
      description: 'Type your code/answer here. Remember, check your answer and run your code with "Shift + Enter" keys',
      position: 'top-center'
    }
  },
  {
    element: '#console',
    popover: {
      title: 'Console',
      description: 'Console shows you the error message when your code runs into problem. It also tells if you pass the level or not',
      position: 'top-center'
    }
  },
  {
    element: '#polarExample',
    popover: {
      title: 'Example Images',
      description: 'Follow the example images here from top left, to draw the exactly same shapes/patterns',
      position: 'left-center'
    },
    onNext: () => {
      document.getElementById('defaultCanvas0').remove();
      let sketch1 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch1').clientWidth;
          let h = document.getElementById('sketch1').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#b9ca4a');
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.polarTriangle(0, 80, 0);
        }; 
      };
      let example1 = new p5(sketch1, 'sketch1');
    }
  },
  {
    element: '#sketch1',
    popover: {
      title: 'Follow Example Images To Draw Correct Shape',
      description: 'The color gets changed when you successfully draw the shape.',
      position: 'left-center'
    },
    onNext: () => {
      for(let i=1; i<=8; i++) {
        document.getElementById('defaultCanvas'+i).remove();
      }
      let sketch2 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch2').clientWidth;
          let h = document.getElementById('sketch2').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
        }; 
      };
      let example2 = new p5(sketch2, 'sketch2');

      let sketch3 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch3').clientWidth;
          let h = document.getElementById('sketch3').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipse(0, 40, -40);
        }; 
      };
      let example3 = new p5(sketch3, 'sketch3');

      let sketch4 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch4').clientWidth;
          let h = document.getElementById('sketch4').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
        }; 
      };
      let example4 = new p5(sketch4, 'sketch4');

      let sketch5 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch5').clientWidth;
          let h = document.getElementById('sketch5').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
          p.stroke('#5b4aca');
          p.polarLines(3, 100, 0);
        }; 
      };
      let example5 = new p5(sketch5, 'sketch5');

      let sketch6 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch6').clientWidth;
          let h = document.getElementById('sketch6').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
          p.stroke('#5b4aca');
          p.polarLines(3, 100, 0);
          p.stroke('#db85d0');
          p.polarEllipses(6, 8, 100);
        }; 
      };
      let example6 = new p5(sketch6, 'sketch6');

      let sketch7 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch7').clientWidth;
          let h = document.getElementById('sketch7').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
          p.stroke('#5b4aca');
          p.polarLines(3, 100, 0);
          p.stroke('#db85d0');
          p.polarEllipses(6, 8, 100);
          p.stroke('#ed5565');
          p.polarHexagon(30, 80, 0);
        }; 
      };
      let example7 = new p5(sketch7, 'sketch7');

      let sketch8 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch8').clientWidth;
          let h = document.getElementById('sketch8').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
          p.stroke('#5b4aca');
          p.polarLines(3, 100, 0);
          p.stroke('#db85d0');
          p.polarEllipses(6, 8, 100);
          p.stroke('#ed5565');
          p.polarHexagon(30, 80, 0);
          p.stroke('#ed5565');
          p.polarHexagon(30, 92, 0);
        }; 
      };
      let example8 = new p5(sketch8, 'sketch8');

      let sketch9 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch9').clientWidth;
          let h = document.getElementById('sketch9').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.strokeWeight(1); 
          polar.setCenter(w/2, h/2);
          p.stroke('#b9ca4a');
          p.polarTriangles(2, 80, 0);
          p.stroke('#4ab9ca');
          p.polarEllipses(6, 40, 40);
          p.stroke('#5b4aca');
          p.polarLines(3, 100, 0);
          p.stroke('#db85d0');
          p.polarEllipses(6, 8, 100);
          p.stroke('#ed5565');
          p.polarHexagon(30, 80, 0);
          p.stroke('#ed5565');
          p.polarHexagon(30, 92, 0);
          p.stroke('#ed5565');
          p.polarHexagon(0, 92, 0);
        }; 
      };
      let example9 = new p5(sketch9, 'sketch9');
    },
    onPrevious: () => {
      document.getElementById('defaultCanvas0').remove();
      let sketch1 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch1').clientWidth;
          let h = document.getElementById('sketch1').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangle(0, 80, 0);
        }; 
      };
      let example1 = new p5(sketch1, 'sketch1');
    }
  },
  {
    element: '#polarExample',
    popover: {
      title: 'Pass Level',
      description: 'If the color gets totally changed which means you pass the level!',
      position: 'left-center'
    },
    onPrevious: () => {
      for(let i=1; i<=8; i++) {
        document.getElementById('defaultCanvas'+i).remove();
      }

      let sketch2 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch2').clientWidth;
          let h = document.getElementById('sketch2').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
        }; 
      };
      let example2 = new p5(sketch2, 'sketch2');

      let sketch3 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch3').clientWidth;
          let h = document.getElementById('sketch3').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipse(0, 40, -40);
        }; 
      };
      let example3 = new p5(sketch3, 'sketch3');

      let sketch4 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch4').clientWidth;
          let h = document.getElementById('sketch4').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
        }; 
      };
      let example4 = new p5(sketch4, 'sketch4');

      let sketch5 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch5').clientWidth;
          let h = document.getElementById('sketch5').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
          p.polarLines(3, 100, 0);
        }; 
      };
      let example5 = new p5(sketch5, 'sketch5');

      let sketch6 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch6').clientWidth;
          let h = document.getElementById('sketch6').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
          p.polarLines(3, 100, 0);
          p.polarEllipses(6, 8, 100);
        }; 
      };
      let example6 = new p5(sketch6, 'sketch6');

      let sketch7 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch7').clientWidth;
          let h = document.getElementById('sketch7').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
          p.polarLines(3, 100, 0);
          p.polarEllipses(6, 8, 100);
          p.polarHexagon(30, 80, 0);
        }; 
      };
      let example7 = new p5(sketch7, 'sketch7');

      let sketch8 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch8').clientWidth;
          let h = document.getElementById('sketch8').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
          p.polarLines(3, 100, 0);
          p.polarEllipses(6, 8, 100);
          p.polarHexagon(30, 80, 0);
          p.polarHexagon(30, 92, 0);
        }; 
      };
      let example8 = new p5(sketch8, 'sketch8');

      let sketch9 = function(p) { 
        p.setup = function() {
          let w = document.getElementById('sketch9').clientWidth;
          let h = document.getElementById('sketch9').clientHeight;
          p.createCanvas(w, h);
          p.noFill();
          p.stroke('#ccc');
          p.strokeWeight(0.5); 
          polar.setCenter(w/2, h/2);
          p.polarTriangles(2, 80, 0);
          p.polarEllipses(6, 40, 40);
          p.polarLines(3, 100, 0);
          p.polarEllipses(6, 8, 100);
          p.polarHexagon(30, 80, 0);
          p.polarHexagons(2, 92, 0);
        }; 
      };
      let example9 = new p5(sketch9, 'sketch9');
    },
    onNext: () => {
      window.location.replace('./level/line.html');
    }
  }
]);
// Start the introduction
driver.start();