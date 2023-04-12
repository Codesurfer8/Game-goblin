import Board from './board';
import goblin from '../img/goblin.png';

const board = new Board(4);
const fieldBoard = board.createField();
const items = Array.from(fieldBoard.querySelectorAll('.el'));

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createImg() {
  const img = document.createElement('img');
  img.src = goblin;
  img.classList.add('picture');
  return img;
}

const picture = createImg();

setInterval(() => {
  const index = randomIndex(0, 15);
  if (items[index].children) {
    items[index].textContent = '';
  }
  items[index].appendChild(picture);
}, 600);

let countHit = 0;
let countFail = 0;

const luckScore = document.querySelector('.luck');
const failScore = document.querySelector('.fail');

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

      if (countHit === 3) {
        alert('You win !');
        luckScore.textContent = 0;
        countHit = 0;
        failScore.textContent = 0;
        countFail = 0;
      }

      if (countFail === 3) {
        alert('You lose !');
        luckScore.textContent = 0;
        countHit = 0;
        failScore.textContent = 0;
        countFail = 0;
      }
    },
  );
}
