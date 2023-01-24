import React from 'react'

const TaskTag = (props) => {
  
  let style='flex gap-5 my-4 bg-white py-3 px-5 rounded-lg '+((props.selected)?"from-green-900 to-blue-900 bg-gradient-to-br":"");
  
  return (
    <div className={style}>
        <h1 className=' w-1/5'>{props.tagName}</h1>
        <div className="line w-28 h-px mt-3 bg-yellow-700"></div>
        <div className="points w-1/5 text-end">-{props.pts}-</div>
    </div>
  )
}

export default TaskTag