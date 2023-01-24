import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Feature from './Feature/Feature'
import TodoBox from './TodoBox/TodoBox'

const TodoBody = () => {
  return (
    <div className="app-body-container w-full h-screen flex items-center justify-center">
        <div className='todo-screen bg-white flex flex-col p-8 rounded-xl bg-center relative z-0 h-4/5'>
          <div className="background bg-center rounded-lg m-0"></div>
          <Navbar/>
          <Header/>
          <Feature/>
          <TodoBox/>
        </div>
    </div>
  )
}

export default TodoBody