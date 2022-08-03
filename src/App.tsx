import './App.css';
import React from 'react';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard/>
    </div>
  );
}

export default React.memo(App);
