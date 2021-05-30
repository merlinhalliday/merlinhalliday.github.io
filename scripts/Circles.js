function setup() {
  createCanvas(700, 700);
	background("red");	
}


function mouseReleased() {
	background("red");
	ellipse(random(400), random(400), 50, 50);
	print("here we go again")
}