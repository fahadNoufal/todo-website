import React from "react";
import CompletedItem from "./CompletedItem";
import NoTaskImg from "../images/no-task-logo.png"
import {useSelector,useDispatch} from "react-redux"
import { addTask } from "../../features/addedTask/AddedTaskSlice";
import { undoComplete ,resetCompleted} from "../../features/completedTasks/completedTasksSlice";
import { toggleDisplayCreate } from "../../features/displaycreate/displayCreate";

const NoteCreater = () => {
  const finishedTasks=useSelector((state)=>(state.completedTasks.tasks))
  const dispatch=useDispatch();
  
  function handleUndoComplete(index){
    const undoTask=finishedTasks[index];
    dispatch(undoComplete(index));
    dispatch(addTask(undoTask))
  }

  const DisplayNoTasks = ()=>{
  return(
    <div className="not-completed-tasks font-black tracking-wider w-full h-full flex flex-col justify-center items-center text-xl">
      <img src={NoTaskImg} alt="" />
      No Tasks Completed
    </div>
    )
  }

  return (
    <div className=" flex flex-col items-center w-5/12 ">
      <ul className=" completed-task-list w-full flex flex-col items-center gap-1 h-80">
        {finishedTasks.length===0 && <DisplayNoTasks/>}
        <h2 className="font-bold text-md tracking-widest opacity-70 text-center my-2 ">COMPLETED TASKS</h2>

        {finishedTasks.map((task,index)=>(<CompletedItem message={task.title} key={index} index={index} undoComplete={handleUndoComplete} />))}
      
      </ul>
      <button 
        onClick={()=>{dispatch(toggleDisplayCreate())}}
        className=" w-60 rounded-xl bg-blue-500 text-white my-5 py-3">  
        Add Task
      </button>
      
      <button 
        className=" text-opacity-75 text-gray-200 font-semibold mt-2 rounded-md text-xs font-serif bg-red-900  p-3"
        onClick={()=>{dispatch(resetCompleted())}}
        >
        DELETE COMPLETED TASKS
      </button>
    </div>
  );
};

export default NoteCreater;

