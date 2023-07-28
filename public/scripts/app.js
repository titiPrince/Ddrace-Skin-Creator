var tool;

var maxScale = 50.0;
var minScale = 0.05;

const toolsInstance = {
  FORMS: new Forms(),
  PENCIL: new Pencil(),
  ERASER: new Eraser(),
  FILLER: new Filler(),
} 

function setConfig(event) {
  let input = event.target;

  const name = input.name;
  const type = input.type;
  let value = 0;

  switch (type) {
    case "checkbox":
      value = input.checked;
      break;
  
    default:
      value = parseFloat(input.value);
      break;
  }

  tool.setConfig(name, value);
}

function changeTool(toolID, input = null) {
  switch (toolID) {
    case Tools.FORMS:
      tool = toolsInstance.FORMS;
      break;

    case Tools.ERASER:
      tool = toolsInstance.ERASER;
      break;

    case Tools.FILLER:
      tool = toolsInstance.FILLER;
      break;

    default:
    case Tools.PENCIL:
      tool = toolsInstance.PENCIL;
      break;
  }

  const allDivConfigs = document.querySelectorAll("div.tool-config");
  allDivConfigs.forEach(divConfig => divConfig.style.display = "none");

  tool.equip();

  stage.off(".tool");
  stage.on("mousemove.tool", tool.mouseMove);
  stage.on("mousedown.tool", tool.mouseDown);
  stage.on("mouseup.tool", tool.mouseUp);
  stage.on("mouseenter.tool", tool.mouseEnter);
  stage.on("mouseleave.tool", tool.mouseLeave);
  stage.on("wheel.tool", tool.mouseWheel);

  if (!input) return;
  let otherInputs = document.querySelectorAll("button.tool-btn");

  for (const otherInput of otherInputs) {
    otherInput.classList.remove("choosed");
  }

  input.classList.add("choosed");
}


let isMoveLayer = false; 
let lastMove = {x: 0, y: 0};

const handleMouseDown = event => { 
  event.evt.preventDefault();

  if (event.evt.which !== 2) return;

  isMoveLayer = true; 
  lastMove = stage.getPointerPosition(); 
};

const handleMouseMove = () => {
  if (!isMoveLayer) return; 
  const pos = stage.getPointerPosition(); 
  currentPart.move({x: pos.x - lastMove.x, y: pos.y - lastMove.y})
  // currentLayer.move(); 
  lastMove = pos; // clamp the group position to the stage boundaries 
  const groupPos = currentPart.position; 
  const stageWidth = stage.width(); 
  const stageHeight = stage.height(); 
  const groupWidth = currentPart.width * currentPart.scale; 
  const groupHeight = currentPart.height * currentPart.scale; 
  groupPos.x = clamp(groupPos.x, -groupWidth, stageWidth); 
  groupPos.y = clamp(groupPos.y, -groupHeight, stageHeight); 
  currentPart.setPosition(groupPos);

  updateLayerBorderPosition();
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const handleMouseUp = () => (isMoveLayer = false);
const handleMouseLeave = () => (isMoveLayer = false);

stage.on("mousedown.control", handleMouseDown); 
stage.on("mouseup.control", handleMouseUp);
stage.on("mouseleave.control", handleMouseLeave);
document.addEventListener("mousemove", handleMouseMove); 



var scaleBy = 1.1;

const handleWheelScroll = event => {
  event.evt.preventDefault();

  var oldScale = currentPart.scale;
  var pointer = stage.getPointerPosition();

  var mousePointTo = {
    x: (pointer.x - currentPart.position.x) / oldScale,
    y: (pointer.y - currentPart.position.y) / oldScale,
  };

  let direction = event.evt.deltaY > 0 ? -1 : 1;

  var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

  newScale = Math.min(Math.max(newScale, minScale), maxScale);

  currentPart.setScale(newScale);

  var newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };

  currentPart.setPosition(newPos);
  updateLayerBorderScale();
  updateLayerBorderPosition();
}

stage.on("wheel.control", handleWheelScroll);

window.addEventListener('DOMContentLoaded', function () {
  let configsInput = this.document.getElementsByClassName("cfg-input");
  let colorInput = this.document.getElementsByName("color")[0];

  colorInput.addEventListener("change", (event) => {
    toolColors.unshift(event.target.value);
    if (toolColors.length > 10) {
      toolColors.pop();
    }
  }, false);

  for (const input of configsInput) {
    input.addEventListener("change", setConfig);
  }


  createNewFile("tee", 1);
  changeTool(Tools.PENCIL);

  Coloris({
    el: "#cfg-color",
    theme: "polaroid",
    themeMode: 'dark',
    formatToggle: false,
    margin: 0,
    alpha: false,
    closeButton: true,
    closeLabel: 'Close',
    onChange: (color) => {
      toolColors.unshift(color);

      if (toolColors.length > 10) {
        toolColors.pop();
      }
    }
  });
});