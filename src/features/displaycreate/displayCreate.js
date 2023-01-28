import {createSlice} from "@reduxjs/toolkit"

const displayCreateSlice=createSlice({
    name:'createSlice',
    initialState:{displayCreate:false},
    reducers:{
        toggleDisplayCreate:(state)=>({...state,displayCreate:!state.displayCreate}),

    }
})

export default displayCreateSlice.reducer;
export const {toggleDisplayCreate}=displayCreateSlice.actions;