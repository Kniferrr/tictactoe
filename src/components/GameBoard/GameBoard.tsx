import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {fethUsers} from "../../store/actionCreater/user";
import {steX,victorycheck} from "../../store/actionCreater/setx";
import "./GameBoard.css";

const GameBoard: React.FC = () => {
    const {matrix, loading, error, cellx,celly} = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();


    useEffect( ()=>{
        victorycheck(matrix)
    }, [matrix]);

    useEffect( ()=>{
        dispatch(fethUsers(cellx,celly))
    }, []);

    const OnClickCell = (e: any) =>{
        dispatch(steX(e.target.id))
    }

    if(error){
        return <h2>Error...</h2>
    };
    if(loading){
        return <h2>Loading...</h2>
    };
    let y = 0;
    let x = 0;
    let id = 0;

  return (
    <div className='game-board'>{
    matrix.map((row)=>(<div className='row  flex-wrap' key={x++}> {row.map((cell: any)=> (<div onClick={ OnClickCell } id={`${id++}`} className='cell col' key={y++}>{cell}</div>))} </div>))
    }</div>
  )
};

export default GameBoard;