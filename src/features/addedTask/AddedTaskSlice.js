import {createSlice} from "@reduxjs/toolkit"

const addTaskSlice=createSlice({
    name:'addedTask',
    initialState:{tasks:[{title:"Add some tasks",description:"Your first task is to add some task",tags:["IMP","MUST"],points:60}],},
    reducers:{
        addTask:(state,action)=>{
            const taskItem={
                title:action.payload.title,
                description:action.payload.description,
                tags:action.payload.tags,
                points:action.payload.points,
            } 
            return {...state,tasks:[...state.tasks,taskItem]};
        },
        removeTask:(state,action)=>{
            const removedList= state.tasks.filter(itm=>(!(itm===state.tasks[action.payload])))
            return {...state,tasks:removedList}
        }
    }
})

export default addTaskSlice.reducer;
export const {addTask,removeTask} = addTaskSlice.actions;  