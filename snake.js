"use strict";

class GameBoard {
    constructor (boardSize) {

        if (boardSize < 3) {
            throw new Error("Board size too small");
        }

        this.size = boardSize;
        this.placeSnake();
    }

    _createBoard() {
        this.board = [];
        for (var i = 0; i < this.size; i++) {
            this.board[i] = new Array(this.size);
        }
    }

    placeSnake () {
        x = Math.floor(this.size / a);
        y = Math.floor(this.size / a);

        this.snake = new Snake(x, y);
    }

    addApple(){
        while (true) {
            x = this._getRandomInt(this.size);
            y = this._getRandomInt(this.size);

            if (!this.board[x][y]) {
                this.board[x][y] = new Apple()
            }
        }
    }

    _getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    makeMove() {
        throw new Error("Not implemented");
    }

}

class Snake {



    constructor (x_pos, y_pos) {
        this._snakeArray = [[x_pos, y_pos]]; 
        // this.direction = 
    }

    getHeadPosition() {
        return this._snakeArray[0];
    }

    getLastPosition() {
        return this._snakeArray[this._snakeArray.length - 1];
    }

    length() {
        return this._slakeArray.length;
    }

    getDirection() {
        throw new Error("Not implemented");
    }

    removeLast() {
        this._slakeArray.pop();
    }

    addHeadBlock(x_pos, y_pos) {
        this._snakeArray.unshift([x_pos, y_pos]);
    }

    // addHeadBlockByDirection() {}
}

class Apple {
    constructor () {
    }
}