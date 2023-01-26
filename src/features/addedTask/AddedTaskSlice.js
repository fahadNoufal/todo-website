import {createSlice} from "@reduxjs/toolkit"

const addTaskSlice=createSlice({
    name:'addedTask',
    initialState:{tasks:[],},
    reducers:{
        addTask:(state,action)=>{
            const taskItem={
                title:action.payload.title,
                description:action.payload.description,
                tags:action.payload.tags,
            } 
            return {...state,tasks:[...state.tasks,taskItem]};
        }
    }
})

export default addTaskSlice.reducer;
export const {addTask} = addTaskSlice.actions;  