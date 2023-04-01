import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMenuAlt1} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
const header = [
    {
        name:"Capsules",
        link:"/space/capsules"
    },
    {
        name:"Company Info",
        link:"/space/company-info"
    },

    {
        name:"Crew",
        link:"/space/crew"
    },

    {
        name:"Launches",
        link:"/space/launches"
    },
 
    {
        name:"Rockets",
        link:"/space/rocket"
    },
]
const MobileMenu = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className='flex justify-end sm:hidden w-full  py-5 relative'>
        <div className='relative p-2 right-2 menu font-bold text-2xl w-10 h-10 flex justify-center items-center bg-slate-900 rounded-xl hover:bg-white hover:text-slate-900 cursor-pointer border-2'
        onClick={()=>{
            setOpen(!open)
        }}
        >
        {
            !open?(
                <HiMenuAlt1/>
            ):
            (
                <AiOutlineClose/>
            )
        }
        </div>
  {
    open ? (
        <ul
      
         className='flex flex-col px-10 py-5 rounded-lg absolute right-0 top-16  bg-slate-900 gap-3 xl:gap-5 font-thin text-md xl:font-semibold xl:text-lg '>
        {
            header.map((d,index)=>(
                <Link key={index} to={d.link}     onClick={()=>{
                    setOpen(!open)
                }}>
                <li  className="hover:text-yellow-500">
                    {d.name}
                </li>
                </Link>
                
            ))
        }
    </ul>
    ):null
  
  } 
    </div>
  )
}

export default MobileMenu