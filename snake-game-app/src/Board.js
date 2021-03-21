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

const BOARD_SIZE = 10;

const Board = () => {
    const [board, setBoard] = useState(new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE).fill(0)));

    return (
        <div>
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className="row">{
                    row.map((cell, cellIdx) => (
                        <div key={cellIdx} className={`cell ${true ? 'snake-cell' : ''}`}></div>
                    ))
                }</div>
            ))}
        </div>
    )
}

export default Board;