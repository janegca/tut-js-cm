var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  ship = particle.create(width / 2, height / 2, 0, 0,),
  thrust = vector.create(0, 0),
  angle = 0,
  turningLeft = false,
  turningRight = false,
  thrusting = false;
    

document.body.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      thrusting = true;
      break;
    case "ArrowLeft":
      turningLeft = true;
      break;
    case "ArrowRight":
      turningRight = true;
      break;
    default:
      break;
    }
});

document.body.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "ArrowUp":
      thrusting = false;
      break;
    case "ArrowLeft":
      turningLeft = false;
      break;
    case "ArrowRight":
      turningRight = false;
      break;
    default:
      break;
    }
});

update();

function update() {
  context.clearRect(0, 0, width, height);

  // handle turning
  if (turningLeft) {
    angle -= 0.5;
  }
  if (turningRight) {
    angle += 0.5;
  }

  // handle direction of thrust
  thrust.setAngle(angle);
  if (thrusting) {
    thrust.setLength(0.1);
  } else {
    thrust.setLength(0);
  }

  ship.accelerate(thrust);
  ship.update();

  // position and draw the ship
  context.save();
  context.translate(ship.position.getX(), ship.position.getY());
  context.rotate(angle);

  context.beginPath();
  context.moveTo(10, 0);
  context.lineTo(-10, -7);
  context.lineTo(-10, 7);
  context.lineTo(10, 0);
  if (thrusting) {
    context.moveTo(-10, 0);
    context.lineTo(-18, 0);
  }
  context.stroke();

  context.restore();

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
