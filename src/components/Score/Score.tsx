import React from 'react';
import "./Score.css";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {setPlayers} from "../../store/redusers/cellState"

function Score() {
    const {scorex, scorey} = useTypedSelector(state => state.cellState);
    const dispatch: any = useDispatch();

    const onSubminForm = (e: any) => {
      e.preventDefault();
      dispatch(setPlayers(Number(e.target.value)));
    }

  return (
    <div className='score'>
        <form>
    <p><input name="player" type="radio" value="1" checked onChange={onSubminForm} /> 1 player</p>
    <p><input name="player" type="radio" value="2" onChange={onSubminForm} /> 2 player</p>
        </form>

        <span className='score_x'>win x - {scorex}</span>
        <span className='score_y'>win o - {scorey}</span>
    </div>
  )
}

export default Score;