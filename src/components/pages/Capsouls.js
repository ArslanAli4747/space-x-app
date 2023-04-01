import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CapCard=({cap})=>{
    const [color,setColor] = useState("")
    // console.log(cap);
    useEffect(()=>{

        const color = ()=>{
            if (cap.status==="retired"){
                return "orange"
            }
            else if(cap.status==="active"){
                return "green"
            }
            else if(cap.status==="destroyed"){
                return "red"
            }
                    }
       const c =  color()
       setColor(c)
    },[cap.status])
   
    return(
    <Link to={`${cap.id}`}>
    <div style={{
        boxShadow:"2px 2px 10px 1px rgba(255,255,255,0.5)",
        
    }} className='flex flex-col w-[250px] bg-slate-900 p-4 rounded-md gap-5 hover:bg-slate-700 cursor-pointer mb-5'>
        <p className='flex justify-center'
        style={{
            color:`${color}`
        }}
        >{cap.status}</p>
        <p className='flex justify-between w-full'>
            <span>Type  </span>
            <span>{cap.type}</span>
        </p>
        <p className='flex justify-between w-full'>
            <span>Serial  </span>
            <span>{cap.serial}</span>
        </p>
        <p className='flex justify-between w-full'>
            <span> land landings </span>
            <span>{cap.land_landings}</span>
        </p>
        <p className='flex justify-between w-full'>
            <span> water landings </span>
            <span>{cap.water_landings}</span>
        </p>
        <p className='flex w-full'>
            <span> <b className='font-semibold text-blue-600'>last update</b> : {cap.last_update}</span>
        </p>
    </div>
    </Link>
    )
}

const Capsouls = () => {
const [allcaps,setAllCaps] = useState([]);
const [loading,setLoading]  = useState(false)
useEffect(()=>{
   const getAllCaps= async()=>{
    setLoading(true)
        const data = await fetch(`https://api.spacexdata.com/v4/capsules`)
        const response = await data.json()
        // console.log(response);
        setAllCaps(response)
        setLoading(false)
   } 
   getAllCaps()
},[])

  return (
    <div className='px-10 xl:px-32' >
        <p className='flex justify-center text-2xl font-bold'>List of All Capsouls</p>
        <div className='mt-20 w-full caps flex gap-7 flex-wrap justify-around '>
            {
                loading&&(
                    <div className='w-full flex justify-center items-center py-28 font-bold text-xl'>loading....</div>
                )
                
            }
            {
                !loading && allcaps && (allcaps.map((cap,index)=>(
                    
                    <CapCard key={index} cap={cap}/>
                    ))
                    
                    )
            }
        </div>
    </div>
  )
}

export default Capsouls