import React from "react";

const TaskItem = (props) => {
  return (
    <div className="todo-list flex justify-between items-center gap-16">
      <div className=" item-no text-3xl">{props.itemNo}</div>

      <div className="task-details flex p-3 rounded-md w-full justify-between items-center ">
        <div className=" flex w-full  mr-2">
          <input id={props.itemNo} type={"checkbox"}  className="task-checkbox"/>
          <label
            htmlFor={props.itemNo}
            className=" flex justify-between items-center"
          >
            <div className="tast-text text-sm pl-3 flex flex-col justify-between">
              <h3 className=" text-xl font-extrabold ">{props.message}</h3>
              <p className=" text-xs opacity-75 font-serif">This is the discription of the task</p>
            </div>
          </label>
        </div>

        <div className="keywords text-xs flex justify-between w-6 text-right font-thin">
          <ul>
            <li>IMP</li>
            <li>DO THIS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
