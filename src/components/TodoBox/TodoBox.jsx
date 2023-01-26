import React from 'react'
import TodoCreate from "./TodoCreate"
import TodoDisplay from "./TodoDisplay"
import CreatingTask from "./CreatingTask"


const TodoBox = () => {
  return (
    <div className="todo-main flex flex-row  gap-5 h-full overflow-hidden">
        <TodoDisplay/>
        <TodoCreate/> 
      {/*<CreatingTask/>*/}
    </div>
  )
}

export default TodoBox