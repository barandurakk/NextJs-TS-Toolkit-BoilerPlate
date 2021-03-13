import {createSlice} from "@reduxjs/toolkit";
import {fetchCurrentUser} from "../asyncActions/index";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {loading:false},
    reducers: {
      //normal reducers
        userLoading(state, action){
            state.loading = true;
        }
    }  ,
    extraReducers: {
        //for async actions vs..
        [fetchCurrentUser.pending.toString()]: (state:any) => {
            state.loading=true;
          },
        [fetchCurrentUser.fulfilled.toString()]: (state:any, action) => {
            state.user = {
                         id: action.payload.id,
                         displayName: action.payload.display_name,
                         images: action.payload.images,
                         followers: action.payload.followers.total,
                         profileLink: action.payload.href,
                       };
            state.loading=false;
          },
        [fetchCurrentUser.rejected.toString()]: (state:any, action) => {
            state.loading=false;
            state.authError = action.payload.error;
          },

    }
})

export const {userLoading} = userSlice.actions;
export default userSlice;