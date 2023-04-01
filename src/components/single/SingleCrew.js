import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleCrew = () => {
    const id =  useParams()
    const [singlecap,setsinglecap] = useState(null) 
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const fch = async()=>{
            setLoading(true)
            const data = await fetch(`https://api.spacexdata.com/v4/crew/${id.id}`)
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
                <div className='flex w-full flex-wrap flex-col-reverse md:flex-row py-6 font-semibold text-xl gap-0 justify-center items-center'>
                    <div style={{
                        flex:"1"
                    }} className="flex w-full flex-col  relative gap-10">
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>name</span>
                            <span>{singlecap.name}</span>
                        </p>
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>Agency</span>
                            <span>{singlecap.agency}</span>
                        </p>
                        <p className='flex flex-wrap flex-col lg:flex-row w-full gap-2 sm:px-20 border-b-2 py-4'>
                            <span className='text-blue-500'>Wikipedia &nbsp;&nbsp;</span>
                            <a style={{
                                wordWrap:"break-word",
                                wordBreak:"break-all"
                            }} className='hover:underline cursor-pointer text-sm lg:text-xl break-words text-justify' href={singlecap.wikipedia} target="_blank" rel='noreferrer'>{singlecap.wikipedia}</a>
                        </p>
                        <p className='flex flex-wrap justify-center '>
                            <span className='text-green-600'>{singlecap.status} &nbsp;&nbsp;</span>
                        </p>

                    </div>
                    <div style={{
                        flex:"1"
                    }} className=" flex justify-center items-center w-full">
                        <img className='object-contain md:w-[400px] h-[500px] rounded-lg' src={singlecap.image} alt="crewMember"/>
                    </div>
                </div>
            )
          }
          </div>
  )
}

export default SingleCrew