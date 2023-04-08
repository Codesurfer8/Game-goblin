export default class Board {
  constructor(number) {
    this.number = number;
  }

  createField() {
    const board = document.getElementById('board');

    for (let i = 0; i < this.number; i += 1) {
      const tr = document.createElement('tr');
      for (let e = 0; e < this.number; e += 1) {
        const td = document.createElement('td');
        td.classList.add('el');
        tr.appendChild(td);
      }

      board.appendChild(tr);
    }
    return board;
  }
}
