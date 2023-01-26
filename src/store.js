import {configureStore} from "@reduxjs/toolkit"
import addedTaskReducer from "./features/addedTask/AddedTaskSlice"

const store=configureStore({
    reducer:{
        tasks:addedTaskReducer,
    },
})

export default store;   