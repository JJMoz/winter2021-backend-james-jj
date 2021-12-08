import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// the next 2 imports are not needed for the meda project
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//      Regular way to write a function
// function () {}
// Arrow function way, (alway anonymous, not named)
//  () => {}


// Below it what i pasted


function Square(props) {
    return (
      <button 
      className="square" 

        onClick= {props.onClick()}
      >
        {props.value}
      </button> 
    );
  }


class Board extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = {    
      // another way of creating an array  
      squares: Array(9).fill(null), xIsNext: true  
    };  
  }

  handleClick(i) {    
    const squares = this.state.squares.slice();    
    squares[i] = this.state.xIsNext ? 'X' : 'O';    
    this.setState({squares: squares}), !this.state.xIsNext  
  }


  renderSquare(i) {
    return 
    <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />;
}

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
