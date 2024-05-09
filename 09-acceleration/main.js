/*
  acceleration
    - a change of velocity over time 
    - has a magnitude (velocity) and direction (angle)
    - both velocity (speed) and direction (angle) can change over time
    - can be represented by a vector
    - velocity per unit of time or (dist per time unit) per time unit

  Gravity
    - a type of acceleration, roughly (32 feet per second) per second
      or 32ft/sec²
    e.g. a dropped object will have an accleration of 
        32fps->64fps->96fps,...

  Acceleration implies some 'force' is acting on the velocity of an object
  causing it to change direction; if no force is acting on the object
  it will maintain both its speed and its direction

  Euler Method
    - method of adding acceleration to velocity and velocity to position
      on each time step
    - it's a 'mathematical integration'
    - the greater the time step, the less accurate the method, other 
      methods are more accurate but Euler's method is generally fine
      for games
*/
var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  particles = [],
	numParticles = 100;

// particles all start in middle of screen
for (var i = 0; i < numParticles; i++){
  particles.push(
    particle.create(width / 2, height / 3,
      Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
}

update();

function update() {
  context.clearRect(0, 0, width, height);

  // draw objects
	for (var i = 0; i < numParticles; i++) {
    var p = particles[i];
    
		p.update();

		context.beginPath();
		context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2);
		context.fill();
	}
  
  requestAnimationFrame(update);
}
