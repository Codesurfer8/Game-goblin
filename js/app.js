"use strict";

require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.timers.js");
var _board = _interopRequireDefault(require("./board"));
var _goblin = _interopRequireDefault(require("../img/goblin.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var board = new _board["default"](4);
var fieldBoard = board.createField();
var items = Array.from(fieldBoard.querySelectorAll('.el'));
var picture = document.createElement('img');
picture.src = _goblin["default"];
picture.classList.add('picture');
setInterval(function () {
  var index = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  if (items[index].children) {
    items[index].textContent = '';
  }
  items[index].appendChild(picture);
}, 1000);
var countHit = 0;
var countFail = 0;
var luckScore = document.querySelector('.luck');
var failScore = document.querySelector('.fail');
function zeroingOut() {
  luckScore.textContent = 0;
  countHit = 0;
  failScore.textContent = 0;
  countFail = 0;
}
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function (ev) {
    if (ev.target === picture) {
      countHit++;
      luckScore.textContent = countHit;
      ev.target.remove();
    }
    if (ev.target !== picture) {
      countFail++;
      failScore.textContent = countFail;
    }
    if (countHit === 5) {
      alert('You win !');
      zeroingOut();
    }
    if (countFail === 5) {
      alert('You lose !');
      zeroingOut();
    }
  });
}