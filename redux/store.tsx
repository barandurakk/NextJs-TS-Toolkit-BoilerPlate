//redux
import {configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice"
import {Env} from "../constants/Env";

const middlewares = [...getDefaultMiddleware()]

export const store = configureStore({
  reducer:{
        user: userSlice.reducer
  },
  middleware: middlewares,
  devTools: Env.NODE_ENV === "development"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
