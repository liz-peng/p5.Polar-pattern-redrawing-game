// 2.1
const lv2_1Pattern = [
	's.polarTriangle(0,90)'
];

const lv2_1 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(120,90', '(0,90')
	).map(substr =>
		substr.replace('(240,90', '(0,90')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas11')) {
    document.getElementById('defaultCanvas11').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv1 p').innerHTML = '';
  } 

  const lv2_1Ans = userInput.every(el => 
    lv2_1Pattern.includes(el)
  );
	
	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw1').clientWidth;
      let h = document.getElementById('draw1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_1Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv1 p').classList.add('wrong');
	      document.querySelector('#lv1 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarTriangle(0, 90, 0);
	      example1.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv1 p').classList == 'wrong') {
	      	document.querySelector('#lv1 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv1 p').classList.add('pass');
	      document.querySelector('#lv1 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let lv2_2Title = 'Level 2.2 Triangle';
		      let lv2_2Task = '<task>Task</task>'
	          + '<br>Draw two traingles both with <b>radius 90</b> and point in opposite directions.';
		      document.querySelector('#intro h4').innerText = lv2_2Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv2_2Task;
		      document.querySelector('#lv1 p').innerHTML = '';
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}

// 2.2
const lv2_2Pattern = [
	's.polarTriangle(0,90)',
  's.polarTriangle(180,90)'
];

const lv2_2 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(120,90', '(0,90')
	).map(substr =>
		substr.replace('(240,90', '(0,90')
	).map(substr =>
		substr.replace('(60,90', '(180,90')
	).map(substr =>
		substr.replace('(300,90', '(180,90')
	).map(substr =>
		substr.replace(',0)', ')')
	);
	
	if(document.getElementById('defaultCanvas12')) {
    document.getElementById('defaultCanvas12').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv2 p').innerHTML = '';
  } 

  const lv2_2Match = userInput.every(el => 
    lv2_2Pattern.includes(el)
  );

  const lv2_2Ans = lv2_2Pattern.every(el => 
    lv2_2Match && userInput.includes(el)
  );

	let draw2 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw2').clientWidth;
      let h = document.getElementById('draw2').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_2Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv2 p').classList.add('wrong');
	      document.querySelector('#lv2 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#cef19d');
	      s.polarTriangle(0, 90, 0);
	      s.stroke('#77bd98');
    		s.polarTriangle(180, 90, 0);
	      example2.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv2 p').classList == 'wrong') {
	      	document.querySelector('#lv2 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv2 p').classList.add('pass');
	      document.querySelector('#lv2 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let lv2_3Title = 'Level 2.3 Triangle';
		      let lv2_3Task = '<task>Task</task>'
			      + '<br>Draw two traingles both with <b>radius 90</b> and move <b>45 distance</b> in opposite directions.';
		      document.querySelector('#intro h4').innerText = lv2_3Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv2_3Task;
		      document.querySelector('#lv2 p').innerHTML = '';
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing2 = new p5(draw2, 'draw2');
}

// 2.3
const lv2_3Pattern = [
	's.polarTriangle(0,90,45)',
  's.polarTriangle(180,90,45)'
];

const lv2_3 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(120,90', '(0,90')
	).map(substr =>
		substr.replace('(240,90', '(0,90')
	).map(substr =>
		substr.replace('(60,90', '(180,90')
	).map(substr =>
		substr.replace('(300,90', '(180,90')
	);

	if(document.getElementById('defaultCanvas13')) {
    document.getElementById('defaultCanvas13').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv4 p').innerHTML = '';
  } 

  const lv2_3Match = userInput.every(el => 
    lv2_3Pattern.includes(el)
  );
  
  const lv2_3Ans = lv2_3Pattern.every(el => 
    lv2_3Match && userInput.includes(el)
  );

	let draw3 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw3').clientWidth;
      let h = document.getElementById('draw3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_3Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv3 p').classList.add('wrong');
	      document.querySelector('#lv3 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#cef19d');
	      s.polarTriangle(0, 90, 45);
	      s.stroke('#77bd98');
    		s.polarTriangle(180, 90, 45);
	      example3.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv3 p').classList == 'wrong') {
	      	document.querySelector('#lv3 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv3 p').classList.add('pass');
	      document.querySelector('#lv3 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let lv2_4Title = 'Level 2.4 Triangle';
		      let lv2_4Task = '<task>Task</task>'
			      + '<br>Draw four traingles with <b>radius 40</b>.';
		      document.querySelector('#intro h4').innerText = lv2_4Title;
		      document.getElementsByTagName('p')[0].innerHTML = lv2_4Task;
		      document.querySelector('#lv3 p').innerHTML = '';
		      document.getElementById('msg').innerText = '';
		      cm.setValue('// type your code here\n');
		      cm.setCursor({line: 1});
		    }, 1000);
	    }
    }; 
  };
  let userDrawing3 = new p5(draw3, 'draw3');
}

// 2.4
const lv2_4Pattern = [
	's.polarTriangle(0,40,80)',
  's.polarTriangle(90,40,80)',
  's.polarTriangle(180,40,80)',
  's.polarTriangle(270,40,80)'
];

const lv2_4 = (userInput, cm) => {
	userInput = userInput.map(substr =>
		substr.replace('(120,40', '(0,40')
	).map(substr =>
		substr.replace('(240,40', '(0,40')
	).map(substr =>
		substr.replace('(210,40', '(90,40')
	).map(substr =>
		substr.replace('(330,40', '(90,40')
	).map(substr =>
		substr.replace('(60,40', '(180,40')
	).map(substr =>
		substr.replace('(300,40', '(180,40')
	).map(substr =>
		substr.replace('(150,40', '(270,40')
	).map(substr =>
		substr.replace('(30,40', '(270,40')
	);

	if(document.getElementById('defaultCanvas14')) {
    document.getElementById('defaultCanvas14').remove();
    document.getElementById('msg').innerText = '';
    document.querySelector('#lv4 p').innerHTML = '';
  } 

  const lv2_4Match = userInput.every(el => 
    lv2_4Pattern.includes(el)
  );
  
  const lv2_4Ans = lv2_4Pattern.every(el => 
    lv2_4Match && userInput.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw4').clientWidth;
      let h = document.getElementById('draw4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2);
      if(!lv2_4Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv4 p').classList.add('wrong');
	      document.querySelector('#lv4 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
	      s.stroke('#f9c6b3');
	      s.polarTriangle(0, 40, 80);
	      s.stroke('#e29686');
				s.polarTriangle(90, 40, 80);
				s.stroke('#cef19d');
				s.polarTriangle(180, 40, 80);
				s.stroke('#77bd98');
				s.polarTriangle(270, 40, 80);
	      example4.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv4 p').classList == 'wrong') {
	      	document.querySelector('#lv4 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv4 p').classList.add('pass');
	      document.querySelector('#lv4 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let nextLevel = '<h3>Congratulations!</h3>'
	      	+ '<p>You just learned how to draw triangles with p5.Polar single drawing function. '
	      	+ '<b>Multiple drawing function will be introduced in the future</b>. '
	      	+ '<br><br>'
	      	+ 'Click the button below and move to the next level.</p>'
	      	+ '<button onclick="window.location.href = \'../level/challenge_1.html\'">Next Level - Challenge &#8544;</button>';
		      document.querySelector('#intro').innerHTML = nextLevel;
		      document.querySelector('#lv4 p').innerHTML = '';
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