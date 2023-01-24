import React from 'react'
import TodoCreate from "./TodoCreate"
import TodoDisplay from "./TodoDisplay"


const TodoBox = () => {
  return (
    <div className="todo-main flex flex-row  gap-5 h-full overflow-hidden">
        <TodoDisplay/>
        <TodoCreate/>
    </div>
  )
}

export default TodoBox