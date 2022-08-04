import { Dispatch } from "redux"

import {SetNewNow,FETCH_USERS_ERROR,OnPut } from "../redusers/cellState"


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

