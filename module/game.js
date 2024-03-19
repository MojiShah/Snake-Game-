import Cell from "./cell.js";
class Game {
    constructor(opts) {
        //options
        this.rowCount = opts.rowCount ?? 12;
        this.colCount = opts.colCount ?? 12;
        this.initialSiza = opts.initialSiza ?? 3;

        this.grid = [];
        this.snakeIndex = [];
        this.direction = [];
        this.foodIndex = null;

        // create grid
        this.createGrid();
    }

    createGrid() {
        const gridSize = this.rowCount * this.colCount;
        const wrapper = document.getElementById('snake');
        const gridElem = wrapper.querySelector('.grid');

        // gridElem.style.backgroundColor = 'red';
        gridElem.style.gridTemplateColumns = `repeat(${this.colCount},1fr)`;


        for (let i = 0; i < gridSize; i++) {
            this.grid[i] = new Cell();
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            gridElem.appendChild(cellElement);
            this.grid[i].setIndex(i);
            this.grid[i].setElement(cellElement);
        }
    }
}

export default Game;