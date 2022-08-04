import './App.css';
import React from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import Score from './components/Score/Score';

function App() {
  return (
    <div className="App">
      <Score/>
      <GameBoard/>
    </div>
  );
}

export default React.memo(App);
