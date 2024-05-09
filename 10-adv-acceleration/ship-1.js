var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  ship = particle.create(width / 2, height / 2, 0, 0,),
  thrust = vector.create(0, 0);
    
document.body.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      thrust.setY(-0.1);
      break;
    case "ArrowDown":
      thrust.setY(0.1);
      break;
    case "ArrowLeft":
      thrust.setX(-0.1);
      break;
    case "ArrowRight":
      thrust.setX(0.1);
      break;
    default:
      break;
    }
});

document.body.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "ArrowUp":
      thrust.setY(0);
      break;
    case "ArrowDown":
      thrust.setY(0);
      break;
    case "ArrowLeft":
      thrust.setX(0);
      break;
    case "ArrowRight":
      thrust.setX(0);
      break;
    default:
      break;
    }
});


update();

function update() {
  context.clearRect(0, 0, width, height);

  ship.accelerate(thrust);
  ship.update();

  context.beginPath();
	context.arc(ship.position.getX(), ship.position.getY(), 4, 0, Math.PI * 2);
  context.fill();
  
  // keep the ship on screen
  if (ship.position.getX() > width) {
    ship.position.setX(0);
  }
  if (ship.position.getX() < 0) {
    ship.position.setX(width);
  }
  if (ship.position.getY() > height) {
    ship.position.setY(0);
  }
  if (ship.position.getY() < 0) {
    ship.position.setY(height);
  }

  requestAnimationFrame(update);
}
