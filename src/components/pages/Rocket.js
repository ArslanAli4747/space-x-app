import React,{useState,useEffect} from 'react'
import {  Link } from 'react-router-dom'

const CapCard=({rock})=>{
    const [color,setColor] = useState("")
    const [image,setImage] = useState(null);
    // console.log(rock.flickr_images[0]);
    
    // console.log(cap);
    useEffect(()=>{
  
        const color = ()=>{
            if (rock.active===false){
                return "red"
            }
            else if(rock.active===true){
                return "green"
            }
            
                    }
       const c =  color()
       
       setColor(c)
    },[rock.active])
   useEffect(()=>{
    setImage(rock.flickr_images[0])
   },[rock.flickr_images])
    return(
    <Link to={`${rock.id}`}>
    <div style={{
        boxShadow:"2px 2px 10px 1px rgba(255,255,255,0.5)",
        
    }} className='flex flex-col w-[250px] bg-slate-900 p-4 rounded-md gap-5 hover:bg-slate-800 cursor-pointer mb-5'>
        <div className='w-full min-h-16'>
        {
          rock.flickr_images[0] ? (
            <img className='rounded-xl w-full object-cover h-60' src={image} alt="rocketImage"/>
          ):(
            <p>loading image...</p>
          )
        }
        </div>
        <p className='flex justify-between w-full'>
            <span> name </span>
            <span>{rock.name}</span>
        </p>
        <p className='flex justify-between w-full'>
            <span> type </span>
            <span>{rock.type}</span>
        </p>
        <p style={{
            color:`${color}`
        }} className='flex justify-center'
       
          >{JSON.stringify(rock.active)}</p>
        
        
    </div>
    </Link>
    )
  }
  
const Rocket = () => {
    const [allrocket,setAllRocket] = useState([]);
  
    const [loading,setLoading]  = useState(false)
  useEffect(()=>{
     const getAllCaps= async()=>{
      setLoading(true)
          const data = await fetch(`https://api.spacexdata.com/v4/rockets`)
          const response = await data.json()
        //   console.log(response);
          setAllRocket(response)
          setLoading(false)
     } 
     getAllCaps()
  },[])
  return (
    <div className='px-10 xl:px-32'>
    <p className='flex justify-center text-2xl font-bold'>List of All Rockets</p>
    <div className='mt-20 w-full caps flex gap-7 flex-wrap justify-around '>
         {
             loading&&(
                 <div className='w-full flex justify-center items-center py-28 font-bold text-xl'>loading....</div>
             )
             
         }
         {
             !loading && allrocket && (allrocket.map((rock,index)=>(
                 
                 <CapCard key={index} rock={rock}/>
                 ))
                 
                 )
         }
     </div>
 </div>
  )
}

export default Rocket