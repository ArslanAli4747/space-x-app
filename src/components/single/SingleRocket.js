import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// const FlickerImage = ({filcker})=>(
   
// )

const SingleRocket = () => {
    const id =  useParams()
    const [singlecap,setsinglecap] = useState(null) 
    const [loading,setLoading] = useState(false)
    const [images,Setimages] = useState(null)
    const [main,setMain] = useState(null);
    useEffect(()=>{
        const fch = async()=>{
            setLoading(true)
            const data = await fetch(`https://api.spacexdata.com/v4/rockets/${id.id}`)
            const res = await data.json()
            // console.log(res.flickr_images);
            setsinglecap(res)
            Setimages(res.flickr_images)
            setMain(res.flickr_images[0])
            
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
                <div className='flex w-full flex-wrap flex-col-reverse md:flex-row py-6 font-semibold text-xl gap-10 '>
                    <div style={{
                        flex:"1"
                    }} className="flex w-full flex-col  relative gap-10">
                          
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>name</span>
                            <span>{singlecap.name}</span>
                        </p>
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>type</span>
                            <span>{singlecap.type}</span>
                        </p>
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>company</span>
                            <span>{singlecap.company}</span>
                        </p>
                        <p className='flex justify-between sm:px-20 flex-wrap border-b-2 py-4'>
                            <span className='text-blue-500'>country</span>
                            <span>{singlecap.country}</span>
                        </p>
                        <p className='flex flex-wrap flex-col lg:flex-row w-full gap-2 sm:px-20 border-b-2 py-4'>
                            <span className='text-blue-500'>Wikipedia &nbsp;&nbsp;</span>
                            <a style={{
                                wordWrap:"break-word",
                                wordBreak:"break-all"
                            }} className='hover:underline cursor-pointer text-sm lg:text-xl break-words text-justify' href={singlecap.wikipedia} target="_blank" rel='noreferrer'>{singlecap.wikipedia}</a>
                        </p>
                        <p className='flex flex-wrap flex-col lg:flex-row w-full gap-2 sm:px-20 py-4'>
                            <span className='text-blue-500'>description &nbsp;&nbsp;</span>
                            <span className='text-md lg:text-xl '>{JSON.stringify(singlecap.description)}</span>
                        </p>
                     

                    </div>
                    <div style={{
                        flex:"1.2"
                    }} className=" flex justify-start items-start w-full flex-col gap-8">
                        <img className='object-contain  rounded-xl' src={main} alt="flickerimagesofrockets"/>
                      <div className='flex justify-around gap-5'>
                      {
                        
                         images && images.map((filcker,index)=>(
                            <div key={index} className='border-2 cursor-pointer' onClick={()=>{
                                setMain(images[index])
                            }}>
                            <img src={filcker} alt="flickerimage"/>
                            </div>
                         ))
                        }
                      </div>
                    </div>
                </div>
            )
          }
          </div>
  )
}

export default SingleRocket