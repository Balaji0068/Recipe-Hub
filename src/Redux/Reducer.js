import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
    name:"recipes",
    initialState:{
       list:[]
    },
    reducers:{
       setRecipe(state,action){
        console.log(action);
       state.list=action.payload;
       }
    }

});
export const {setRecipe}= RecipeSlice.actions;
export default RecipeSlice.reducer;