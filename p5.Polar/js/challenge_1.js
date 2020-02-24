// ch1.1
const lvch1_1Pattern = [
	's.polarLine(0,150)'
];

const lvch1_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas4')) {
    document.getElementById('defaultCanvas4').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lvch1_1Ans = userInput.every(el => 
    lvch1_1Pattern.includes(el)
  );
	
	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch1').clientWidth;
      let h = document.getElementById('sketch1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lvch1_1Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#daf8e3');
	      s.polarLine(0, 150, 0);
	      example1.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lvch1_2Val = '<h4>Challenge-1.2 Line & Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'Add three more lines with <b>radius of 150</b>. '
	          + 'The total four lines have four different angles <b>0, 45, 90 and 135</b>. '
	          + 'Call polarLine() function three more times to achieve the goal. Remember, each of line function should have different angle</p> '
	          + '<p><hint><b>Hint</b></hint> <func><b>polarLine()</b></func> '
	          + 'is the function to draw a single line. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lvch1_2Val;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}

// ch1.2
const lvch1_2Pattern = [
	's.polarLine(0,150)',
  's.polarLine(45,150)',
  's.polarLine(90,150)',
  's.polarLine(135,150)'
];

const lvch1_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas5')) {
    document.getElementById('defaultCanvas5').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lvch1_2Match = userInput.every(el => 
    lvch1_2Pattern.includes(el)
  );

  const lvch1_2Ans = lvch1_2Pattern.every(el => 
    lvch1_2Match && userInput.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch2').clientWidth;
      let h = document.getElementById('sketch2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lvch1_2Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#daf8e3');
	      s.polarLine(0, 150, 0);
	      s.stroke('#97ebdb');
		    s.polarLine(45, 150, 0);
		    s.stroke('#00c2c7');
		    s.polarLine(90, 150, 0);
		    s.stroke('#0086ad');
		    s.polarLine(135, 150, 0);
	      example2.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lvch1_3Val = '<h4>Challenge-1.3 Line & Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'Besides four lines, draw one triangle with <b>radius 100 and distance of 50</b>. '
	          + 'Call polarTriangle() function to achieve the goal</p> '
	          + '<p><hint><b>Hint</b></hint> <func><b>polarTriangle()</b></func> '
	          + 'is the function to draw a single triangle. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lvch1_3Val;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing2 = new p5(draw2, 'draw2');
}

// ch1.3
const lvch1_3Pattern = [
	's.polarLine(0,150)',
  's.polarLine(45,150)',
  's.polarLine(90,150)',
  's.polarLine(135,150)',
  's.polarTriangle(0,100,50)'
];

const lvch1_3 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas6')) {
    document.getElementById('defaultCanvas6').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lvch1_3Match = userInput.every(el => 
    lvch1_3Pattern.includes(el)
  );
  
  const lvch1_3Ans = lvch1_3Pattern.every(el => 
    lvch1_3Match && userInput.includes(el)
  );

	let draw3 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch3').clientWidth;
      let h = document.getElementById('sketch3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lvch1_3Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#daf8e3');
	      s.polarLine(0, 150, 0);
	      s.stroke('#97ebdb');
		    s.polarLine(45, 150, 0);
		    s.stroke('#00c2c7');
		    s.polarLine(90, 150, 0);
		    s.stroke('#0086ad');
		    s.polarLine(135, 150, 0);
		    s.stroke('#f7cac9');
		    s.polarTriangle(0, 100, 50);
	      example3.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let lvch1_4Val = '<h4>Challenge-1.4 Line & Triangle</h4>'
	          + '<p><hint><b>Mission</b></hint> ' 
	          + 'So far so good. We need seven more triangles! Draw seven triangles with <b>radius 100 and distance of 50</b>. '
	          + 'The total eight triangles have different angles: <b>0, 45, 90, 135, 180, 225, 270 and 315</b>. '
	          + 'Call polarTriangle() function seven more times</p>'
	          + '<p><hint><b>Hint</b></hint> <func><b>polarTriangle()</b></func> '
	          + 'is the function to draw a single triangle. '
	          + 'Three parameters can be passed to the single drawing funciton by the following order: '
	          + '<b>angle</b>, <b>radius</b>, and <b>distance</b> (distance is an optional parameter)</p>'
	          + '<p>* Type your answer in the box below and execute the code with <key><b>Shift + Enter</b></key> keys</p>';
		      document.getElementById('intro').innerHTML = lvch1_4Val;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing3 = new p5(draw3, 'draw3');
}

// ch1.4
const lvch1_4Pattern = [
	's.polarLine(0,150)',
  's.polarLine(45,150)',
  's.polarLine(90,150)',
  's.polarLine(135,150)',
  's.polarTriangle(0,100,50)',
  's.polarTriangle(45,100,50)',
  's.polarTriangle(90,100,50)',
  's.polarTriangle(135,100,50)',
  's.polarTriangle(180,100,50)',
  's.polarTriangle(225,100,50)',
  's.polarTriangle(270,100,50)',
  's.polarTriangle(315,100,50)',
];

const lvch1_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas7')) {
    document.getElementById('defaultCanvas7').remove();
    document.getElementById('msg').innerText = '';
  } 

  const lvch1_4Match = userInput.every(el => 
    lvch1_4Pattern.includes(el)
  );
  
  const lvch1_4Ans = lvch1_4Pattern.every(el => 
    lvch1_4Match && userInput.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('sketch4').clientWidth;
      let h = document.getElementById('sketch4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lvch1_4Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerText = 'Try again!';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#daf8e3');
			  s.polarLine(0, 150, 0);
			  s.stroke('#97ebdb');
			  s.polarLine(45, 150, 0);
			  s.stroke('#00c2c7');
			  s.polarLine(90, 150, 0);
			  s.stroke('#0086ad');
			  s.polarLine(135, 150, 0);
			  s.stroke('#f7cac9');
			  s.polarTriangle(0, 100, 50);
			  s.stroke('#dec2cb');
			  s.polarTriangle(45, 100, 50);
			  s.stroke('#c5b9cd');
			  s.polarTriangle(90, 100, 50);
			  s.stroke('#d6d2ff');
			  s.polarTriangle(135, 100, 50);
			  s.stroke('#dec6e3');
			  s.polarTriangle(180, 100, 50);
			  s.stroke('#e6bac7');
			  s.polarTriangle(225, 100, 50);
			  s.stroke('#eeafaa');
			  s.polarTriangle(270, 100, 50);
			  s.stroke('#f6a48e');
			  s.polarTriangle(315, 100, 50);
	      example4.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerText = 'Pass!';
	      setTimeout(() => { 
		      let nextLevel = '<h3>Congratulations! (*´▽`*)</h3>'
		      + '<p>You mastered the first ultimate challenge!</p>';
	        document.getElementById('intro').innerHTML = nextLevel;
		      document.getElementById('msg').innerText = '';
		    }, 1000);
	    }
    }; 
  };
  let userDrawing4 = new p5(draw4, 'draw4');
}