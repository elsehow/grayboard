var paper   = require('paper')
  , $       = require('jquery')
  , canvas  = document.getElementById("canvas")
  , $svg = $("#svg")

function setCanvasSize () {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

var setup = function () {

  // setup paper
  paper.install(window) // this and next line used to be outside setup()
  window.addEventListener('resize', setCanvasSize)
  setCanvasSize()
  paper.setup('canvas')

  // try to get old shit from dom
  var path = new Path() 
  path.importSVG($svg[0])

  // Create a simple drawing tool:
  var tool = new Tool()
  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function (event) {
  	path = new Path()
  	path.strokeColor = 'black'
  	path.add(event.point)
  }
  tool.onMouseDrag = function (event) {
  	path.add(event.point)
  }
  tool.onMouseUp = function (_) {
    $svg.append(path.exportSVG({asString: false}))
  }
}

$(document).on('ready', setup)