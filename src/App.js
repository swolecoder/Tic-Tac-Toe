import React, { Component } from 'react';
import './App.css';

import Square from './Square';
class App extends Component {
  state = {
    board: ['', '', '', '', '', '', '', '', ''],
    turn: 'X'
  };

  playerWon() {
    const board = this.state.board;
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];

      if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }

      //check if the board is full
      let isBoardFull = true;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          isBoardFull = false;
          break;
        }
      }

      if (!isBoardFull) {
        return '';
      } else {
        return 'tie';
      }
    }
  }

  updateBoard(i) {
    let board = this.state.board.slice();
    let turn = this.state.turn;

    if (board[i] === '') {
      board[i] = turn;
      turn = turn === '0' ? 'X' : '0';
    }

    this.setState({
      board,
      turn
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Result: {this.playerWon()}</h1>
        <div>
          <Square
            value={this.state.board[0]}
            handleClick={this.updateBoard.bind(this, 0)}
          />
          <Square
            value={this.state.board[1]}
            handleClick={this.updateBoard.bind(this, 1)}
          />
          <Square
            value={this.state.board[2]}
            handleClick={this.updateBoard.bind(this, 2)}
          />
        </div>
        <div>
          <Square
            value={this.state.board[3]}
            handleClick={this.updateBoard.bind(this, 3)}
          />
          <Square
            value={this.state.board[4]}
            handleClick={this.updateBoard.bind(this, 4)}
          />
          <Square
            value={this.state.board[5]}
            handleClick={this.updateBoard.bind(this, 5)}
          />
        </div>
        <div>
          <Square
            value={this.state.board[6]}
            handleClick={this.updateBoard.bind(this, 6)}
          />
          <Square
            value={this.state.board[7]}
            handleClick={this.updateBoard.bind(this, 7)}
          />
          <Square
            value={this.state.board[8]}
            handleClick={this.updateBoard.bind(this, 8)}
          />
        </div>
      </div>
    );
  }
}

export default App;
