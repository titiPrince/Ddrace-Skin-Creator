var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: "main",
  width: width - 500,
  height: height - 42
});

var main = new Konva.Layer({
  listening: false,
  id: "main"
});

var renderer = new Konva.Layer({
  x: -width,
  y: -height,
  visible: false,
  listening: false,
  id: "renderer",
});

stage.add(main, renderer);

let background = new Konva.Rect({
  x: 0,
  y: 0,
  width: main.width(),
  height: main.height(),
  fill: '#333',
  listening: false
});

var imageBorderForeground = new Konva.Rect({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  fillEnabled: false,
  stroke: "#09ffd2",
  strokeWidth: 1,
  visible: false,
  listening: false,
  dash: [3, 3]
});

var imageBorderBackground = new Konva.Rect({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  fillEnabled: false,
  stroke: "#000",
  strokeWidth: 1,
  visible: false,
  listening: false
});

function layerBorderShow() {
  imageBorderBackground.show();
  imageBorderBackground.moveToTop();
  imageBorderForeground.show();
  imageBorderForeground.moveToTop();
}

function updateLayerBorderPosition() {
  imageBorderBackground.position({
    x: currentPart.position.x - imageBorderBackground.strokeWidth() / 2, 
    y: currentPart.position.y - imageBorderBackground.strokeWidth() / 2
  });

  imageBorderForeground.position({
    x: currentPart.position.x - imageBorderBackground.strokeWidth() / 2, 
    y: currentPart.position.y - imageBorderBackground.strokeWidth() / 2
  });
}

function updateLayerBorderScale() {
  imageBorderBackground.width(currentPart.width * currentPart.scale + imageBorderBackground.strokeWidth());
  imageBorderBackground.height(currentPart.height * currentPart.scale + imageBorderBackground.strokeWidth());
  imageBorderForeground.width(currentPart.width * currentPart.scale + imageBorderForeground.strokeWidth());
  imageBorderForeground.height(currentPart.height * currentPart.scale + imageBorderForeground.strokeWidth());
}

main.add(background, imageBorderBackground, imageBorderForeground)

var currentSkin = null;
var currentPart = null;
var currentLayer = null;
var layersContainer = document.querySelector('div#layers');

function moveLayer(index, parent = null) {

}

function moveGroup(index, parent = null) {

}

function deleteLayer(id) {

}

function deleteGroup(id) {

}



window.addEventListener('DOMContentLoaded', () => {
  let addLayerBtn = document.querySelector("button#add-layer");
  let addGroupBtn = document.querySelector("button#add-group");
  let removeBtn = document.querySelector("button#remove");

  addLayerBtn.addEventListener('click', function() {
    let layerId = currentPart.createLayer("nameless layer");
    currentPart.changeActiveLayer(layerId);
  });

  addGroupBtn.addEventListener('click', function() {
    currentPart.createGroup("nameless group");
  });

  removeBtn.addEventListener('click', function() {
    currentPart.removeCurrentChild();
  });
});