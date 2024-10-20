import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from "./Reducer"
export const store = configureStore({
    reducer:{
        recipes:RecipeReducer,
    }
})