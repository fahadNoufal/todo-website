import React from 'react'
import logo from "../images/todo-app-logo.jpg"

const Navbar = () => {
  return (
    <div className='navbar w-full h-14 flex items-center justify-between'>
        <div className='app-logo flex'>
          <img src={logo} alt='App logo' className=' aspect-square w-12 rounded-xl'/>
          <div className='App title text-4xl font-bold px-8 mt-1'>
            Todo
          </div>
        </div>
        
        <div className='w-1/3'>
            <ul className=' flex justify-between'>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">1</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">2</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">3</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">4</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar