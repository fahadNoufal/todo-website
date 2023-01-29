import React,{useEffect,useState} from 'react'
import logo from "../images/todo-app-logo.jpg"

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='navbar w-full h-14 flex items-center justify-between relative'>
        <div className='app-logo flex'>
          <img src={logo} alt='App logo' className=' aspect-square w-12 rounded-xl'/>
          <div className='App title text-4xl font-bold px-8 mt-1'>
            Todo
          </div>
          <h1 className="  text-md text-center font-extrabold bg-black font-mono w-44  tracking-widest px-8 -top-8 py-1 right-64 mr-2 absolute rounded-b-3xl ">{time.toLocaleTimeString()}</h1>
        </div>
        
        <div className='w-1/3'>
            <ul className=' flex justify-between'>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">T</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">A</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">S</li>
                <li className="itm rounded-full h-10 aspect-square text-center pt-2 bg-black">K</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar