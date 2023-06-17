function setup(){
createCanvas(windowWidth, windowHeight);
	background(255);
	angleMode(DEGREES)
	rectMode(CENTER)
	textFont('Unna');
	
let btn1, btn2, btn3;
let posterIndex = 1;
	
	btn1 = createButton('Poster 1');
	btn1.position(width / 2 - 150, 0);
	btn1.mousePressed(scene1);

	btn2 = createButton('Poster 2');
	btn2.position(width / 2 - 50, 0);
	btn2.mousePressed(scene2);
	
	btn3 = createButton('Poster 3');
	btn3.position(width / 2 + 50, 0);
	btn3.mousePressed(scene3);
}

function draw() {
  switch(sceneIndex) {
   case 1:
     drawScene1();   
     break;
   case 2: 
     drawScene2();
     break;
		case 3: 
     drawScene3();
     break;
 }
}
function scene1() {
	window.open("https://13sonk.github.io/")
	sceneIndex = 1;
}
function scene2() {
window.open("https://13sonk.github.io/crow/")
	sceneIndex = 2;
}
function scene3() {
	window.open("https://13sonk.github.io/daft-weather/")
	sceneIndex = 3;
}
