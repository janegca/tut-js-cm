/*
	velocity
		- a change of position over time
		- based on magnitude (speed) and direction (angle)
		- can be represented by a vector
		- distance per unit of time
	speed - based on 'distance' and 'time'
	animation frame is an arbitrary unit of time (frame rate)
*/

var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	particles = [],
	numParticles = 100;

// particles all start in middle of screen
for (var i = 0; i < numParticles; i++){
	particles.push(particle.create(width / 2, height / 2,
		Math.random() * 4 + 1, Math.random() * Math.PI * 2));
}

update();

function update() {
	context.clearRect(0, 0, width, height);

	// draw objects
	for (var i = 0; i < numParticles; i++) {
		var p = particles[i];
		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2);
		context.fill();
	}

	requestAnimationFrame(update);
}