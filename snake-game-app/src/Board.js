import React, {useState} from 'react';
import './Board.css';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor(val) {
        const node = new Node(val);

        this.head = node;
        this.tail = node;
    }
}

const Direction = {
    UP: 'UP',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    DOWN: 'DOWN'
}

const BOARD_SIZE = 10;

const Board = () => {
    // const [board, setBoard] = useState(new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE).fill(0)));
    const [board, setBoard] = useState(genBoard(BOARD_SIZE));
    const [snakeCells, setSnakeCells] = useState(new Set([44]));
    const [snake, setSnake] = useState(new LinkedList(44));

    window.addEventListener('keydown', e => {
        const newDirection = getDirectionFromKey(e.key);
        const isValidDirection = newDirection !== '';
        if (!isValidDirection) setDirection(newDirection);
    })

    return (
        <div>
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className="row">{
                    row.map((cellValue, cellIdx) => (
                        <div key={cellIdx} className={`cell ${snakeCells.has(cellValue) ? 'snake-cell' : ''}`}>{cellValue}</div>
                    ))
                }</div>
            ))}
        </div>
    )
}

const genBoard = size => {
    let counter = 1;

    const board = [];

    for (let row = 0; row < size; row += 1) {
        const tempRow = [];

        for (let col = 0; col < size; col += 1) {
            tempRow.push(counter++)
        }
        board.push(tempRow);
    }
    return board;
}

const getDirection = key => {
    if (key === 'ArrowUp') return Direction.UP;
    if (key === 'ArrowRight') return Direction.RIGHT;
    if (key === 'ArrowDown') return Direction.DOWN;
    if (key === 'ArrowLeft') return Direction.LEFT;
    return '';
}

export default Board;