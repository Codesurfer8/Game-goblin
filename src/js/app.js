import Board from './board';
import goblin from '../img/goblin.png';

const board = new Board(4);
const fieldBoard = board.createField();
const items = Array.from(fieldBoard.querySelectorAll('.el'));

const picture = document.createElement('img');
picture.src = goblin;
picture.classList.add('picture');

setInterval(() => {
  const index = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  if (items[index].children) {
    items[index].textContent = '';
  }
  items[index].appendChild(picture);
}, 1000);

let countHit = 0;
let countFail = 0;

const luckScore = document.querySelector('.luck');
const failScore = document.querySelector('.fail');

function zeroingOut() {
  luckScore.textContent = 0;
  countHit = 0;
  failScore.textContent = 0;
  countFail = 0;
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener(
    'click',
    (ev) => {
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
    },
  );
}
