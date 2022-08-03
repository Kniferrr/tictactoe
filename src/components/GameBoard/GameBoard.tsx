import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {fethUsers,Restart} from "../../store/actionCreater/user";
import {steX} from "../../store/actionCreater/setx";
import {checkWin} from "../../store/actionCreater/checkWin"
import "./GameBoard.css";
import {OnWin} from "../../store/redusers/userReduser"

const GameBoard: React.FC = () => {
    const {matrix, loading, error, cellx,celly,win} = useTypedSelector(state => state.user);
    const dispatch: any = useDispatch();


    useEffect( ()=>{
        if(checkWin(matrix)){
            dispatch(OnWin())
        }
    }, [matrix]);

    useEffect( ()=>{
        dispatch(fethUsers(cellx,celly))
    }, []);

    const OnClickCell = (e: any) =>{
        dispatch(steX(e.target.id))
    }

    if(error){
        return <h2>Error...</h2>
    }else if(loading){
        return <h2>Loading...</h2>
    }else if (win !== null){
        return <div><h2>{`win - ${win}`}</h2><button className='btn btn-dark' onClick={()=> dispatch(Restart())}>restart</button></div>
    }

    let id = -1;

  return (
    <div className='game-board'>
        
        { matrix.map((row)=>(<div onClick={ OnClickCell } id={`${++id}`} className='cell col' key={id}>{row}</div>))}
        
    </div>
  )
};

export default GameBoard;