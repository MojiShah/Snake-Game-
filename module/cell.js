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

    setSnake(part , direction){
        this.resetSnakeClasses();
        this.element.classList.add(`is${part}`);
        this.setDirection(direction);
        this.isSnake = true;
    }

    resetSnakeClasses(){
        this.element.classList.remove('isHead');
        this.element.classList.remove('isBody');
        this.element.classList.remove('isTail');
    }

    setDirection(direction){
        this.direction = direction;
        this.resetDirectionClasses();
        this.element.classList.add(direction.toLowerCase()+'Direction');
    }

    resetDirectionClasses(){
        this.element.classList.remove('rightDirection');
        this.element.classList.remove('leftDirection');
        this.element.classList.remove('upDirection');
        this.element.classList.remove('downDirection');
    }
}

export default Cell;