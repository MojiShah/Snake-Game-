class Cell {
    constructor() {
        this.index = null;
        this.element = null;
        this.direction = null;
        this.isSnake = null;
    }

    setIndex(i){
        this.index = i;
    }

    setElement(cellElement){
        this.element = cellElement;
    }
}

export default Cell;