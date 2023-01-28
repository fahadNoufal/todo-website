import React from 'react'
import TodoCreate from "./TodoCreate"
import TodoDisplay from "./TodoDisplay"
import CreatingTask from "./CreatingTask"
import {useSelector} from "react-redux"


const TodoBox = () => {

  let displayCreate = useSelector((state)=>(state.displayCreate.displayCreate));

  return (
    <div className="todo-main flex flex-row  gap-5 h-full overflow-hidden">
        <TodoDisplay/>
        {displayCreate?<CreatingTask/>:<TodoCreate/>}
    </div>
  )
}

export default TodoBox