import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface Cuisine{
    cuisine:string,
    diet:string
}
const initialState: Cuisine = {
    cuisine: '',
    diet:''
}
export const recepiSlice = createSlice({
    name:'cuisine',
    initialState,
    reducers:{
        addCusine:(state,action:PayloadAction<any>)=>{
            state.cuisine = action.payload
        },
        addDiet:(state,action:PayloadAction<any>)=>{
            state.diet = action.payload
        }
    }
})
export const {addCusine,addDiet} = recepiSlice.actions;
export default recepiSlice.reducer