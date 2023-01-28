import React, { useState } from 'react'
import TaskTag from './TaskTag'
import {useDispatch,useSelector} from "react-redux"
import {  addTask } from '../../features/addedTask/AddedTaskSlice';
import { toggleDisplayCreate } from '../../features/displaycreate/displayCreate';


const CreatingTask = () => {

  const dispatch=useDispatch();
  const tasks=useSelector((state)=>(state.tasks.tasks));

  let [taskTitle,setTaskTitle]=useState("")
  let [tags,setTags]= useState([false,false,false,true])
  let [description,setDescription]=useState("")

  function handleTagSelect(index){
    
    setTags((prev)=>{
      let allTags=[...prev];
      allTags[index]=!allTags[index];
      return allTags
    })
  }

  const handleSubmit =()=>{
    const points=0
    const tagNames=[]
    if (tags[0]){
      tagNames.push('URG');
      points+=100
    }
    if (tags[0]){
      tagNames.push('URG');
      points+=50
    }
    if (tags[0]){
      tagNames.push('URG');
      points+=10
    }

    dispatch(addTask({title:taskTitle,description:description,tags:tagNames,points:points}))
    dispatch(toggleDisplayCreate())
    setTaskTitle('')
    setDescription('')
    setTags([false,false,false,true])
  }




  return (
    <div className=' flex flex-col items-center w-5/12 pt-16'>
      <button 
        onClick={()=>{dispatch(toggleDisplayCreate())}}
        className=' w-full py-2 px-20 rounded-lg  bg-yellow-700  font-extrabold tracking-widest text-gray-200 outline-none hover:bg-yellow-800 transition-all'>
        
        CANCEL
      </button>
      <input 
        type="text" 
        value={taskTitle}
        onChange={(e)=>setTaskTitle(e.target.value)}
        placeholder='ENTER THE TASK'

        className='w-full my-3 py-3 rounded-lg bg-gray-200 placeholder:font-bold px-5 text-gray-700 placeholder:text-center outline-none'
      />
      <input type="text"
        onChange={(e)=>{setDescription(e.target.value)}}
        value={description}
        placeholder='ENTER DESCRIPTION'
        className=' outline-none placeholder:text-sm placeholder:font-bold placeholder:text-gray-400 placeholder:tracking-widest text-center text-gray-400 tracking-wider font-semibold p-2 w-full rounded-lg'
      />
      <h3 className=' text-sm font-mono tracking-widest text-gray-200 cursor-default mt-3 '>
        SELECT THE REQUIRED TAGS
      </h3>
      <ul>
        <li><TaskTag tagName="URG" index={0} pts={100} selected={tags[0]} toggle={handleTagSelect}/></li>
        <li><TaskTag tagName="IMP" index={1} pts={50} selected={tags[1]} toggle={handleTagSelect} /></li>
        <li><TaskTag tagName="MUST" index={2} pts={10} selected={tags[2]} toggle={handleTagSelect}/></li>
        <li><TaskTag tagName="NONE" index={3} pts={0} selected={tags[3]} toggle={handleTagSelect} /></li>
      </ul>
      <button 
        onClick={handleSubmit}
        className=' w-full mt-3 text-gray-200 font-extrabold tracking-widest py-4 px-20 rounded-lg  from-blue-900 to-yellow-900 bg-gradient-to-tr hover:text-lg transition-all ease-in-out'>
        ADD TASK
      </button>
    </div>
  )
}

export default CreatingTask