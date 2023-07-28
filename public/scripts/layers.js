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

function addLayerHTML(id, name = "Nameless", group = null) {
  let layersContainer = document.querySelector('div#layers');

  let newLayer = document.createElement("div");
  newLayer.classList.add("layer");
  newLayer.dataset.id = id;
  
  let newPreview = document.createElement("img");
  newPreview.classList.add("layer-preview");
  
  let newInputName = document.createElement("input");
  newInputName.type = "text";
  newInputName.classList.add("layer-name");
  newInputName.value = name;
  newInputName.title = name;
  newInputName.readOnly = true;

  newInputName.addEventListener('mousedown', function(event) {
    if (!event.target.hasAttribute('readonly')) return;
    event.preventDefault();
  });

  newInputName.addEventListener('click', function(event) {
    event.preventDefault();
  });

  newInputName.addEventListener('dblclick', function(event) {
    event.preventDefault();
    event.target.readOnly = false;
    event.target.select();
  });

  newInputName.addEventListener('change', function(event) {
    event.target.title = event.target.value;
    event.target.readOnly = true;
  });

  newInputName.addEventListener('focusout', function(event) {
    event.target.readOnly = true;
  });
  
  let newHideBtn = document.createElement("button");
  newHideBtn.setAttribute("type", "button");
  newHideBtn.classList.add("layer-hide-btn");
  newHideBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.19 512.19" style="enable-background:new 0 0 512.19 512.19;" xml:space="preserve" width="512" height="512"><g><circle cx="256.095" cy="256.095" r="85.333"/><path d="M496.543,201.034C463.455,147.146,388.191,56.735,256.095,56.735S48.735,147.146,15.647,201.034   c-20.862,33.743-20.862,76.379,0,110.123c33.088,53.888,108.352,144.299,240.448,144.299s207.36-90.411,240.448-144.299   C517.405,277.413,517.405,234.777,496.543,201.034z M256.095,384.095c-70.692,0-128-57.308-128-128s57.308-128,128-128   s128,57.308,128,128C384.024,326.758,326.758,384.024,256.095,384.095z"/></g></svg>';

  newLayer.append(newPreview, newInputName, newHideBtn);

  layersContainer.append(newLayer);

  newInputName.dispatchEvent(new Event('dblclick'));

  newLayer.addEventListener("click", function(event) {
    if (event.target.tagName === "button") return;
    let input = newLayer;
    currentPart.changeActiveLayer(input.dataset.id);
  });

  return newLayer;
}

function addGroup(name, parent = null) {

}

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

  addLayerBtn.addEventListener('click', function() {
    currentPart.createLayer("nameless layer");
  });
});