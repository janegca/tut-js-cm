/*
  Finding (x,y) position on a circle
	r = hypoteneuse
	x = x-axis position (adjacent side)
	y = y-axis position (opposite side)
	cosA = x/r -> x = r cosA
	sinA = y/r -> y = r sinA
 
	Lissajous curves are a family of curves described by
  parametric equations
    See Source: https://mathworld.wolfram.com/LissajousCurve.html

  When used to animate various objects (each given varying x,y speeds)
	looks random but is completely deterministic 

*/
window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		centerX = width / 2,
		centerY = height / 2,
		xRadius = 300,
		yRadius = 110,
    xangle = 0,
    yangle = 0,
		xspeed = 0.1,
    yspeed = 0.131,
		x, y;
	
	render();

	function render() {
		context.clearRect(0, 0, width, height);
		x = centerX + Math.cos(xangle) * xRadius;
		y = centerY + Math.sin(yangle) * yRadius;

		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI * 2, false);
		context.fill();

    xangle += xspeed;
    yangle += yspeed;
		requestAnimationFrame(render);
	}
	
};