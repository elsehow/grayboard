var paper = require('paper')
  , canvas = document.getElementById("canvas")

function setCanvasSize () {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

paper.install(window);

window.addEventListener('resize', setCanvasSize)

window.onload = function() {
  setCanvasSize()
  paper.setup('canvas');
  // Create a simple drawing tool:
  var tool = new Tool();
  var path;
  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function(event) {
  	path = new Path();
  	path.strokeColor = 'black';
  	path.add(event.point);
  }
  tool.onMouseDrag = function(event) {
  	path.add(event.point);
  }
}
