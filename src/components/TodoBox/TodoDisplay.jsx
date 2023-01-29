import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import TaskItem from "./TaskItem"
import { removeTask } from "../../features/addedTask/AddedTaskSlice";
import { completed } from "../../features/completedTasks/completedTasksSlice";
import { addTasksToSort } from "../../features/sortedTasks/sortedTasksSlice";
import { toggleShowSorted, } from "../../features/showSorted/showSortedSlice.js";

const TodoDisplay = () => {
  const dispatch=useDispatch()
  const allTasks=useSelector((state)=>(state.tasks.tasks))
  const showSorted=useSelector((state)=>(state.showSorted.showSorted))

  function handleTaskCompletion(index){

    dispatch(completed(allTasks[index]))
    dispatch(removeTask(index));

  }

  function handleSort(){
    dispatch(toggleShowSorted())
    dispatch(addTasksToSort(allTasks));
  }

 

  const SortBtn=()=>{
    return(
      <button 
          onClick={handleSort}
          type="toggle" 
          className=" bg-gradient-to-r from-blue-900 to bg-yellow-800 py-2 px-3  rounded-md text-sm">
          Sort by Priority
      </button>
    )
  }

  const EnteredTimeSortBtn=()=>{
    return(
      <button 
          onClick={handleSort}
          type="toggle" 
          className=" bg-gradient-to-r from-blue-900 to bg-yellow-800 py-2 px-3  rounded-md text-sm">
          Go to default
      </button>
    )
  }

  let taskComponents = allTasks.map((task,index)=>{
    return (
      <TaskItem key={index+1} taskCompletedToggle={handleTaskCompletion} itemNo={index+1} message={task.title} discription={task.description} tags={task.tags} />
    )
  })

  return (
    <div className="todo-display w-7/12 py-6 ">
      <div className="todo-display-headder flex gap-14 justify-center items-center">
        <h2 className="">NO</h2>
        <h2 className=" ml-18">TASKS TO COMPLETE</h2>
        {showSorted?<EnteredTimeSortBtn/>:<SortBtn/>}
      </div>
      <div className="tasks py-4 flex flex-col gap-3">
        {taskComponents}
      </div>
    </div>
  );
};

export default TodoDisplay;
