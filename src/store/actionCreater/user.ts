import axios from "axios";
import { Dispatch } from "redux"

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
    var matrix: any[] =[], i, j;
 for (i=0; i<cellx; i++){
    matrix[i] = new Array();
for (j=0; j<celly; j++){
    matrix[i][j]=0;
  }
  
 }
console.log(matrix);
 return matrix;
};