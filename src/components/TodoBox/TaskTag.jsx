import React from 'react'


const TaskTag = (props) => {
  
  let style='flex gap-5 my-2 bg-white py-3 w-full px-6 rounded-lg  cursor-pointer  transition-all ease-in-out duration-500 hover:bg-gray-200 ';
  let addedStyle=(props.selected)?" from-green-900 to-blue-900 bg-gradient-to-br ":" text-gray-700 ";
  
  return (
    <button className={(style+addedStyle)} onClick={()=>{props.toggle(props.index)}}>
        <h1 className=' w-1/5   '>{props.tagName}</h1>
        <div className="line w-28 h-px mt-3 bg-yellow-700"></div>
        <div className="points w-1/5 text-end">-{props.pts}-</div>
    </button>
  )
}

export default TaskTag