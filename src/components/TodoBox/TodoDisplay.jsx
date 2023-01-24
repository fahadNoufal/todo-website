import React from "react";
import TaskItem from "./TaskItem";

const TodoDisplay = () => {
  return (
    <div className="todo-display w-7/12 py-6 ">
      <div className="todo-display-headder flex gap-16">
        <h2>NO</h2>
        <h2 className=" ml-18">TASKS TO COMPLETE</h2>
      </div>
      <div className="tasks py-4 flex flex-col gap-3">
        <TaskItem  itemNo="1" message="Be Successfull and do the work"/>
        <TaskItem  itemNo="2" message="Pray on a daily basis"/>
        <TaskItem  itemNo="3" message="Finish your work on time"/>
        <TaskItem  itemNo="5" message="Call ammi"/>
        <TaskItem  itemNo="6" message="Go gym"/>
        <TaskItem  itemNo="7" message="Do launtry"/>
        <TaskItem  itemNo="8" message="Wash dishes"/>

      </div>
    </div>
  );
};

export default TodoDisplay;
