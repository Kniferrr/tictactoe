import React from 'react';
import "./Score.css";
import { useTypedSelector } from '../hooks/useTypedSelector';

function Score() {
    const {scorex, scorey} = useTypedSelector(state => state.cellState);
  return (
    <div className='score'>
        <span className='score_x'>win x - {scorex}</span>
        <span className='score_y'>win o - {scorey}</span>
    </div>
  )
}

export default Score;