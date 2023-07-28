// let btnExport = document.querySelector("button#btn-export");

// btnExport.addEventListener("click", function() {
//     downloadImage(currentSkin.export(0));
// });

// let btnExport1 = document.querySelector("button#btn-export1");

// btnExport1.addEventListener("click", function() {
//     downloadImage(currentSkin.export(1));
// });

// let btnExport2 = document.querySelector("button#btn-export2");

// btnExport2.addEventListener("click", function() {
//     downloadImage(currentSkin.export(2));
// });

// let btnExport3 = document.querySelector("button#btn-export3");

// btnExport3.addEventListener("click", function() {
//     downloadImage(currentSkin.export(3));
// });

// let btnExport4 = document.querySelector("button#btn-export4");

// btnExport4.addEventListener("click", function() {
//     downloadImage(currentSkin.export(4));
// });

// function downloadImage(image) {
//     var a = document.createElement('a');
//     a.href = image
//     a.download = 'skin.png';
//     a.click();
// }

var isMenuBarHover = false;
var isNavigate = false;

function onMenuLeaved(event) {
    const element = event.target;

    element.setAttribute("aria-expanded", false);
}

function onMenuEnter(event) {
    if (!(isMenuBarHover && isNavigate)) return;

    const element = event.target;

    element.setAttribute("aria-expanded", true);
}

function expandMenu(event) {
    const element = event.target;

    let isExpanded = !!element.getAttribute("aria-expanded");

    element.setAttribute("aria-expanded", isExpanded);
    isNavigate = isExpanded;
}

function subMenuAction(event) {
    isNavigate = false;
}

window.addEventListener('DOMContentLoaded', () => {
    // let btnUndo = document.querySelector("button#btn-undo");

    // btnUndo.addEventListener("click", currentPart.undoAction);

    // let btnRedo = document.querySelector("button#btn-redo");

    // btnRedo.addEventListener("click", currentPart.redoAction);

    let menuBar = document.querySelector("#menubar");
    let menuButtons = document.querySelectorAll('#menubar > li');
    let subMenuButtons = document.querySelectorAll('#menubar > li li');
    
    menuBar.addEventListener("mouseenter", function() {
        isMenuBarHover = true;
    });

    menuBar.addEventListener("mouseleave", function() {
        isMenuBarHover = false;
        isNavigate = false;
    });

    menuButtons.forEach(element => {
        element.addEventListener("click", expandMenu);
        element.addEventListener("mouseenter", onMenuEnter);
        element.addEventListener("mouseleave", onMenuLeaved);
    });

    subMenuButtons.forEach(element => {
        element.addEventListener('click', subMenuAction);
    });
});

