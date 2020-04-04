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
	
	if(document.getElementById('defaultCanvas11')) {
    document.getElementById('defaultCanvas11').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv1 p').innerHTML = '';
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
      polar.setCenter(w/2, h/2+10);
      if(!lv1_1Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv1 p').classList.add('wrong');
	      document.querySelector('#lv1 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      example1.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv1 p').classList == 'wrong') {
	      	document.querySelector('#lv1 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv1 p').classList.add('pass');
	      document.querySelector('#lv1 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let lv1_2Title = 'Level 1.2 Line';
		      let lv1_2Task = '<task>Task</task>'
	          + '<br>Draw a horizontal and a vertical line both with <b>radius 120</b>.';
		      document.querySelector('#intro h4').innerText = lv1_2Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv1_2Task;
		      document.querySelector('#lv1 p').innerHTML = '';
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
	
	if(document.getElementById('defaultCanvas12')) {
    document.getElementById('defaultCanvas12').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv2 p').innerHTML = '';
  } 

  const lv1_2Match = userInput.every(el => 
    lv1_2Pattern.includes(el)
  );

  const lv1_2Ans = lv1_2Pattern.every(el => 
    lv1_2Match && userInput.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw2').clientWidth;
      let h = document.getElementById('draw2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_2Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv2 p').classList.add('wrong');
	      document.querySelector('#lv2 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      s.stroke('#77bd98');
    		s.polarLine(90, 120, 0);
	      example2.drawingContext.lineWidth = 1; 
	      if(document.querySelector('#lv2 p').classList == 'wrong') {
	      	document.querySelector('#lv2 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv2 p').classList.add('pass');
	      document.querySelector('#lv2 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let lv1_3Title = 'Level 1.3 Line';
		      let lv1_3Task = '<task>Task</task>'
	          + '<br>Draw a vertical line with <b>radius 120</b>. '
	          + 'And a horizontal line with the same radius but move <b>50 distance</b> from center point.';
		      document.querySelector('#intro h4').innerText = lv1_3Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv1_3Task;
		      document.querySelector('#lv2 p').innerHTML = '';
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

	if(document.getElementById('defaultCanvas13')) {
    document.getElementById('defaultCanvas13').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv3 p').innerHTML = '';
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
      polar.setCenter(w/2, h/2+10);
      if(!lv1_3Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv3 p').classList.add('wrong');
	      document.querySelector('#lv3 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#cef19d');
	      s.polarLine(0, 120, 0);
	      s.stroke('#77bd98');
    		s.polarLine(90, 120, 50);
	      example3.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv3 p').classList == 'wrong') {
	      	document.querySelector('#lv3 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv3 p').classList.add('pass');
	      document.querySelector('#lv3 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let lv1_4Title = 'Level 1.4 Line';
		      let lv1_4Task = '<task>Task</task>'
	          + '<br>Draw six lines with <b>radius 120</b> and six different angles.';
		      document.querySelector('#intro h4').innerText = lv1_4Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv1_4Task;
		      document.querySelector('#lv3 p').innerHTML = '';
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

	if(document.getElementById('defaultCanvas14')) {
    document.getElementById('defaultCanvas14').remove();
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
      let w = document.getElementById('draw4').clientWidth;
      let h = document.getElementById('draw4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+10);
      if(!lv1_4Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv4 p').classList.add('wrong');
	      document.querySelector('#lv4 p').innerHTML = '<b>Try Again</b>';
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
	      if(document.querySelector('#lv4 p').classList == 'wrong') {
	      	document.querySelector('#lv4 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv4 p').classList.add('pass');
	      document.querySelector('#lv4 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let nextLevel = '<h3>Congratulations!</h3>'
	      	+ '<p>You just learned how to draw lines with p5.Polar single drawing function. '
	      	+ '<b>Multiple drawing function will be introduced in the future</b>. '
	      	+ '<br><br>'
	      	+ 'Click the button below and move to the next level.</p>'
	      	+ '<button onclick="window.location.href = \'../level/triangle.html\'">Next Level - Triangle</button>';
		      document.querySelector('#intro').innerHTML = nextLevel;
		      document.querySelector('#lv4 p').innerHTML = '';
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