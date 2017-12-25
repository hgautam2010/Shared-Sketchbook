var socket;
function setup()
{
	createCanvas(windowWidth, windowHeight);
	socket = io.connect('http://localhost:3000/');
	socket.on('mouse', newDraw);
	background(50);
}

function newDraw(data)
{
	fill(0,0,100);
	noStroke();
	ellipse(data.x, data.y, 30, 30);
}

function draw()
{

}
function mouseDragged()
{
	fill(255,0,0);
	noStroke();
	ellipse(mouseX, mouseY, 30, 30);
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);
	console.log('Sending ', data);
}
