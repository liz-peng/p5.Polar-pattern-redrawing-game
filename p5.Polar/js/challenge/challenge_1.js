// ch1.1
const lvch1_1Pattern = [
	's.polarLine(0,120)'
];

const lvch1_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas8')) {
    document.getElementById('defaultCanvas8').remove();
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
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_1Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#daf8e3');
	      s.polarLine(0, 120, 0);
	      example1.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lvch1_2Val = '<h4>Challenge 1.2 Line & Triangle</h4>'
	          + '<p><hint><b>Task</b></hint><br>' 
	          + 'Draw three more lines.</p>'
	          + '<p><hint><b>Hint</b></hint><br>'
	          + '<b>polarLine(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b><br>'
	          + '<b>polarTriangle(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b></p>'
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
	's.polarLine(0,120)',
  's.polarLine(45,120)',
  's.polarLine(90,120)',
  's.polarLine(135,120)'
];

const lvch1_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(225,120', '(45,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace('(315,120', '(135,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas9')) {
    document.getElementById('defaultCanvas9').remove();
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
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_2Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#daf8e3');
	      s.polarLine(0, 120, 0);
	      s.stroke('#97ebdb');
		    s.polarLine(45, 120, 0);
		    s.stroke('#00c2c7');
		    s.polarLine(90, 120, 0);
		    s.stroke('#0086ad');
		    s.polarLine(135, 120, 0);
	      example2.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lvch1_3Val = '<h4>Challenge 1.3 Line & Triangle</h4>'
	          + '<p><hint><b>Task</b></hint><br>' 
	          + 'Draw one triangle.</p>'
	          + '<p><hint><b>Hint</b></hint><br>'
	          + '<b>polarLine(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b><br>'
	          + '<b>polarTriangle(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b></p>'
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
	's.polarLine(0,120)',
  's.polarLine(45,120)',
  's.polarLine(90,120)',
  's.polarLine(135,120)',
  's.polarTriangle(0,80,40)'
];

const lvch1_3 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(225,120', '(45,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace('(315,120', '(135,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas10')) {
    document.getElementById('defaultCanvas10').remove();
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
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_3Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#daf8e3');
	      s.polarLine(0, 120, 0);
	      s.stroke('#97ebdb');
		    s.polarLine(45, 120, 0);
		    s.stroke('#00c2c7');
		    s.polarLine(90, 120, 0);
		    s.stroke('#0086ad');
		    s.polarLine(135, 120, 0);
		    s.stroke('#f7cac9');
		    s.polarTriangle(0, 80, 40);
	      example3.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let lvch1_4Val = '<h4>Challenge 1.4 Line & Triangle</h4>'
	          + '<p><hint><b>Task</b></hint><br>' 
	          + 'Draw seven more triangles with different angles.</p>'
	          + '<p><hint><b>Hint</b></hint><br>'
	          + '<b>polarLine(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b><br>'
	          + '<b>polarTriangle(<func>angle</func>, <func>radius</func>, <func>distance</func>)</b></p>'
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
	's.polarLine(0,120)',
  's.polarLine(45,120)',
  's.polarLine(90,120)',
  's.polarLine(135,120)',
  's.polarTriangle(0,80,40)',
  's.polarTriangle(45,80,40)',
  's.polarTriangle(90,80,40)',
  's.polarTriangle(135,80,40)',
  's.polarTriangle(180,80,40)',
  's.polarTriangle(225,80,40)',
  's.polarTriangle(270,80,40)',
  's.polarTriangle(315,80,40)',
];

const lvch1_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(180,120', '(0,120')
	).map(substr =>
		substr.replace('(225,120', '(45,120')
	).map(substr =>
		substr.replace('(270,120', '(90,120')
	).map(substr =>
		substr.replace('(315,120', '(135,120')
	).map(substr =>
		substr.replace(',0)', ')')
	);

	if(document.getElementById('defaultCanvas11')) {
    document.getElementById('defaultCanvas11').remove();
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
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_4Ans) {
      	s.stroke('#ccc');
      	s.strokeWeight(1); 
	      eval(userInput.join());
	      document.getElementById('msg').innerHTML = '<check>Try Again!</check>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#daf8e3');
			  s.polarLine(0, 120, 0);
			  s.stroke('#97ebdb');
			  s.polarLine(45, 120, 0);
			  s.stroke('#00c2c7');
			  s.polarLine(90, 120, 0);
			  s.stroke('#0086ad');
			  s.polarLine(135, 120, 0);
			  s.stroke('#f7cac9');
			  s.polarTriangle(0, 80, 40);
			  s.stroke('#dec2cb');
			  s.polarTriangle(45, 80, 40);
			  s.stroke('#c5b9cd');
			  s.polarTriangle(90, 80, 40);
			  s.stroke('#d6d2ff');
			  s.polarTriangle(135, 80, 40);
			  s.stroke('#dec6e3');
			  s.polarTriangle(180, 80, 40);
			  s.stroke('#e6bac7');
			  s.polarTriangle(225, 80, 40);
			  s.stroke('#eeafaa');
			  s.polarTriangle(270, 80, 40);
			  s.stroke('#f6a48e');
			  s.polarTriangle(315, 80, 40);
	      example4.drawingContext.lineWidth = 1;
	      document.getElementById('msg').innerHTML = '<check>Pass! (*´▽`*)</check>';
	      setTimeout(() => { 
		      let nextLevel = '<h3>Congratulations! (*´▽`*)</h3>'
		      + '<p>You mastered the first ultimate challenge!<br>'
		      + '<b>More levels coming soon!</b></p>';
	        document.getElementById('intro').innerHTML = nextLevel;
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		      cm.options.readOnly = true;
		    }, 1000);
	    }
    }; 
  };
  let userDrawing4 = new p5(draw4, 'draw4');
}