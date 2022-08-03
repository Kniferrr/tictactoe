import axios from "axios";
import { Dispatch } from "redux"
import {OnRestart} from "../redusers/userReduser"

import {FETCH_USERS,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR } from "../redusers/userReduser"


export const fethUsers = ( cellx: number,celly: number) => {
    return async (dispatch: Dispatch<any>) => {
        try{
            dispatch(FETCH_USERS());
            const matrix: any[] = createMAtrix(cellx, celly);
            dispatch(FETCH_USERS_SUCCESS(matrix))
        }catch(e){
            dispatch(FETCH_USERS_ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
};

const createMAtrix = (cellx: number,celly: number) =>{
    var matrix: any[] =[];
 for (let i: number= 0; i<(cellx* celly); i++){
    matrix[i] = null;
 }
 return matrix;
};

export const Restart = ( ) => {
    return async (dispatch: Dispatch<any>) => {
        try{
            console.log( createMAtrix(3, 3));
            dispatch(OnRestart(createMAtrix(3, 3)))
        }catch(e){
            dispatch(FETCH_USERS_ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
};
