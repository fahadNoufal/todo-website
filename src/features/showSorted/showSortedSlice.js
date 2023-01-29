import {createSlice} from "@reduxjs/toolkit"

const showSortedSlice=createSlice({
    name:'showSorted',
    initialState:{showSorted:true},
    reducers:{
        toggleShowSorted:(state)=>({...state,showSorted:!state.showSorted}),
    }
})

export default showSortedSlice.reducer;
export const {toggleShowSorted}=showSortedSlice.actions ;    