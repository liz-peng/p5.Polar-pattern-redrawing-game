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
    document.querySelector('#lv1 p').innerHTML = '';
  } 

  const lvch1_1Ans = userInput.every(el => 
    lvch1_1Pattern.includes(el)
  );
	
	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw1').clientWidth;
      let h = document.getElementById('draw1').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_1Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv1 p').classList.add('wrong');
	      document.querySelector('#lv1 p').innerHTML = '<b>Try Again</b>';
	    }
	    else {
      	s.strokeWeight(1); 
      	s.stroke('#daf8e3');
	      s.polarLine(0, 120, 0);
	      example1.drawingContext.lineWidth = 1;
	      if(document.querySelector('#lv1 p').classList == 'wrong') {
	      	document.querySelector('#lv1 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv1 p').classList.add('pass');
	      document.querySelector('#lv1 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let lvch1_2Title = 'Challenge 1.2 Line & Triangle';
		      let lvch1_2Task = '<task>Task</task>'
	          + '<br>Draw three more lines with <b>radius 120</b>.';
		      document.querySelector('#intro h4').innerText = lvch1_2Title;
		      document.getElementsByTagName('p')[0].innerHTML = lvch1_2Task;
		      document.querySelector('#lv1 p').innerHTML = '';
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
    document.querySelector('#lv2 p').innerHTML = '';
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
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv2 p').classList.add('wrong');
	      document.querySelector('#lv2 p').innerHTML = '<b>Try Again</b>';
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
	      if(document.querySelector('#lv2 p').classList == 'wrong') {
	      	document.querySelector('#lv2 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv2 p').classList.add('pass');
	      document.querySelector('#lv2 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let lvch1_3Title = 'Challenge 1.3 Line & Triangle';
		      let lvch1_3Task = '<task>Task</task>'
	          + '<br>Draw one triangle with <b>radius 80</b> and move <b>40 distance</b> from center point.'
		      document.querySelector('#intro h4').innerText = lvch1_3Title;
		      document.getElementsByTagName('p')[0].innerHTML = lvch1_3Task;
		      document.querySelector('#lv2 p').innerHTML = '';
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
      let w = document.getElementById('draw3').clientWidth;
      let h = document.getElementById('draw3').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_3Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv3 p').classList.add('wrong');
	      document.querySelector('#lv3 p').innerHTML = '<b>Try Again</b>';
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
	      if(document.querySelector('#lv3 p').classList == 'wrong') {
	      	document.querySelector('#lv3 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv3 p').classList.add('pass');
	      document.querySelector('#lv3 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
	      	let lvch1_4Title = 'Challenge 1.4 Line & Triangle';
		      let lvch1_4Task = '<task>Task</task>'
	          + '<br>Draw seven more triangles with <b>radius 80</b> and move <b>40 distance</b>.';
		      document.querySelector('#intro h4').innerText = lvch1_4Title;
		      document.getElementsByTagName('p')[0].innerHTML = lvch1_4Task;
		      document.querySelector('#lv3 p').innerHTML = '';
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
    document.querySelector('#lv4 p').innerHTML = '';
  } 

  const lvch1_4Match = userInput.every(el => 
    lvch1_4Pattern.includes(el)
  );
  
  const lvch1_4Ans = lvch1_4Pattern.every(el => 
    lvch1_4Match && userInput.includes(el)
  );

	let draw4 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw4').clientWidth;
      let h = document.getElementById('draw4').clientHeight;
      s.createCanvas(w, h);
      s.noFill();
      polar.setCenter(w/2, h/2+15);
      if(!lvch1_4Ans) {
      	s.stroke('#e7454f');
      	s.strokeWeight(2); 
	      eval(userInput.join());
	      document.querySelector('#lv4 p').classList.add('wrong');
	      document.querySelector('#lv4 p').innerHTML = '<b>Try Again</b>';
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
	      if(document.querySelector('#lv4 p').classList == 'wrong') {
	      	document.querySelector('#lv4 p').classList.remove('wrong')
	      }
	      document.querySelector('#lv4 p').classList.add('pass');
	      document.querySelector('#lv4 p').innerHTML = '<b>Pass!</b>';
	      setTimeout(() => { 
		      let nextLevel = '<h3>Congratulations!</h3>'
	      	+ '<p>You mastered the first ultimate challenge! '
	      	+ '<br><br>'
	      	+ '<b>More levels coming soon.</b></p>.';
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