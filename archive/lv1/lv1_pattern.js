// lv1-1
const lv1_1Pattern = [
	's.polarEllipse(0,50,0)'
];

const lv1_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseRadius', '50')
	).map(substr =>
		substr.replace('(0,50)', '(0,50,0)')
	);
	
	if(document.getElementById('defaultCanvas6')) {
    document.getElementById('defaultCanvas6').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_1Ans = userInput.every(el => 
    lv1_1Pattern.includes(el)
  );

	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw1').clientWidth;
      let h = document.getElementById('draw1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_1Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseRadius = 50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipse(0, 50, 0);
	      example1.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv1_2Val = '/*\n'
	          + '=================\n\n'
	          + 'LEVEL 1-2 - Ellipse\n\n'
	          + '[Hint] polarEllipse(angle, radius, distance)\n\n'
	          + '[Mission] Draw an ellipse by using ellipse function starting at angle 30, with a radius of 50\n\n'
	          + '=================\n'
	          + '*/\n\n'
	          + 'function draw() {\n'
	          + '  const ellipseAngle = 30;\n'
	          + '  const ellipseRadius = 50;\n'
	          + '  // type your code here\n'
	          + '}';
		      cm.setValue(lv1_2Val);
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}

// lv1-2
const lv1_2Pattern = [
	's.polarEllipse(30,50,0)'
];

const lv1_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseRadius', '50')
	).map(substr =>
		substr.replace('ellipseAngle', '30')
	).map(substr =>
		substr.replace('(30,50)', '(30,50,0)')
	);
	
	if(document.getElementById('defaultCanvas7')) {
    document.getElementById('defaultCanvas7').remove();
  } 

  const lv1_2Ans = userInput.every(el => 
    lv1_2Pattern.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw2').clientWidth;
      let h = document.getElementById('draw2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_2Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseAngle = 30;
  			const ellipseRadius = 50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipse(30, 50, 0);
	      example2.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv1_3Val = '/*\n'
		      	+ 'You just set up angle in the last level, why it was not working? Well, in p5.Polar, every shape rotate from the center point, the shape you drew is ellipse so it looks the same. Do not worry, we will figure it out soon with other types of shapes.\n\n'
	          + '=================\n\n'
	          + 'LEVEL 1-3 - Ellipse\n\n'
	          + '[Hint] polarEllipse(angle, radius, distance)\n\n'
	          + '[Mission] Draw two ellipse by calling ellipse function two times, starting at angle 0, radius 50 for both of ellipses and with a distance of 50 and -50\n\n'
	          + '=================\n'
	          + '*/\n\n'
	          + 'function draw() {\n'
	          + '  const ellipseRadius = 50;\n'
	          + '  const ellipseDistanceA = 50;\n'
	          + '  const ellipseDistanceB = -50;\n'
	          + '  // type your code here\n'
	          + '}';
		      cm.setValue(lv1_3Val);
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing2 = new p5(draw2, 'draw2');
}

// lv1-3
const lv1_3Pattern = [
	's.polarEllipse(0,50,50)',
  's.polarEllipse(0,50,-50)'
];

const lv1_3 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseRadius', '50')
	).map(substr =>
		substr.replace('ellipseDistanceA', '50')
	).map(substr =>
		substr.replace('ellipseDistanceB', '-50')
	);
	
	if(document.getElementById('defaultCanvas8')) {
    document.getElementById('defaultCanvas8').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_3Match = userInput.every(el => 
    lv1_3Pattern.includes(el)
  );
  const lv1_3Ans = lv1_3Pattern.every(el => 
    lv1_3Match && userInput.includes(el)
  );

	let draw3 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw3').clientWidth;
      let h = document.getElementById('draw3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_3Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseRadius = 50;
  			const ellipseDistanceA = 50;
  			const ellipseDistanceB = -50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipse(0, 50, 50);
  			s.polarEllipse(0, 50, -50);
	      example3.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv1_4Val = '/*\n'
		      	+ 'If you want to draw a pattern that requires 20 ellipses show on the screen, imagine you have to call 20 ellipse function!!! Do not worry, we have multiple shapes drawing function.\n\n'
	          + '=================\n\n'
	          + 'LEVEL 1-4 - Ellipses\n\n'
	          + '[Hint] polarEllipses() is the function to draw multiple ellipses. There are three parameters that can be passed to the funciton: number, radius, and distance (distance is an optional parameter)\n\n'
	          + '[Mission] Draw two ellipse by calling ellipses function, starting at number 2, radius 50 with a distance of 50\n\n'
	          + '=================\n'
	          + '*/\n\n'
	          + 'function draw() {\n'
	          + '  const ellipseNum = 2;\n'
	          + '  const ellipseRadius = 50;\n'
	          + '  const ellipseDistance = 50;\n'
	          + '  // type your code here\n'
	          + '}';
		      cm.setValue(lv1_4Val);
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing3 = new p5(draw3, 'draw3');
}

// lv1-4
const lv1_4Pattern = [
	's.polarEllipses(2,50,50)'
];

const lv1_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseNum', '2')
	).map(substr =>
		substr.replace('ellipseRadius', '50')
	).map(substr =>
		substr.replace('ellipseDistance', '50')
	);
	
	if(document.getElementById('defaultCanvas9')) {
    document.getElementById('defaultCanvas9').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_4Ans = userInput.every(el => 
    lv1_4Pattern.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw4').clientWidth;
      let h = document.getElementById('draw4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_4Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseNum = 2;
	      const ellipseRadius = 50;
	      const ellipseDistance = 50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipses(2, 50, 50);
	      example4.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv1_5Val = '/*\n'
		      	+ 'With the multiple ellipses function, we draw the same pattern just use one line. What about a ring of circle?\n\n'
	          + '=================\n\n'
	          + 'LEVEL 1-5 - Ellipses\n\n'
	          + '[Hint] polarEllipses(number, radius, distance)\n\n'
	          + '[Mission] Draw 10 ellipses by using ellipses function, starting at number 6, radius 50 with a distance of 50\n\n'
	          + '=================\n'
	          + '*/\n\n'
	          + 'function draw() {\n'
	          + '  const ellipseNum = 10;\n'
	          + '  const ellipseRadius = 50;\n'
	          + '  const ellipseDistance = 50;\n'
	          + '  // type your code here\n'
	          + '}';
		      cm.setValue(lv1_5Val);
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing4 = new p5(draw4, 'draw4');
}

// lv1-5
const lv1_5Pattern = [
	's.polarEllipses(10,50,50)'
];

const lv1_5 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseNum', '10')
	).map(substr =>
		substr.replace('ellipseRadius', '50')
	).map(substr =>
		substr.replace('ellipseDistance', '50')
	);
	
	if(document.getElementById('defaultCanvas10')) {
    document.getElementById('defaultCanvas10').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_5Ans = userInput.every(el => 
    lv1_5Pattern.includes(el)
  );

	let draw5 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw5').clientWidth;
      let h = document.getElementById('draw5').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_5Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseNum = 10;
	      const ellipseRadius = 50;
	      const ellipseDistance = 50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipses(10, 50, 50);
	      example5.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lv1_6Val = '/*\n'
		      	+ '=================\n\n'
	          + 'LEVEL 1-6 - Ellipses\n\n'
	          + '[Hint] polarEllipses(number, radius, distance)\n\n'
	          + '[Mission] Draw a set of ellipses, starting at number 20, radius 25 with a distance of 50, and another set of ellipses, starting at number 20, radius 50 with a distance of 50\n\n'
	          + '=================\n'
	          + '*/\n\n'
	          + 'function draw() {\n'
	          + '  const ellipseNum = 20;\n'
	          + '  const ellipseRadiusA = 25;\n'
	          + '  const ellipseRadiusB = 50;\n'
	          + '  const ellipseDistance = 50;\n'
	          + '  // type your code here\n'
	          + '}';
		      cm.setValue(lv1_6Val);
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing5 = new p5(draw5, 'draw5');
}

// lv1-6
const lv1_6Pattern = [
	's.polarEllipses(20,25,50)',
  's.polarEllipses(20,50,50)'
];

const lv1_6 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('ellipseNum', '20')
	).map(substr =>
		substr.replace('ellipseRadiusA', '25')
	).map(substr =>
		substr.replace('ellipseRadiusB', '50')
	).map(substr =>
		substr.replace('ellipseDistance', '50')
	);

	if(document.getElementById('defaultCanvas11')) {
    document.getElementById('defaultCanvas11').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_6Match = userInput.every(el => 
    lv1_6Pattern.includes(el)
  );
  const lv1_6Ans = lv1_6Pattern.every(el => 
    lv1_6Match && userInput.includes(el)
  );

	let draw6 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw6').clientWidth;
      let h = document.getElementById('draw6').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv1_6Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
      	const ellipseNum = 20;
	      const ellipseRadiusA = 25;
	      const ellipseRadiusB = 50;
	      const ellipseDistance = 50;
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
	    	s.stroke('#F26522');
      	s.strokeWeight(1); 
	      s.polarEllipses(20, 25, 50);
    		s.polarEllipses(20, 50, 50);
	      example6.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	    }
    }; 
  };
  let userDrawing6 = new p5(draw6, 'draw6');
}