/*
  Gravity vector has a direction (angle) that points toward 
  the center of the Earth
  It has a magnitude that decreases as you move farther away
  from the surface of the earth; the decrease is the inverse
  of the square of the distance
  The force exerted by gravity depends on the mass of the object,
  the greater the mass, the stronger the force; gravity on the Moon
  is roughly 1/6 the force on earth; on Jupiter, it would be 2.5 times
  the force of gravity on earth

  The formula for the gravitational pull of one body on another
  is: Gravity = (G x M) / r², where 
    M = Mass
    r = distance
    G = gravitational constant is approx. G / r²
*/
var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;
    
var sun = particle.create(width / 2, height / 2, 0, 0);
var planet = particle.create(width / 2 + 200, height / 2, 10, Math.PI / 2);
sun.mass = 20000;

update();

function update() {
  context.clearRect(0, 0, width, height);

  planet.gravitateTo(sun);
  planet.update();

  context.beginPath();
  context.fillStyle = "#ffff00";
  context.arc(sun.position.getX(), sun.position.getY(), 20, 0,
    Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.fillStyle = "#0000ff";
  context.arc(planet.position.getX(), planet.position.getY(), 5, 0,
    Math.PI * 2, false);
  context.fill();

  requestAnimationFrame(update);
}