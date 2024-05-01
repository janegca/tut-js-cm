/*
  In a right-angled triangle, the hypotenuse is the longest side (C)
	The other two sides meet at the right angle
	The horizontal side is the 'adjacent' side (A)
	The vertical side is the 'opposite' side (B)
	A² + B² = C² 
	sinA = B/C = opposite/hypoteneuse
	cosA = A/C = adjacent/hypoteneuse
	tanA = B/A = opposite/adjacent

	Math trig functions use radians; need to convert to degrees
	A full circle (360°) = 2 PI radians
		degrees = (radians x 180)/ PI
		radians = (degrees x PI)/ 180
*/
window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	// shift canvas down
	context.translate(0, height / 2);

	// flip y-axis values to change curve direction
	context.scale(1, -1);

	for(var angle = 0; angle < Math.PI * 2; angle += .01) {
		var x = angle * 100,
			y = Math.sin(angle) * 100;

		context.fillStyle = "black";
		context.fillRect(x, y, 5, 5);

		y = Math.cos(angle) * 100;
		context.fillStyle = "red";
		context.fillRect(x, y, 5, 5);
	}
};