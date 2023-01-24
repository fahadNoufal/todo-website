import React, { useState, useEffect } from "react";
import CompletedItem from "./CompletedItem";
import NoTaskImg from "../images/no-task-logo.png"

const NoteCreater = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center w-5/12 bg-gray-">
      <h1 className=" font-mono text-2xl font-extrabold py-4 ">{time.toLocaleTimeString()}</h1>
      <ul className=" completed-task-list w-full flex flex-col items-center gap-1 h-80">
        <DisplayNoTasks/>
      </ul>
      <button className=" w-60 rounded-xl bg-blue-500 text-white my-5 py-3">Add Task</button>
      <button className=" w-36 mt-2 rounded-sm text-xs font-serif bg-red-900 p-2">DELETE ALL TASKS</button>
    </div>
  );
};

const DisplayNoTasks = ()=>{
  return(
    <div className="not-completed-tasks font-black tracking-wider w-full h-full flex flex-col justify-center items-center text-xl">
      <img src={NoTaskImg} alt="" />
      No Tasks Completed
    </div>
  )

}

export default NoteCreater;
// <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />
//         <CompletedItem message="task completed" />