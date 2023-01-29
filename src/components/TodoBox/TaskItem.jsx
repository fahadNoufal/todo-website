import React from "react";

const TaskItem = (props) => {
  
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const randomId=generateId();
  
  return (
    <div className="todo-list flex justify-between items-center gap-16">
      <div className=" item-no text-3xl">{props.itemNo}</div>

      <div className="task-details flex p-3 rounded-md w-full justify-between items-center ">
        <div className=" flex w-full  mr-2">
          <input 
            id={randomId} 
            type={"radio"} 
            onClick={()=>{
              setTimeout(() => {
                document.getElementById(randomId).checked = false;
                props.taskCompletedToggle(props.itemNo-1)

            }, 300)
            }}  
            
            className="task-checkbox"/>
          
          <label
            htmlFor={randomId}
            className=" flex justify-between items-center"
          >
            <div className="tast-text text-sm pl-3 flex flex-col justify-between">
              <h3 className=" text-xl font-extrabold ">{props.message}</h3>
              <p className=" text-xs opacity-75 font-serif">{props.discription}</p>
            </div>
          </label>
        </div>

        <div className="keywords text-xs flex justify-between w-6 text-right font-thin">
          <ul>
            {props.tags.map((tag)=>(<li key={tag}>{tag}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;