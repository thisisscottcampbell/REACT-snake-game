import React from 'react';
import Board from './Board'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          Snake Game
          <Board />
      </header>
    </div>
  );
}

export default App;
