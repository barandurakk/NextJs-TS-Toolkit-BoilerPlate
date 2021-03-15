import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCurrentUser} from "../asyncActions/index";


//type
export type UserPayload = {
    id: string,
    display_name: string,
}

export type CounterState = {
  count: number
}

export type UserState = {
  user: {
    id: string,
    display_name: string,
  }
}

export type StateType =  CounterState & UserState;

const initialState: StateType = {
  count: 1,
  user:{
    id: "",
    display_name: ""
  }
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
      //normal reducers
      increment: (state: StateType): StateType => {
        return {
          ...state,
          count: state.count + 1,
        }
      },
      decrement: (state: StateType): StateType => {
        return {
          ...state,
          count: state.count - 1,
        }
      },
    }  ,
    extraReducers: {
        //for async actions vs..
        [fetchCurrentUser.pending.toString()]: (state:StateType):StateType => {
            return {
              ...state,
              //loading
            }
          },
        [fetchCurrentUser.fulfilled.toString()]: (state:any, action:PayloadAction<UserPayload>) => {
            state.user = {
                         id: action.payload.id,
                         displayName: action.payload.display_name,
                       };
            state.loading=false;
          },
        [fetchCurrentUser.rejected.toString()]: (state:any, action) => {
            state.loading=false;
            state.authError = action.payload.error;
          },

    }
})

export const {increment, decrement} = userSlice.actions;
export default userSlice;