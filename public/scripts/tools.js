var toolColors = ["#0"];

const Tools = {
  FORMS: 0,
  PENCIL: 1,
  ERASER: 2,
  FILLER: 3
}


/**
 * An action who can be undo and redo
 * Should work with any tools
 */
class Action {
  constructor(layer, target, undo = () => {}, redo = () => {}) {
    this.layer = layer;
    this.target = target;

    this.undoAction = undo;
    this.redoAction = redo;
  }

  undo() {
    this.undoAction(this.layer, this.target);
  }

  redo() {
    this.redoAction(this.layer, this.target);
  }
}


/**
 * The base class for every tools
 */
class Tool {
  isMouseDown = false;
  configs = {};

  constructor() {
    this.mouseWheel = this.mouseWheel.bind(this);
  }

  setConfig(config, value) {
    this.configs[config] = value;
  }

  mouseWheel(event) {
    if (!this.hasOwnProperty("brush")) return;

    this.brush.radius((this.configs.size / 2) * currentPart.scale);
    this.brushBack.radius((this.configs.size / 2) * currentPart.scale);
  }

  equip() {}

  static updateUI() {
    currentLayer.renderToImage();
    currentSkin.updatePreview();
  }

  static undo(layer, target) {
    target.destroy();
    Tool.updateUI();
  }

  static redo(layer, target) {
    layer.add(target);
    Tool.updateUI();
  }
}


/**
 * Group of tools to draw 
 */
class Drawing extends Tool {
  lastLine;
  brush;

  configs = {
    size: 20,
    opacity: 1,
    smoothLine: false,
    smoothLineStrenght: 1
  }

  constructor() {
    super();

    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseUp = this.mouseUp.bind(this);

    this.brush = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.configs.size/2,
      fillEnabled: false,
      stroke: "#000",
      strokeWidth: 1,
      visible: false,
      dash: [3, 3],
      hitStrokeWidth: 0,
      listening: false
    })

    this.brushBack = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.configs.size/2,
      fillEnabled: false,
      stroke: "#fff",
      strokeWidth: 1,
      visible: false,
      hitStrokeWidth: 0,
      listening: false
    })

    main.add(this.brush, this.brushBack);
  }

  mouseMove(event) {
    let mousePos = stage.getPointerPosition();

    // Display the brush
    this.brush.position({x: mousePos.x, y: mousePos.y});
    this.brushBack.position({x: mousePos.x, y: mousePos.y});
    
    this.brushBack.moveToTop();
    this.brush.moveToTop();

    if (!this.isMouseDown || event.evt.which !== 1) return;

    // Drawing
    const layerPos = currentPart.position;
    const scale = currentPart.scale;
    
    let newX = (mousePos.x - layerPos.x) / scale;
    let newY = (mousePos.y - layerPos.y) / scale;
    
    if (this.configs.smoothLine) {
      const last = this.lastLine.points().length - 1;
      const percent = ((this.configs.smoothLineStrenght / 100) * 0.9) ;

      newX -= (newX - this.lastLine.points()[last-1]) * percent;
      newY -= (newY - this.lastLine.points()[last]) * percent;
    }
    
    let newPoints = this.lastLine.points();
    newPoints[newPoints.length] = newX;
    newPoints[newPoints.length] = newY;

    this.lastLine.points(newPoints);
  }

  mouseDown(event) {
    if (event.evt.which !== 1) return;
    this.isMouseDown = true;

    let layerPos = currentPart.position;
    let mousePos = stage.getPointerPosition();

    this.lastLine = new Konva.Line({
      points: [
        (mousePos.x - layerPos.x) / currentPart.scale, 
        (mousePos.y - layerPos.y) / currentPart.scale, 
        (mousePos.x - layerPos.x) / currentPart.scale, 
        (mousePos.y - layerPos.y) / currentPart.scale
      ],
      stroke: toolColors[0],
      strokeWidth: this.configs.size,
      opacity: this.configs.opacity,
      lineCap: 'round',
      lineJoin: 'round',
      bezier: false,
      hitStrokeWidth: 0,
      listening: false
    })

    this.lastLine.globalCompositeOperation("source-over");

    currentLayer.add(this.lastLine);
  }

  mouseEnter() {
    this.brush.radius((this.configs.size / 2) * currentPart.scale);
    this.brushBack.radius((this.configs.size / 2) * currentPart.scale);
    this.brushBack.visible(true);
    this.brush.visible(true);
  }

  mouseLeave() {
    this.brushBack.visible(false);
    this.brush.visible(false);
    
    this.#apply();
  }

  mouseUp(event) {
    if (event.evt.which !== 1) return;

    this.#apply();
  }

  
  #apply() {
    if (!this.isMouseDown) return;
    this.isMouseDown = false;
    
    Drawing.updateUI();
    
    let currentAction = new Action(currentLayer, this.lastLine, Drawing.undo, Drawing.redo);
    
    currentPart.addAction(currentAction);
  }
}


/**
 * Tool to place different types of forms
 * Circle, Ellipse, Wedge, Square, Rectangle, Star, Ring, Arc, Polygon
 */
class Forms extends Tool {
  
}


/**
 * Tool to fill an area
 */
class Filler extends Tool {
  
}


/**
 * Tool to draw a free line
 */
class Pencil extends Drawing {
  equip() {
    let divConfigs = document.getElementById("configs-pencil");
    divConfigs.style.display = "flex";
  }
}


/**
 * Tool to erase a free line
 */
class Eraser extends Drawing {
  equip() {
    let divConfigs = document.getElementById("configs-eraser");
    divConfigs.style.display = "flex";
    let ranges = divConfigs.querySelectorAll('div.tirange');

    for (let range of ranges) {
      setRangeByDefault(range)
    }
  }

  mouseDown(event) {
    if (event.evt.which !== 1) return;
    this.isMouseDown = true;

    let layerPos = currentPart.position;
    let mousePos = stage.getPointerPosition();

    this.lastLine = new Konva.Line({
      points: [
        (mousePos.x - layerPos.x) / currentPart.scale, 
        (mousePos.y - layerPos.y) / currentPart.scale, 
        (mousePos.x - layerPos.x) / currentPart.scale, 
        (mousePos.y - layerPos.y) / currentPart.scale
      ],
      stroke: toolColors[0],
      strokeWidth: this.configs.size,
      opacity: this.configs.opacity,
      globalCompositeOperation: "destination-out",
      lineCap: 'round',
      lineJoin: 'round',
      bezier: false,
      listening: false
    });

    this.lastLine.globalCompositeOperation("destination-out");

    currentLayer.add(this.lastLine);
  }
}