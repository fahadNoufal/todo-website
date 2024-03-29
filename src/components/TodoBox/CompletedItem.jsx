import React from "react";

const CompletedItem = (props) => {
  return (
    <div className="completed-task flex px-3 py-2 rounded-xl w-2/3 justify-between items-center ">
        <div className="tast-text text-sm flex gap-3 items-center">
          <button 
            className="add-back text-white bg-yellow-700 h-7 w-7 rounded-lg"
            id="add-back-btn"
            onClick={()=>(props.undoComplete(props.index))}
          >
            {"<"}
          </button>
          <div id={"add-back-btn"+props.message} className=" text-lg font-extrabold line-through text-white opacity-60">
            {props.message}
          </div>
        </div>
    </div>
  );
};

export default CompletedItem;
