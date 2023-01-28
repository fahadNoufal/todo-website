import React, { useState, useEffect } from "react";
import CompletedItem from "./CompletedItem";
import NoTaskImg from "../images/no-task-logo.png"
import {useSelector,useDispatch} from "react-redux"
import { addTask } from "../../features/addedTask/AddedTaskSlice";
import { undoComplete } from "../../features/completedTasks/completedTasksSlice";
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
      {/*<h1 className=" font-mono text-2xl font-extrabold py-4 ">{time.toLocaleTimeString()}</h1>*/}      <ul className=" completed-task-list w-full flex flex-col items-center gap-1 h-80">
        {finishedTasks.length===0 && <DisplayNoTasks/>}
        <h2 className="font-bold text-md tracking-widest opacity-70 text-center my-2 ">COMPLETED TASKS</h2>

        {finishedTasks.map((task,index)=>(<CompletedItem message={task.title} key={index} index={index} undoComplete={handleUndoComplete} />))}
      
        </ul>
      <button 
        onClick={()=>{dispatch(toggleDisplayCreate())}}
        className=" w-60 rounded-xl bg-blue-500 text-white my-5 py-3">  
        Add Task
      </button>
      
      <button className=" w-36 mt-2 rounded-sm text-xs font-serif bg-red-900 p-2">DELETE ALL TASKS</button>
    </div>
  );
};

export default NoteCreater;

// const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);