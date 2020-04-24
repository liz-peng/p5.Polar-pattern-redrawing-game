// playground
const playground = (userInput, cm) => {
	if(document.getElementById('defaultCanvas0')) {
    document.getElementById('defaultCanvas0').remove();
    document.getElementById('msg').innerText = '';
  } 

	let draw1 = (s) => { 
    s.setup = () => {
      let w = document.getElementById('draw1').clientWidth;
      let h = document.getElementById('draw1').clientHeight;
      s.createCanvas(w, h);
      polar.setCenter(w/2, h/2);
      console.log(userInput.join())
	    eval(userInput.join());
    }; 
  };
  let userDrawing1 = new p5(draw1, 'draw1');
}