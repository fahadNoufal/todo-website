import {configureStore} from "@reduxjs/toolkit"
import addedTaskReducer from "./features/addedTask/AddedTaskSlice"
import completedTasksReducer from "./features/completedTasks/completedTasksSlice";
import displayCreateReducer from "./features/displaycreate/displayCreate";

const store=configureStore({
    reducer:{
        tasks:addedTaskReducer,
        completedTasks:completedTasksReducer,
        displayCreate:displayCreateReducer,
    },
})

export default store;   