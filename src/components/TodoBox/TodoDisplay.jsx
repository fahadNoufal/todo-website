import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import TaskItem from "./TaskItem"
import { removeTask } from "../../features/addedTask/AddedTaskSlice";
import { completed } from "../../features/completedTasks/completedTasksSlice";

const TodoDisplay = () => {
  const dispatch=useDispatch()
  const allTasks=useSelector((state)=>(state.tasks.tasks))
  function handleTaskCompletion(index){

    dispatch(completed(allTasks[index]))
    dispatch(removeTask(index));

  }

  let taskComponents = allTasks.map((task,index)=>{
    return (
      <TaskItem key={index+1} taskCompletedToggle={handleTaskCompletion} itemNo={index+1} message={task.title} discription={task.description} tags={task.tags} />
    )
  })

  return (
    <div className="todo-display w-7/12 py-6 ">
      <div className="todo-display-headder flex gap-16">
        <h2>NO</h2>
        <h2 className=" ml-18">TASKS TO COMPLETE</h2>
      </div>
      <div className="tasks py-4 flex flex-col gap-3">
        {taskComponents}
      </div>
    </div>
  );
};

export default TodoDisplay;
