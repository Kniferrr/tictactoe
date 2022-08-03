import { Dispatch } from "redux"

import {OnWin,FETCH_USERS_ERROR } from "../redusers/userReduser"

export const checkWin = (matrix: any[]) =>{ 

    if(matrix[0] !== 0 && matrix[0] !== null && matrix[0] !== undefined &&  matrix[0]=== matrix[1] && matrix[1]=== matrix[2]){
        console.log("win")
        return matrix[0];
    }else if (matrix[3] !== 0 && matrix[3] !== null && matrix[3] !== undefined  && matrix[3]=== matrix[4] && matrix[4]=== matrix[5]){
        console.log("win")
        return matrix[3];
    }else if (matrix[6] !== 0 && matrix[6] !== null && matrix[6] !== undefined && matrix[7]=== matrix[8] && matrix[8]=== matrix[9]){
        console.log("win")
       return matrix[6];
    }else if (matrix[0] !== 0 && matrix[0] !== null && matrix[0] !== undefined && matrix[0]=== matrix[4] && matrix[4]=== matrix[8]){
        console.log("win")
        return matrix[0];
    }else if (matrix[2] !== 0 && matrix[2] !== null && matrix[2] !== undefined && matrix[2]=== matrix[4] && matrix[4]=== matrix[6]){
        console.log("win")
        return matrix[2];
    }
    else{
        for(let i: number = 0; i < 3; i++){
            if(matrix[i] !== 0 && matrix[i] !== null && matrix[i] !== undefined && matrix[i] === matrix[i+3] && matrix[i+3] === matrix[i+6]){
                    console.log("win")
                    return matrix[i];
            }
        };
    };
};
