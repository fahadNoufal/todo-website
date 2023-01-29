import {createSlice} from "@reduxjs/toolkit"

const sortedTaskSlice=createSlice({
    name:"sortedTask",
    initialState:{sortedTasks:[]},
    reducers:{
        addTasksToSort:(state,{payload})=>{
            let taskList=[...payload];
            taskList.sort((a, b) => b.points - a.points)
            return {...state,sortedTasks:taskList}
        },
       

    }
})

export default sortedTaskSlice.reducer
export const {addTasksToSort,sortAddedTask}=sortedTaskSlice.actions