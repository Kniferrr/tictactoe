import {UserState} from "../../types/user"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from "fs";


const initialState:UserState  = {
    scorex: 0,
    scorey: 0,
    win: null,
    nowx: false,
    cellx: 3,
    celly: 3,
    matrix: [],
    users: [],
    loading: false,
    error: null,
  };

export const useReduser = createSlice({
  name: 'useReduser',
  initialState,
  reducers: {
    FETCH_USERS: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      return {...state,loading:true, error: null, marix: []};
    },
    FETCH_USERS_SUCCESS: (state,action: PayloadAction<any[]>) => {
        return {...state,loading:false, error: null, matrix: action.payload};
      },
      FETCH_USERS_ERROR: (state,action: PayloadAction<string>) => {
        return {...state,loading:false, error: action.payload, users: []};
      },
      SetNewNow: (state) => {
        state.nowx ? state.nowx = false : state.nowx = true;
      },
      OnPut: (state,action: PayloadAction<string>) => {
        state.matrix[Number(action.payload)] = state.nowx ? "x" : "y";
      },
      OnWin: (state,action: PayloadAction<string | any[]>) => {
        if(action.payload === "draw"){
          state.win = "draw";
        }else{
          state.win = state.nowx ? "x": "y";
          if(state.nowx){
            state.scorex++;
          }else{
            state.scorey++;
          }
        }
      },
      OnRestart: (state,action: PayloadAction<any[]>) => {
        return {...initialState, matrix: action.payload, scorex: state.scorex, scorey: state.scorey }
      },
      


  },
})

// Action creators are generated for each case reducer function
export const {FETCH_USERS,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR,SetNewNow,OnPut,OnWin,OnRestart,  } = useReduser.actions

export default useReduser.reducer