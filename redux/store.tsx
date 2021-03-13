//redux
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice"

export const store = configureStore({
  reducer:{
        ui: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
