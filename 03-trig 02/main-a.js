/*
  Basic render() function that shrinks and grows a circle
  in the center of the canvas
*/
window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerX = width * 0.5,
    centerY = height * 0.5,
    baseRadius = 100,
		offset = 50,
		speed = 0.1,
		angle = 0;
	
	render();

	function render() {
		var radius = baseRadius + Math.sin(angle) * offset;

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;
		requestAnimationFrame(render);
	}

};