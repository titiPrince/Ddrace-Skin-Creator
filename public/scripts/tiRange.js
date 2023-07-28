/*

`tiRange.js` created by tiPrince 07/2023
Custom range graphically editable

*/

var activeRange = null;

/**
 * 
 * @param {HTMLElement} range The `div.tirange` element
 * @param {Number} value The value to set to the range
 */
function setRangeByValue(range, value) {
  const rect = range.getBoundingClientRect();
  const activePath = range.querySelector('.tirange-active');
  let rangeNumber = range.querySelector('.tirange-number');
  const min = parseInt(rangeNumber.min || 0, 10);
  const max = parseInt(rangeNumber.max || 100, 10);
  value = Math.max(min, Math.min(value, max));
  
  let offset = ((parseFloat(value) - min) / (max - min)) * rect.width
  offset = Math.max(0, Math.min(offset, rect.width));
  
  activePath.style.width = `${offset}px`;

  const event = new Event("change");
  rangeNumber.dispatchEvent(event);
}

/**
 * Set the value of the range depending of the mouse's position from the screen.
 * @param {HTMLElement} range The `div.tirange` element
 * @param {Number} x The coordinate of the mouse on the screen
 */
function setRangeByX(range, x) {
  const rect = range.getBoundingClientRect();
  let rangeNumber = range.querySelector('.tirange-number');
  const min = parseFloat(rangeNumber.min || 0);
  const max = parseFloat(rangeNumber.max || 100);
  const offset = Math.max(0, Math.min(x - rect.left, rect.width));
  const step = parseFloat(rangeNumber.step || 1);

  const activePath = range.querySelector('.tirange-active');
  activePath.style.width = `${offset}px`;

  rangeNumber.value = (Math.round(min + (offset / rect.width) * (max - min) / step) * step).toFixed(2);

  const event = new Event("change");
  rangeNumber.dispatchEvent(event);
}

/**
 * 
 * @param {HTMLElement} range The `div.tirange` element
 */
function setRangeByDefault(range) {
  let rangeNumber = range.querySelector('.tirange-number');
  setRangeByValue(range, rangeNumber.value);
}

function triggerMouseMove(event) {
  if (!activeRange) return;

  setRangeByX(activeRange, event.x);
}

function triggerMouseUp(event) {
  if (!activeRange) return;

  document.removeEventListener("mousemove", triggerMouseMove);
  document.removeEventListener("mouseup", triggerMouseUp);

  activeRange = null;
}

window.addEventListener('DOMContentLoaded', () => {
  const ranges = document.querySelectorAll(".tirange");
  const rangeNumbers = document.querySelectorAll('.tirange-number');

  // Ranges event listeners
  for (const range of ranges) {
    setRangeByDefault(range);

    range.addEventListener("mousedown", (event) => {
      activeRange = range;

      setRangeByX(range, event.x);

      document.addEventListener("mousemove", triggerMouseMove);
      document.addEventListener("mouseup", triggerMouseUp);
    });
  }

  // Range's number input event listeners
  for (let rangeNumber of rangeNumbers) {
    // Cancel the user selection
    rangeNumber.addEventListener('mousedown', function(event) {
      if (!rangeNumber.hasAttribute('readonly')) return;
      event.preventDefault();
    });

    // Let the user interact with the input
    rangeNumber.addEventListener('dblclick', function(event) {
      rangeNumber.removeAttribute("readonly");
      rangeNumber.focus();
      rangeNumber.select();
    });

    // Set the value on lost focus and enter key pressed
    rangeNumber.addEventListener('focusout', function(event) {
      rangeNumber.blur();
      rangeNumber.setAttribute("readonly", true);

      setRangeByValue(rangeNumber.parentElement, rangeNumber.value);
    });

    rangeNumber.addEventListener('keypress', function(event) {
      if (event.key !== "Enter") return;

      rangeNumber.blur();
      rangeNumber.setAttribute("readonly", true);

      setRangeByValue(rangeNumber.parentElement, rangeNumber.value);
    });
  }
});