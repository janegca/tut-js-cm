/*
  A less costly way to implement friction; not real but uses
  fewer CPU cycles and looks reasonably good in games
  Particle will take a little longer to slow down
*/
var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  p = particle.create(width / 2, height / 2, 10, Math.random() * Math.PI * 2),
  friction = 0.97;  // arrived at by trial and error

p.radius = 10;

update();

function update() {
  context.clearRect(0, 0, width, height);

  p.velocity.multiplyBy(friction);
  p.update();

  context.beginPath();
  context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
  context.fill();

  requestAnimationFrame(update);
}

