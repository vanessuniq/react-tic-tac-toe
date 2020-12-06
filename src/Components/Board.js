import React, { Component } from 'react';
import { calculateWinner } from '../helper/calculateWinner';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            status: 'X'
        };
    }
    handleClick(i) {
        const squares = [...this.state.squares];
        if (!calculateWinner(squares) && !squares[i]) {
            squares[i] = this.state.status;
            this.setState({
                ...this.state, 
                squares: squares, 
                status: squares[i] === 'X'? 'O' : 'X',
            });
        }
    }
     
    renderSquare(i) {
        return (
            <Square 
                value = {this.state.squares[i]}
                onClick = {() => this.handleClick(i)}

            />
        )
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        const {status} = this.state;
        return (
            <div>
                <div className="status">{winner? `Winner: ${winner}` : `Next player: ${status}`}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;