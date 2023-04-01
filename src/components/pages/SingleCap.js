import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/singlecap.css"
const SingleCap = () => {
    const id =  useParams()
    const [singlecap,setsinglecap] = useState(null) 
    const [loading,setLoading] = useState(false)
    // const [color,setColor] = useState("")
//   console.log(id);
  useEffect(()=>{
    const fch = async()=>{
        setLoading(true)
        const data = await fetch(`https://api.spacexdata.com/v4/capsules/${id.id}`)
        const res = await data.json()
        // console.log(res);
        setsinglecap(res)
        setLoading(false)
    }
    fch()
   
  },[id.id])

  return (
    <div className='flex  w-full px-10 xl:px-32'>{
        loading?(<div className='loader flex absolute'>
            loading...
        </div>):null
          }
          {
            singlecap&& (
                <div className='flex w-full justify-start py-6 items-center px-10 sm:px-48 font-semibold text-xl flex-col gap-10 '>
                     <p className='flex justify-center border-b-2'
        // style={{
        //     color:`${color}`
        // }}
        >{singlecap.status}</p>

<p className='flex gap-4 flex-col sm:flex-row justify-between w-full border-b-2 py-2'>
            <span>Type  </span>
            <span>{singlecap.type}</span>
        </p>
        <p className='flex flex-col gap-4 border-b-2 py-2 sm:flex-row justify-between w-full'>
            <span>Serial  </span>
            <span>{singlecap.serial}</span>
        </p>
        <p className='flex flex-col border-b-2 py-2 gap-4 sm:flex-row justify-between w-full'>
            <span> land landings </span>
            <span>{singlecap.land_landings}</span>
        </p>
        <p className='flex flex-col border-b-2 py-2 gap-4 sm:flex-row justify-between w-full'>
            <span> water landings </span>
            <span>{singlecap.water_landings}</span>
        </p>
        <p className='flex w-full'>
            <span> <b className='font-semibold text-blue-600'>last update</b> : {singlecap.last_update}</span>
        </p>
                </div>
            )
          }
          </div>
  )
}

export default SingleCap