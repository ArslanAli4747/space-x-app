import React,{useState,useEffect} from 'react'
import {  Link } from 'react-router-dom'



const CapCard=({launch})=>{
    const [color,setColor] = useState("")
    const [image,setImage] = useState(null);
    // console.log(rock.flickr_images[0]);
    
    // console.log(launch.links.patch.small);
    useEffect(()=>{
  
        const color = ()=>{
            if (!launch.success){
                return "red"
            }
            else if(launch.success){
                return "green"
            }
            
                    }
       const c =  color()
       
       setColor(c)
    },[launch.success])
   useEffect(()=>{
    setImage(launch.links.patch.small)
   },[launch.links.patch.small])
    return(
    <Link to={`${launch.id}`}>
    <div style={{
        boxShadow:"2px 2px 10px 1px rgba(255,255,255,0.5)",
        
    }} className='flex flex-col w-[250px] bg-slate-900 p-4 rounded-md gap-5 hover:bg-slate-800 cursor-pointer mb-5'>
        <div className='w-full min-h-16'>
        {
          launch.links.patch.small? (
            <img className='rounded-xl w-full object-cover h-60' src={image} alt="luanchimage"/>
          ):(
            <p>loading image...</p>
          )
        }
        </div>
        <p className='flex justify-between w-full'>
            <span> name </span>
            <span>{launch.name}</span>
        </p>
        <p className='flex justify-between w-full'>
            <span> flight_number </span>
            <span>{JSON.stringify(launch.flight_number)}</span>
        </p>
        <p style={{
            color:`${color}`
        }} className='flex justify-center'
       
          >{JSON.stringify(launch.success)}</p>
        
        
    </div>
    </Link>
    )
  }
  





const Launches = () => {
    const [alllaunch,setAllLaunch] = useState([]);
  
    const [loading,setLoading]  = useState(false)
  useEffect(()=>{
     const getAllCaps= async()=>{
      setLoading(true)
          const data = await fetch(`https://api.spacexdata.com/v4/launches`)
          const response = await data.json()
        //  console.log(response);
        setAllLaunch(response)
          setLoading(false)
     } 
     getAllCaps()
  },[])
  return (
    <div className='px-10 xl:px-32'>
    <p className='flex justify-center text-2xl font-bold'>List of All Launches</p>
    <div className='mt-20 w-full caps flex gap-7 flex-wrap justify-around '>
         {
             loading&&(
                 <div className='w-full flex justify-center items-center py-28 font-bold text-xl'>loading....</div>
             )
             
         }
         {
             !loading && alllaunch && (alllaunch.map((launch,index)=>(
                 
                 <CapCard key={index} launch={launch}/>
                // <div></div>
                 ))
                 
                 )
         }
     </div>
 </div>
  )
}

export default Launches