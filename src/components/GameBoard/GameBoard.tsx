import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {createNewMAtrix,Restart} from "../../store/actionCreater/createNewMAtrix";
import {steX} from "../../store/actionCreater/setx";
import {checkWin} from "../../store/actionCreater/checkWin"
import "./GameBoard.css";
import {OnWin} from "../../store/redusers/cellState"
import { motion,AnimatePresence } from "framer-motion";
import {variants} from "../../animations/index"

const GameBoard: React.FC = () => {


    const {matrix, loading, error, cellx,celly,win} = useTypedSelector(state => state.cellState);
    const dispatch: any = useDispatch();


    useEffect(()=>{
        const winStatus = checkWin(matrix);
        if(winStatus){
            dispatch(OnWin(winStatus))
        }
    }, [matrix]);

    useEffect( ()=>{
        dispatch(createNewMAtrix(cellx,celly))
    }, []);

    const OnClickCell = (e: any) =>{
        if(matrix[e.target.id] === null){
            dispatch(steX(e.target.id))
        }
    }

    if(error){
        return <h2>Error...</h2>
    }else if(loading){
        return <h2>Loading...</h2>
    }else if (win !== null){
        if(win === "drow"){
            return <div className='window_restart'><h2>{`drow`}</h2><button className='btn btn-dark button_restart'  onClick={()=> dispatch(Restart())}>restart</button></div>
        }else{
            return <div className='window_restart'><h2>{`win - ${win}`}</h2><button className='btn btn-dark button_restart' onClick={()=> dispatch(Restart())}>restart</button></div>
        }
    }

    let id = -1;

  return (
    <div className='game-board'>
        
        { matrix.map((row)=>(<motion.div 
        initial={"initial"}
        animate={"visible"}
        custom={5}
        variants={variants}
         onClick={ OnClickCell } id={`${++id}`} className='cell col' key={id}>{row}</motion.div>))}
        
    </div>
  )
};

export default GameBoard;