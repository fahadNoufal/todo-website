import {configureStore} from "@reduxjs/toolkit"
import addedTaskReducer from "./features/addedTask/AddedTaskSlice"
import completedTasksReducer from "./features/completedTasks/completedTasksSlice";
import displayCreateReducer from "./features/displaycreate/displayCreate";
import sortedTasksReducer from "./features/sortedTasks/sortedTasksSlice";
import showSortedReducer from "./features/showSorted/showSortedSlice.js";

const store=configureStore({
    reducer:{
        tasks:addedTaskReducer,
        completedTasks:completedTasksReducer,
        displayCreate:displayCreateReducer,
        sortedTasks:sortedTasksReducer,
        showSorted:showSortedReducer,
    },
})

export default store;   