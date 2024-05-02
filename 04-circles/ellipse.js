/*
  Finding (x,y) position on a circle
	r = hypoteneuse
	x = x-axis position (adjacent side)
	y = y-axis position (opposite side)
	cosA = x/r -> x = r cosA
	sinA = y/r -> y = r sinA

	Moves a small, black circle around the center of an ellipse
*/
window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		centerX = width / 2,
		centerY = height / 2 - 30,
		xRadius = 70,
		yRadius = 110,
		angle = 0,
		speed = 0.01,
		x, y;
	
	render();

	function render() {
		context.clearRect(0, 0, width, height);
		x = centerX + Math.cos(angle) * xRadius;
		y = centerY + Math.sin(angle) * yRadius;

		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;
		requestAnimationFrame(render);
	}
	
};