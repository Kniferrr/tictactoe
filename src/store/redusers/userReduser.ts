import {UserState} from "../../types/user"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState:UserState  = {
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
        const payload: number = Number(action.payload)
        const x = Math.round((payload- 1) / 3);
        const y = payload % 3;
        state.matrix[x][y] = state.nowx ? "x" : "y";
      },


  },
})

// Action creators are generated for each case reducer function
export const {FETCH_USERS,FETCH_USERS_SUCCESS,FETCH_USERS_ERROR,SetNewNow,OnPut } = useReduser.actions

export default useReduser.reducer