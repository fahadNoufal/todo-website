import {createSlice} from "@reduxjs/toolkit"

const completedTaskSlice= createSlice({
    name:"completedTask",
    initialState:{tasks:[]},
    reducers:{
        completed:(state,action)=>{
            const completedTask={
                title:action.payload.title,
                description:action.payload.description,
                tags:action.payload.tags,
                points:action.payload.points,
            } 
            return {...state,tasks:[...state.tasks,completedTask]}
        },
        undoComplete:(state,action)=>{
            const removedList= state.tasks.filter(itm=>(!(itm===state.tasks[action.payload])))
            return {...state,tasks:removedList}
        },
        resetCompleted:(state)=>{
            return {...state,tasks:[]}
        }
    }

})

export default completedTaskSlice.reducer;
export const {completed,undoComplete,resetCompleted} =completedTaskSlice.actions;