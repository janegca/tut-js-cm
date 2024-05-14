/* 
  Collision Detection or 'Hit' Testing
  - too many ways to cover all of them
  
*/
var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

update();

function update() {
  context.clearRect(0, 0, width, height);

  // animation goes here

  requestAnimationFrame(update);
}