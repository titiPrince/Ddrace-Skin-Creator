function downloadImage(image) {
    var a = document.createElement('a');
    a.href = image
    a.download = 'skin.png';
    a.click();
}

const subMenuActions = {
    FILE_NEW: "file-new",
    FILE_OPEN: "file-open",
    FILE_SAVE: "file-save",
    FILE_EXPORT: "file-export",
    EDIT_UNDO: "edit-undo",
    EDIT_REDO: "edit-redo",
    EDIT_COPY: "edit-copy",
    EDIT_PASTE: "edit-paste",
    EDIT_CUT: "edit-cut",
    EDIT_SETTINGS: "edit-settings",
    UPLOAD_OFFICIAL: "upload-off",
    UPLOAD_TWDATA: "upload-twdata",
    VIEW_ZOOM_DEFAULT: "view-zoom-default",
    VIEW_ZOOM_IN: "view-zoom-in",
    VIEW_ZOOM_OUT: "view-zoom-out",
    VIEW_CAMERA_CENTER: "view-camera-center",
    HELP_TUTORIALS: "help-tuto",
    HELP_SOURCE_CODE: "help-source"
}

function subMenuActionManager(type) {
    switch (type) {
        default:
        case subMenuActions.FILE_NEW:
          // Process for the action "New"
          break;
        case subMenuActions.FILE_OPEN:
          // Process for the action "Open"
          break;
        case subMenuActions.FILE_SAVE:
          // Process for the action "Save"
          break;
        case subMenuActions.FILE_EXPORT:
            // Should open a window to select export settings
            downloadImage(currentSkin.export(4));
          break;
        case subMenuActions.EDIT_UNDO:
            currentPart.undoAction();
          break;
        case subMenuActions.EDIT_REDO:
            currentPart.redoAction();
          break;
        case subMenuActions.EDIT_COPY:
          // Process for the action "Copy"
          break;
        case subMenuActions.EDIT_PASTE:
          // Process for the action "Paste"
          break;
        case subMenuActions.EDIT_CUT:
          // Process for the action "Cut"
          break;
        case subMenuActions.EDIT_SETTINGS:
          // Process for the action "Settings"
          break;
        case subMenuActions.UPLOAD_OFFICIAL:
          // Process for the action "Official Upload"
          break;
        case subMenuActions.UPLOAD_TWDATA:
          // Process for the action "Teeworlds Data Upload"
          break;
        case subMenuActions.VIEW_ZOOM_DEFAULT:
          // Process for the action "Zoom 100%"
          break;
        case subMenuActions.VIEW_ZOOM_IN:
          // Process for the action "Zoom In"
          break;
        case subMenuActions.VIEW_ZOOM_OUT:
          // Process for the action "Zoom Out"
          break;
        case subMenuActions.VIEW_CAMERA_CENTER:
          // Process for the action "Move camera to center"
          break;
        case subMenuActions.HELP_TUTORIALS:
          // Process for the action "Tutorials"
          break;
        case subMenuActions.HELP_SOURCE_CODE:
          // Process for the action "Source code"
          break;
      }
}


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
    const subMenuButton = event.target;
    const menuButton = subMenuButton.parentElement.parentElement
    const action = subMenuButton.getAttribute("value");

    console.log(action);

    menuButton.setAttribute("aria-expanded", false);

    isNavigate = false;

    subMenuActionManager(action);
}

window.addEventListener('DOMContentLoaded', () => {
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

