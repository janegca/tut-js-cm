/*
  Tangent values can approach -+infinity and some values 
	are undefined so it is not used often but its reverse,
	Arctangent, can be useful
*/
window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		arrowX = width / 2,
		arrowY = height / 2,
		dx, dy,			// distance between mouse and arrow
		angle = 0;
	
	render();

	function render() {
		context.clearRect(0, 0, width, height);

		context.save();
		context.translate(arrowX, arrowY);
		context.rotate(angle);

		// draw the arrow
		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(-20, 0);
		context.moveTo(20, 0);
		context.lineTo(10, -10);
		context.moveTo(20, 0);
		context.lineTo(10, 10);
		context.stroke();

		context.restore();
		requestAnimationFrame(render);
	}
	
	// this works fine if the center of the canvas is the center
	// of the client window; if not, needs adjusment
	document.body.addEventListener("mousemove", function (event) {
		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;
		angle = Math.atan2(dy, dx);  // oppsite / adjacent in correct quadrant
	});
};