import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { toggleShowSorted } from '../../features/showSorted/showSortedSlice'
import  { toggleDisplayCreate } from "../../features/displaycreate/displayCreate";

const SortedTasks = () => {
  const dispatch=useDispatch()
  const sortedTasks=useSelector((state)=>(state.sortedTasks.sortedTasks))
  const sortedTasksList=sortedTasks.map((task,index)=>{
    return(
      <div className=' w-full bg-yellow-800 p-4 relative rounded-lg uppercase font-bold text-gray-300 text-opacity-80' key={index}>
        {task.title}
        <div className=' absolute top-0.5 right-0 text-xs flex gap-4 justify-center font-thin w-full'>{task.tags.map(tag=>(<div key={tag}>{tag}</div>))}</div>
      </div>
    )
  })
  function handleAddTask(){
    dispatch(toggleDisplayCreate())
    dispatch(toggleShowSorted())
  }

  return (
    <div className=' bg-gray-500 sorted-tasks-container relative  flex flex-col p-4 w-5/12 my-7 rounded-2xl overflow-scroll gap-2 text-center'>
      <h1 className=' text-gray-800 font-black tracking-widest text-center mb-4'>SORTED BY PRIORITY</h1>
     
      {sortedTasksList}
      {sortedTasks.length===0 &&
        <h1 className=' font-serif font-bold text-xl my-32 text-blue-100 '>
          NO TASKS TO COMPLETE  
        </h1>
      }
      <button 
        onClick={handleAddTask}
        className=' w-44 absolute bottom-6 right-16 text-gray-200 font-extrabold text-sm tracking-wide py-3 px-2 rounded-lg  from-blue-900 to-yellow-900 bg-gradient-to-tr hover:text-lg transition-all ease-in-out'>
        ADD TASK
      </button>
    </div>
  )
}

export default SortedTasks