// lv1-1
const lv1_1Pattern = [
	's.polarEllipse(0,50,0)'
];

const lv1_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
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
		      let lv1_2Val = '<h4>1-2 Ellipse</h4>'
	          + '<p><hint><b>Mission</b></hint> Draw an ellipse by calling polarEllipse function starting at <b>angle 30</b>, with a <b>radius of 50</b></p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarEllipse()</b></func> is the function to draw ellipse. There are three parameters that can be passed to the funciton: <b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_2Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
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
		      let lv1_3Val = '<h4>1-3 Ellipse</h4>'
		      	+ '<p>In the previous level, you set an ellipse with angle of 30 degree but nothing changed, why? In p5.Polar, every shapes rotate at the center point and what we draw is an ellipse so it looks like not rotating. Don\'t worry, we will figure this out soon with other types of shape.</p>'
	          + '<p><hint><b>Mission</b></hint> Draw <b>2</b> ellipses by calling polarEllipse function starting at <b>angle 0</b>, with a <b>radius 50</b> for both ellipses, and set one ellipse with <b>distance of 50</b> and the other one with <b>distance of -50</b></p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarEllipse()</b></func> is the function to draw ellipse. There are three parameters that can be passed to the funciton: <b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_3Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
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
		      let lv1_4Val = '<h4>1-4 Ellipses</h4>'
		      	+ '<p>If a pattern requires you to draw 20 ellipses and imagine you have to call 20 polarEllipse function... Don\'t worry, let us introduce the multiple drawing functions that can draw multiple shapes at one time.</p>'
	          + '<p><hint><b>Mission</b></hint> Draw <b>2</b> ellipses by calling polarEllipses function starting at <b>number 2</b>, with <b>radius 50</b> and <b>distance of 50</b></p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarEllipses()</b></func> is the function to draw multiple ellipses. There are three parameters that can be passed to the funciton: <b>number</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_4Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
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
		      let lv1_5Val = '<h4>1-5 Ellipses</h4>'
		      	+ '<p>With the multiple drawing function, we can draw the same pattern by using one line only. Let\'s draw a ring of ellipses to see how magical it is.</p>'
	          + '<p><hint><b>Mission</b></hint> Draw <b>10</b> ellipses by calling polarEllipses function starting at <b>number 10</b>, with <b>radius 50</b> with a <b>distance of 50</b> as well</p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarEllipses()</b></func> is the function to draw multiple ellipses. There are three parameters that can be passed to the funciton: <b>number</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_5Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
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
		      let lv1_6Val = '<h4>1-6 Ellipses</h4>'
	          + '<p><hint><b>Mission</b></hint> Draw a set of ellipses starting at <b>number 20</b>, <b>radius 25</b> with a <b>distance of 50</b>, and another set of ellipses starting at <b>number 20</b>, <b>radius 50</b> with a <b>distance of 50</b></p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarEllipses()</b></func> is the function to draw multiple ellipses. There are three parameters that can be passed to the funciton: <b>number</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lv1_6Val;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
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
	      setTimeout(() => { 
		      let nextVal = '<h3>Congratulations! (*´▽`*)</h3>'
		      + '<p>You just learned how to draw ellipse. Click the button below and move to the next level!</p>'
		      + '<button onclick="window.location.href = \'#\'">Next Level - Triangle</button>';
	        document.getElementById('intro').innerHTML = nextVal;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing6 = new p5(draw6, 'draw6');
}