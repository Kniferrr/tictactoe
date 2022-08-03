import { Dispatch } from "redux"

import {SetNewNow,FETCH_USERS_ERROR,OnPut } from "../redusers/userReduser"


export const steX = (e: any) => {
    return async (dispatch: Dispatch<any>) => {
        try{
            dispatch(SetNewNow());
            dispatch(OnPut(e))
        }catch(e){
            dispatch(FETCH_USERS_ERROR("Произошла ошибка при загрузке пользователей"));
        }
    }
};

export const victorycheck=(matrix: any[]): void=> {
    matrix.map(row=> row[0] === row[1] ? row[1]===row[2] ? row[2] !== 0 ? console.log(row) : null : null  : null);
};