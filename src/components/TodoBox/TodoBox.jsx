import React from 'react'
import TodoCreate from "./TodoCreate"
import TodoDisplay from "./TodoDisplay"
import CreatingTask from "./CreatingTask"
import SortedTasks from './SortedTasks'
import {useSelector} from "react-redux"



const TodoBox = () => {

  const displayCreate = useSelector((state)=>(state.displayCreate.displayCreate));
  const showSorted=useSelector((state)=>(state.showSorted.showSorted))

  return (
    <div className="todo-main flex flex-row  gap-5 h-full overflow-hidden">
        <TodoDisplay/>
        {showSorted?<SortedTasks/>:(displayCreate?<CreatingTask/>:<TodoCreate/>)}
        
    </div>
  )
}

export default TodoBox