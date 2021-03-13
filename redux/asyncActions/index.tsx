//import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


//fetch something
export const fetchCurrentUser = createAsyncThunk(
  "fetchUser",
  async (exampleArg:string, {rejectWithValue}) => {
    try{
      //make axios request
      return; //response
    }catch(err){
      return ;//rejectWithValue(err.response.data);
    } 
  }
)
// onPending --> action.type = fetchUser/pending
// onSuccess --> action.type = fetchUser/fulfilled
// onFailure --> action.type = fetchUser/rejected