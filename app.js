const canvas = document.querySelector('canvas');
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const context = canvas.getContext('2d');

class Player {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		context.fillStyle = this.color;
		context.fill();
	}

	moveUp() {
		this.y -= 7;
	}
	moveRight() {
		this.x += 7
	}
	moveLeft() {
		this.x -= 7
	}
	moveDown() {
		this.y += 7
	}
}
let player = new Player(canvas.width / 2, canvas.height / 2, 150, 'red');


addEventListener('keypress',(e) => {
	if(e.key == 'w'){
		player.moveUp()
	}else if(e.key == 'a'){
		player.moveLeft()
	}else if(e.key == 's') {
		player.moveDown()
	}else if (e.key == 'd') {
		player.moveRight()
	}
})

let animateID;
function animate() {
	animateID = requestAnimationFrame(animate);
	context.clearRect(0,0,canvas.width,canvas.height)
	player.draw();
}

animate();
