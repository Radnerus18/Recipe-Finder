import { configureStore } from "@reduxjs/toolkit";
import recepiReducer from "./features/recepi.ts";

export const store = configureStore({
    reducer:{
        recepi:recepiReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch