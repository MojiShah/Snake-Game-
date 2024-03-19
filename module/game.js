import Cell from "./cell.js";
class Game {
    constructor(opts) {
        //options
        this.rowCount = opts.rowCount ?? 12;
        this.colCount = opts.colCount ?? 12;
        this.initialSize = opts.initialSize ?? 3;

        this.grid = [];
        this.snakeIndexes = [];
        this.direction = [];
        this.foodIndex = null;

        // create grid
        this.createGrid();

        // create snake
        this.createSnake();
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

    createSnake() {
        const gridMiddle = parseInt((this.grid.length / 2) - this.colCount / 2);
        const initialDirection = 'RIGHT';
        for (let i = 0; i < this.initialSize; i++) {
            if (i === 0) {
                // This is head of snake
                this.grid[gridMiddle].setSnake('Head',initialDirection);
                this.snakeIndexes.push(gridMiddle);
            }
            else if(i===this.initialSize-1){
                this.grid[gridMiddle-i].setSnake('Tail', initialDirection);
                this.snakeIndexes.push(gridMiddle);
            }else{
                this.grid[gridMiddle - i].setSnake('Body', initialDirection);
                this.snakeIndexes.push(gridMiddle);
            }
        }
    }
}

export default Game;