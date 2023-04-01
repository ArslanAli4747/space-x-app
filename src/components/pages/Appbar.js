
import React from 'react'
import { Link } from 'react-router-dom'
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
const Appbar = () => {
  return (
    <div className='sm:w-full sm:flex sm:justify-end sm:items-center hidden py-8 px-5 bg-slate-900'>

    <ul className='flex gap-3 xl:gap-5 font-thin text-md xl:font-semibold xl:text-lg '>
        {
            header.map((d,index)=>(
                <Link key={index} to={d.link}>
                <li  className="hover:text-yellow-500">
                    {d.name}
                </li>
                </Link>
                
            ))
        }
    </ul>

    </div>
  )
}

export default Appbar