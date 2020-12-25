
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var trash1, trash2, trash3;

	


function setup() {
	createCanvas(800, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,400,50);
	trash1 = new Trash(1200,650)
	//trash2 = new Trash()
	//trash3 = new Trash()
	var render = Render.create({
		element:document.body, 
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false

		}
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
 trash1.display();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y: -85})
	}
}


