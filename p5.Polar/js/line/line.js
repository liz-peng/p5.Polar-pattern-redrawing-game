// 1.1
const lv1_1Pattern = [
	's.polarLine(0,120)'
];

const lv1_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas8')) {
    document.getElementById('defaultCanvas8').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_1Ans = userInput.every(el => 
    lv1_1Pattern.includes(el)
  );
	
	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch1').clientWidth;
      let h = document.getElementById('sketch1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_1Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      example1.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lv1_2Val = '<h4>Level 1.2 Line</h4>'
	          + '<p><hint><b>Task</b></hint><br>' 
	          + 'Draw two lines by calling polarLine() function twice.</p> '
	          + '<p><hint><b>Hint</b></hint><br><func><b>polarLine()</b></func> '
	          + 'is the function to draw a single line. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarLine(30, 50, 10) draws a line starts with 30 degree of angle, radius of 50, and 10 distance from center point.</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_2Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1500);
	    }
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}

// 1.2
const lv1_2Pattern = [
	's.polarLine(0,120)',
  's.polarLine(90,120)'
];

const lv1_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas9')) {
    document.getElementById('defaultCanvas9').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_2Match = userInput.every(el => 
    lv1_2Pattern.includes(el)
  );

  const lv1_2Ans = lv1_2Pattern.every(el => 
    lv1_2Match && userInput.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch2').clientWidth;
      let h = document.getElementById('sketch2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_2Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      s.stroke('#77bd98');
    		s.polarLine(90, 120, 0);
	      example2.drawingContext.lineWidth = 1; 
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lv1_3Val = '<h4>Level 1.3 Line</h4>'
		      	+ '<p><hint><b>Task</b></hint><br>'
	          + 'Draw two lines by calling polarLine() function twice. Set distance value for the horizontal line.</p> '
	          + '<p><hint><b>Hint</b></hint><br><func><b>polarLine()</b></func> '
	          + 'is the function to draw a single line. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarLine(30, 50, 10) draws a line starts with 30 degree of angle, radius of 50, and 10 distance from center point.</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_3Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1500);
	    }
    }; 
  };
  let userDrawing2 = new p5(draw2, 'draw2');
}

// 1.3
const lv1_3Pattern = [
	's.polarLine(0,120)',
  's.polarLine(90,120,50)'
];

const lv1_3 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas10')) {
    document.getElementById('defaultCanvas10').remove();
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
      let w = document.getElementById('sketch3').clientWidth;
      let h = document.getElementById('sketch3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_3Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      s.stroke('#77bd98');
    		s.polarLine(90, 120, 50);
	      example3.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lv1_4Val = '<h4>Level 1.4 Line</h4>'
		      	+ '<p><hint><b>Task</b></hint><br>'
		      	+ 'Draw six lines by calling polarLine() function six times with different angles.</p> '
	          + '<p><hint><b>Hint</b></hint><br><func><b>polarLine()</b></func> '
	          + 'is the function to draw a single line. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter) '
	          + 'For example, polarLine(30, 50, 10) draws a line starts with 30 degree of angle, radius of 50, and 10 distance from center point.</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_4Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1500);
	    }
    }; 
  };
  let userDrawing3 = new p5(draw3, 'draw3');
}

// // 1.4
const lv1_4Pattern = [
	's.polarLine(0,120)',
 	's.polarLine(30,120)',
  's.polarLine(60,120)',
  's.polarLine(90,120)',
  's.polarLine(120,120)',
  's.polarLine(150,120)'
];

const lv1_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(210,120', '(30,120')
	).map(substr =>
		substr.replace('(240,120', '(60,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace('(300,120', '(120,120')
	).map(substr =>
		substr.replace('(330,120', '(150,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas11')) {
    document.getElementById('defaultCanvas11').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lv1_4Match = userInput.every(el => 
    lv1_4Pattern.includes(el)
  );
  
  const lv1_4Ans = lv1_4Pattern.every(el => 
    lv1_4Match && userInput.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch4').clientWidth;
      let h = document.getElementById('sketch4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_4Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      s.stroke('#a6dba7');
				s.polarLine(30, 120, 0);
				s.stroke('#77bd98');
				s.polarLine(60, 120, 0);
				s.stroke('#f9c6b3');
				s.polarLine(90, 120, 0);
				s.stroke('#faaa8f');
				s.polarLine(120, 120, 0);
				s.stroke('#e29686');
				s.polarLine(150, 120, 0);
	      example4.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let nextLevel = '<h3>Congratulations! (*´▽`*)</h3>'
		      + '<p>You just learned how to draw lines with p5.Polar single drawing function. ' 
		      + '<b>Multiple drawing function will be introduced in the future</b>. '
		      + 'Click the button below and move to the next level.</p>'
		      + '<button onclick="window.location.href = \'../level/triangle.html\'">Next Level - Triangle</button>';
	        document.getElementById('intro').innerHTML = nextLevel;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		      cm.options.readOnly = true;
		    }, 1500);
	    }
    }; 
  };
  let userDrawing4 = new p5(draw4, 'draw4');
}