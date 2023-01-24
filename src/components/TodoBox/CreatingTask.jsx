import React from 'react'
import TaskTag from './TaskTag'


const CreatingTask = () => {
  return (
    <div className=' flex flex-col items-center w-5/12 pt-16'>
      <button className=' w-full py-2 px-20 rounded-lg  bg-yellow-700  font-extrabold tracking-widest text-gray-200'>
        CANCEL
      </button>
      <input 
        type="text" 
        placeholder='ENTER THE TASK'
        className='w-full my-4 py-3 rounded-lg bg-gray-200 placeholder:font-bold px-5 text-gray-700 placeholder:text-center outline-none'
      />
      <h3 className=' text-sm font-mono tracking-widest text-gray-200'>SELECT THE REQUIRED TAGS</h3>
      <ul>
        <li><TaskTag tagName="URG" pts={100} selected={true}/></li>
        <li><TaskTag tagName="IMP" pts={50}/></li>
        <li><TaskTag tagName="MUST" pts={30} selected={true}/></li>
        <li><TaskTag tagName="NONE" pts={10}/></li>
      </ul>
      <button className=' w-full mt-4 text-gray-200 font-extrabold tracking-widest py-4 px-20 rounded-lg  from-blue-900 to-yellow-900 bg-gradient-to-tr'>
        ADD TASK
      </button>
    </div>
  )
}

export default CreatingTask