const skins = {
  tee: {
    size: {
      x: 256,
      y: 128,
      tile: { x: 8, y: 4 }
    },
    preview: {
      size: {
        x: 104, // 116
        y: 86 // 96
      },
      scale: 0.89655172413793103448275862068966
    },
    parts: [
      {id: "head", tile: {x: 3, y: 3}, offset: {x: 0, y: 0}, preview: {renders: [{pos: {x: 0.5, y: 0.5}, rot: 0.0, scale: 1, flip: false, ord: 4}], switch: ''}},
      {id: "headShadow", tile: {x: 3, y: 3}, offset: {x: 3, y: 0}, preview: {renders: [{pos: {x: 0.5, y: 0.5}, rot: 0.0, scale: 1, flip: false, ord: 1}], switch: ''}},
      {id: "hand", tile: {x: 1, y: 1}, offset: {x: 6, y: 0}, preview: {renders: [], switch: ''}},
      {id: "handShadow", tile: {x: 1, y: 1}, offset: {x: 7, y: 0}, preview: {renders: [], switch: ''}},
      {id: "feet", tile: {x: 2, y: 1}, offset: {x: 6, y: 1}, preview: {renders: [{pos: {x: 0, y: 0.93}, rot: 0.0, scale: 1.5, flip: false, ord: 3}, {pos: {x: 1, y: 0.93}, rot: 0.0, scale: 1.5, flip: false, ord: 5}], switch: ''}},
      {id: "feetShadow", tile: {x: 2, y: 1}, offset: {x: 6, y: 2}, preview: {renders: [{pos: {x: 0, y: 0.93}, rot: 0.0, scale: 1.5, flip: false, ord: 0}, {pos: {x: 1, y: 0.93}, rot: 0.0, scale: 1.5, flip: false, ord: 2}], switch: ''}},
      {id: "author", tile: {x: 2, y: 1}, offset: {x: 0, y: 3}, preview: {renders: [], switch: ''}},
      {id: "eyesNormal", tile: {x: 1, y: 1}, offset: {x: 2, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}},
      {id: "eyesAngry", tile: {x: 1, y: 1}, offset: {x: 3, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}},
      {id: "eyesSad", tile: {x: 1, y: 1}, offset: {x: 4, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}},
      {id: "eyesHappy", tile: {x: 1, y: 1}, offset: {x: 5, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}},
      {id: "eyesDead", tile: {x: 1, y: 1}, offset: {x: 6, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}},
      {id: "eyesShocked", tile: {x: 1, y: 1}, offset: {x: 7, y: 3}, preview: {renders: [{pos: {x: 0.57, y: 0.41}, rot: 0.0, scale: 1.2, flip: false, ord: 6}, {pos: {x: 0.745, y: 0.41}, rot: 0.0, scale: 1.2, flip: true, ord: 6}], switch: 'eye'}}
    ]
  },
  game: {
    size: {
      x: 1024,
      y: 512,
      tile: { x: 32, y: 16}
    },
    parts: [
      {id: "crosshairHammer", tile: {x: 2, y: 2}, offset: {x: 0, y: 0}},
      {id: "chain", tile: {x: 1, y: 1}, offset: {x: 2, y: 0}},
      {id: "hook", tile: {x: 2, y: 1}, offset: {x: 3, y: 0}},
      {id: "particle1", tile: {x: 1, y: 1}, offset: {x: 6, y: 0}},
      {id: "particle2", tile: {x: 1, y: 1}, offset: {x: 7, y: 0}},
      {id: "particle3", tile: {x: 1, y: 1}, offset: {x: 8, y: 0}},
      {id: "explodParticle1", tile: {x: 2, y: 2}, offset: {x: 9, y: 0}},
      {id: "explodParticle2", tile: {x: 2, y: 2}, offset: {x: 11, y: 0}},
      {id: "explodParticle3", tile: {x: 2, y: 2}, offset: {x: 13, y: 0}},
      {id: "star1", tile: {x: 2, y: 2}, offset: {x: 15, y: 0}},
      {id: "star2", tile: {x: 2, y: 2}, offset: {x: 17, y: 0}},
      {id: "star3", tile: {x: 2, y: 2}, offset: {x: 19, y: 0}},
      {id: "heartFull", tile: {x: 2, y: 2}, offset: {x: 21, y: 0}},
      {id: "heartEmpty", tile: {x: 2, y: 2}, offset: {x: 23, y: 0}},
      {id: "ninjaDash1", tile: {x: 7, y: 4}, offset: {x: 25, y: 0}},
      {id: "hammer", tile: {x: 4, y: 3}, offset: {x: 2, y: 1}},
      {id: "particle4", tile: {x: 1, y: 1}, offset: {x: 6, y: 1}},
      {id: "particle5", tile: {x: 1, y: 1}, offset: {x: 7, y: 1}},
      {id: "particle6", tile: {x: 1, y: 1}, offset: {x: 8, y: 1}},
      {id: "minus", tile: {x: 2, y: 2}, offset: {x: 8, y: 2}},
      {id: "heart", tile: {x: 2, y: 2}, offset: {x: 10, y: 2}},
      {id: "armor", tile: {x: 2, y: 2}, offset: {x: 12, y: 2}},
      {id: "bulletArmor", tile: {x: 2, y: 2}, offset: {x: 15, y: 2}},
      {id: "grenadeArmor", tile: {x: 2, y: 2}, offset: {x: 17, y: 2}},
      {id: "laserArmor", tile: {x: 2, y: 2}, offset: {x: 19, y: 2}},
      {id: "armorFull", tile: {x: 2, y: 2}, offset: {x: 21, y: 2}},
      {id: "armorEmpty", tile: {x: 2, y: 2}, offset: {x: 23, y: 2}},
      {id: "crosshairPistol", tile: {x: 2, y: 2}, offset: {x: 0, y: 4}},
      {id: "pistol", tile: {x: 4, y: 2}, offset: {x: 2, y: 4}},
      {id: "bulletPistol", tile: {x: 2, y: 2}, offset: {x: 6, y: 4}},
      {id: "firePistol1", tile: {x: 4, y: 2}, offset: {x: 8, y: 4}},
      {id: "firePistol2", tile: {x: 4, y: 2}, offset: {x: 12, y: 4}},
      {id: "firePistol3", tile: {x: 4, y: 2}, offset: {x: 16, y: 4}},
      {id: "freezeBarStart", tile: {x: 1, y: 2}, offset: {x: 21, y: 4}},
      {id: "freezeBarMiddle1", tile: {x: 1, y: 2}, offset: {x: 22, y: 4}},
      {id: "freezeBarMiddle2", tile: {x: 1, y: 2}, offset: {x: 23, y: 4}},
      {id: "freezeBarEnd", tile: {x: 1, y: 2}, offset: {x: 24, y: 4}},
      {id: "ninjaDash2", tile: {x: 7, y: 4}, offset: {x: 25, y: 4}},
      {id: "crosshairShotgun", tile: {x: 2, y: 2}, offset: {x: 0, y: 6}},
      {id: "shotgun", tile: {x: 8, y: 2}, offset: {x: 2, y: 6}},
      {id: "bulletShotgun", tile: {x: 2, y: 2}, offset: {x: 10, y: 6}},
      {id: "fireShotgun1", tile: {x: 4, y: 2}, offset: {x: 12, y: 6}},
      {id: "fireShotgun2", tile: {x: 4, y: 2}, offset: {x: 16, y: 6}},
      {id: "fireShotgun3", tile: {x: 4, y: 2}, offset: {x: 20, y: 6}},
      {id: "crosshairGrenadeLauncher", tile: {x: 2, y: 2}, offset: {x: 0, y: 8}},
      {id: "grenadeLauncher", tile: {x: 8, y: 2}, offset: {x: 2, y: 8}},
      {id: "bulletGrenadeLauncher", tile: {x: 2, y: 2}, offset: {x: 10, y: 8}},
      {id: "blueFlag", tile: {x: 4, y: 8}, offset: {x: 12, y: 8}},
      {id: "redFlag", tile: {x: 4, y: 8}, offset: {x: 16, y: 8}},
      {id: "ninjaDash3", tile: {x: 7, y: 4}, offset: {x: 25, y: 8}},
      {id: "crosshairKatana", tile: {x: 2, y: 2}, offset: {x: 0, y: 10}},
      {id: "katana", tile: {x: 8, y: 2}, offset: {x: 2, y: 10}},
      {id: "armorNinja", tile: {x: 2, y: 2}, offset: {x: 10, y: 10}},
      {id: "crosshairLaser", tile: {x: 2, y: 2}, offset: {x: 0, y: 12}},
      {id: "laser", tile: {x: 7, y: 3}, offset: {x: 2, y: 12}},
      {id: "bulletLaser", tile: {x: 2, y: 2}, offset: {x: 10, y: 12}}
    ]
  }
}

class tiLayer extends Konva.Group {
  constructor(options = null) {
    super(options);
    
    this.partVisible = options.partVisible || true;
    this.preview = null;
    this.html = null;
  }

  buildHtml() {
    this.html = document.createElement("div");
    this.html.classList.add("layer");
    this.html.dataset.id = this.id();
    
    this.preview = document.createElement("img");
    this.preview.classList.add("layer-preview");
    
    let newInputName = document.createElement("input");
    newInputName.type = "text";
    newInputName.classList.add("layer-name");
    newInputName.value = this.name();
    newInputName.title = this.name();
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
  
    this.html.append(this.preview, newInputName, newHideBtn);
  
    layersContainer.insertBefore(this.html, layersContainer.firstChild);
  
    newInputName.dispatchEvent(new Event('dblclick'));

    const layerId = this.id();
  
    this.html.addEventListener("click", function(event) {
      if (event.target.tagName === "button") return;
      currentPart.changeActiveLayer(layerId);
    });
  }

  partToggleVisibility() {
    return this.partVisible = ! this.partVisible;
  }

  renderToImage() {
    renderer.show();
    renderer.clip({
      x: 0,
      y: 0,
      width: this.width(),
      height: this.height()
    });

    let clonedLayer = this.clone({x: 0, y: 0});

    renderer.add(clonedLayer);

    let image = renderer.toDataURL({
      pixelRatio: 0.5,
      width: 96,
      height: 96,
    });

    this.preview.src = image;
    clonedLayer.destroy();
  }
}


class tiGroup extends Konva.Group {
  constructor(options = null) {
    super(options);
    
    this.partVisible = options.partVisible || true;
    this.color = options.backColor || "#aaa";
    this.html = null;
  }

  buildHtml() {
    this.html = document.createElement("div");
    this.html.classList.add("group");
    this.html.dataset.id = this.id();
    this.html.style.backgroundColor = this.color;
    
    let newInputName = document.createElement("input");
    newInputName.type = "text";
    newInputName.classList.add("group-name");
    newInputName.value = this.name();
    newInputName.title = this.name();
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
    newHideBtn.classList.add("group-hide-btn");
    newHideBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.19 512.19" style="enable-background:new 0 0 512.19 512.19;" xml:space="preserve" width="512" height="512"><g><circle cx="256.095" cy="256.095" r="85.333"/><path d="M496.543,201.034C463.455,147.146,388.191,56.735,256.095,56.735S48.735,147.146,15.647,201.034   c-20.862,33.743-20.862,76.379,0,110.123c33.088,53.888,108.352,144.299,240.448,144.299s207.36-90.411,240.448-144.299   C517.405,277.413,517.405,234.777,496.543,201.034z M256.095,384.095c-70.692,0-128-57.308-128-128s57.308-128,128-128   s128,57.308,128,128C384.024,326.758,326.758,384.024,256.095,384.095z"/></g></svg>';

    this.html.append(newInputName, newHideBtn);
  
    layersContainer.insertBefore(this.html, layersContainer.firstChild);
  
    newInputName.dispatchEvent(new Event('dblclick'));

    const groupId = this.id();
  
    this.html.addEventListener("click", function(event) {
      if (event.target.tagName === "button") return;
      currentPart.changeActiveLayer(groupId);
    });
  }

  partToggleVisibility() {
    return this.partVisible = ! this.partVisible;
  }

  renderToImage() {
    renderer.show();
    renderer.clip({
      x: 0,
      y: 0,
      width: this.width(),
      height: this.height()
    });

    let clonedLayer = this.clone({x: 0, y: 0});

    renderer.add(clonedLayer);

    let image = renderer.toDataURL({
      pixelRatio: 0.5,
      width: 96,
      height: 96,
    });

    this.preview.src = image;
    clonedLayer.destroy();
  }
}


class Part {
  groupColors = [
    "#e85d5daa",
    "#e8905daa",
    "#e8cf5daa",
    "#bae85daa",
    "#5de866aa",
    "#5de8dcaa",
    "#5da5e8aa",
    "#615de8aa",
    "#ae5de8aa",
    "#e85d97aa",
  ]

  constructor(id, offset, preview, sizeTile, pixelRatio, pixelFactor = 1) {
    this._idCount = 0;
    this.id = id;
    this.offset = offset;
    this.preview = preview;
    this.sizeTile = sizeTile;
    this.pixelByTile = pixelRatio;
    this.pixelFactor = pixelFactor;

    this.width = this.sizeTile.x * this.pixelByTile.x * this.pixelFactor;
    this.height = this.sizeTile.y * this.pixelByTile.y * this.pixelFactor;

    this.scale = 1;
    
    this.position = {
      x: (main.width() / 2) - this.width / 2,
      y: (main.height() / 2) - this.height / 2,
    }

    this.groupColorPtr = 0;

    this.childs = [];
    this.layerCount = 0;
    this.container = new Konva.Group({
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      visible: false,
      clip: {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      },
      hitStrokeWidth: 0,
      listening: false
    });

    let filter = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: '#0',
      hitStrokeWidth: 0,
      listening: false
    });

    filter.globalCompositeOperation("destination-out");
    this.container.add(filter);

    main.add(this.container);

    this.createLayer = this.createLayer.bind(this);
    this.undoAction = this.undoAction.bind(this);
    this.redoAction = this.redoAction.bind(this);

    this.createLayer("main");

    this.activeLayer = this.childs[0];

    this.lastPreviews = [];
    this.actions = [];
    this.lastActionPtr = 0;
  }

  changeActiveLayer(id) {
    this.activeLayer.html.classList.remove("current");
    this.activeLayer = this.childs[id];
    currentLayer = this.activeLayer;
    this.activeLayer.html.classList.add("current")
  }

  move(pos) {
    this.container.move(pos);
    this.position = this.container.position();
  }

  setPosition(pos) {
    this.container.position(pos);
    this.position = pos;
  }

  setScale(scale) {
    this.container.scale({x: scale, y: scale});
    this.scale = scale;
  }

  createGroup(name) {
    let id = this._idCount++;
    this.groupColorPtr = ++this.groupColorPtr % this.groupColors.length;

    let newGroup = new tiGroup({
      id: id,
      name: name,
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      visible: true,
      partVisible: true,
      backColor: this.groupColors[this.groupColorPtr],
      clip: {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      },
      hitStrokeWidth: 0,
      listening: false
    });

    newGroup.buildHtml();

    let groupId = this.childs.push(newGroup) - 1;
    this.container.add(newGroup);

    return groupId;
  }

  createLayer(name) {
    let id = this._idCount++;

    let newLayer = new tiLayer({
      id: id,
      name: name,
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      visible: true,
      partVisible: true,
      clip: {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      },
      hitStrokeWidth: 0,
      listening: false
    });

    newLayer.buildHtml();

    let layerId = this.childs.push(newLayer) - 1;
    this.container.add(newLayer);
    this.layerCount++;

    return layerId;
  }

  removeCurrentChild() {
    if (this.layerCount <= 1) return;

    layersContainer.removeChild(this.activeLayer.html);
    this.activeLayer.destroy();
    // Not finished --------------------------------------------------------------------
  }

  hide() {
    this.container.hide();

    for (let layer of this.childs) {
      layer.html.style.display = "none";
    }
  }

  show() {
    this.container.show();

    for (const layer of this.childs) {
      layer.html.style.display = "flex";
    }
  }

  showOnly(id) { // a revoir
    for (const layer of this.childs) {
      layer.partVisible = false;
    }

    this.childs[id].partVisible = true;
    this.childs[id].show();
  }

  updatePreview(previewScale) {
    let renderCount = this.preview.renders.length;
    
    if (!renderCount) return;

    for (const lastPreview of this.lastPreviews) {
      lastPreview.destroy();
    }

    for (let i = 0; i < renderCount; i++) {
      const data = this.preview.renders[i];
      const scale = previewScale * data.scale;

      let newX = data.pos.x * (currentSkin.widthPreview - (this.width * scale));
      let newY = data.pos.y * (currentSkin.heightPreview - (this.height * scale));
      
      let clonedPart = this.container.clone({
        id: this.id,
        name: "preview",
        rotation: data.rot,
        scale: {x: data.flip ? -1 * scale : scale, y: scale}
      });

      clonedPart.position({x: data.flip ? newX + this.width : newX, y: newY});
      
      clonedPart.cache();
      clonedPart.ord = data.ord;
      
      this.lastPreviews[this.lastPreviews.length] = clonedPart;
      
      renderer.add(clonedPart);
    }
  }

  export() {
    let newX = this.offset.x * this.pixelByTile.x;
    let newY = this.offset.y * this.pixelByTile.y;

    let clonedPart = this.container.clone({
      x: newX,
      y: newY,
      width: this.sizeTile.x * this.pixelByTile.x,
      height: this.sizeTile.y * this.pixelByTile.y,
      id: this.id,
      name: "export",
      visible: true,
      scale: {x: 1, y: 1}
    });

    renderer.add(clonedPart);

    return clonedPart;
  }

  undoAction() {
    if (!this.lastActionPtr) return; // limit to 0

    let action = this.actions[--this.lastActionPtr];
    action.undo();
  }

  redoAction() {
    if (this.lastActionPtr == this.actions.length) return; // limit to max actions length

    let action = this.actions[this.lastActionPtr++];
    action.redo();
  }

  addAction(action) {
    this.actions.length = this.lastActionPtr++;
    this.actions[this.actions.length] = action;
  }
}

class Skin {
  constructor(type, sizeFactor = 1) {
    if (!Object.hasOwnProperty.call(skins, type)) return false;

    this.data = skins[type];

    this.sizeFactor = sizeFactor;

    this.width = this.data.size.x * this.sizeFactor;
    this.height = this.data.size.y * this.sizeFactor;
    
    this.pixelRatio = {x: this.width / this.data.size.tile.x, y: this.height / this.data.size.tile.y};

    this.widthPreview = this.data.preview.size.x;
    this.heightPreview = this.data.preview.size.y;
    this.scalePreview = this.data.preview.scale;
    
    this.parts = [];
    this.activePart = null;
    
    for (const part of this.data.parts) {
      let newPart = new Part(part.id, part.offset, part.preview, part.tile, this.pixelRatio, this.sizeFactor);
      this.parts.push(newPart);
      newPart.hide();
    }

    this.preview = document.querySelector("img#preview");
  
    this.changePart(0);
  }

  changePart(id) {
    if (this.activePart !== null) this.activePart.hide();

    this.activePart = this.parts[id];
    this.activePart.show()
    currentPart = this.activePart;
    currentLayer = this.activePart.activeLayer;
  
    updateLayerBorderPosition();
    updateLayerBorderScale();
    layerBorderShow();
  }

  updatePreview() {
    currentPart.updatePreview(this.scalePreview);
    let previewParts = renderer.find(".preview");

    let orders = previewParts.map(part => part.ord);
    orders = minifyArray(orders);

    previewParts.forEach((part, index) => {
      part.zIndex(orders[index]);
      part.show();
    });

    renderer.clip({
      x: 0,
      y: 0,
      width: this.widthPreview,
      height: this.heightPreview
    });

    this.preview.src = renderer.toDataURL({
      pixelRatio: 1,
      width: this.widthPreview,
      height: this.heightPreview,
    });

    previewParts.forEach(part => {
      part.hide();
    });
  }

  export(factor) {
    let exportParts = [];

    for (const part of this.parts) {
      let exportPart = part.export();
      exportParts[exportParts.length] = exportPart;
      exportPart.show();
    }

    renderer.clip({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
    });

    let image = renderer.toDataURL({
      pixelRatio: (this.width * Math.pow(2, factor)) / 256,
      width: this.width,
      height: this.height,
    });

    exportParts.forEach(part => {
      part.destroy();
    });

    return image;
  }
}

function createNewFile(type, sizeFactor = 1) {
  currentSkin = new Skin(type, sizeFactor);
  currentPart.changeActiveLayer(0);
}

window.addEventListener('DOMContentLoaded', () => {
  const partsContainer = document.querySelector('div#teeskin-parts');
  const parts = partsContainer.querySelectorAll("img");
  
  for (const part of parts) {
    part.onclick = (event) => currentSkin.changePart(parseInt(event.target.dataset.partId, 10));
  }
});

function minifyArray(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return arr.map(num => sorted.indexOf(num));
}