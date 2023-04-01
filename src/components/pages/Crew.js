import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'




const CapCard=({crew})=>{
  const [color,setColor] = useState("")
  const [image,setImage] = useState(null);
  
  // console.log(cap);
  useEffect(()=>{

      const color = ()=>{
          if (crew.status==="retired"){
              return "orange"
          }
          else if(crew.status==="active"){
              return "green"
          }
          else if(crew.status==="destroyed"){
              return "red"
          }
                  }
     const c =  color()
     setImage(crew.image)
     setColor(c)
  },[crew.status,crew.image])
 
  return(
  <Link to={`${crew.id}`}>
  <div style={{
      boxShadow:"2px 2px 10px 1px rgba(255,255,255,0.5)",
      
  }} className='flex flex-col w-[250px] bg-slate-900 p-4 rounded-md gap-5 hover:bg-slate-800 cursor-pointer mb-5'>
      <div className='w-full min-h-16'>
      {
        crew.image ? (
          <img className='rounded-xl w-full object-cover h-60' src={image} alt="crewimage"/>
        ):(
          <p>loading image...</p>
        )
      }
      </div>
      <p className='flex justify-between w-full'>
          <span> name </span>
          <span>{crew.name}</span>
      </p>
      <p className='flex justify-between w-full'>
          <span> agency </span>
          <span>{crew.agency}</span>
      </p>
      <p className='flex justify-center'
        style={{
            color:`${color}`
        }}
        >{crew.status}</p>
      
      
  </div>
  </Link>
  )
}








const Crew = () => {
  const [allcrew,setAllCrew] = useState([]);
  
  const [loading,setLoading]  = useState(false)
useEffect(()=>{
   const getAllCaps= async()=>{
    setLoading(true)
        const data = await fetch(`https://api.spacexdata.com/v4/crew`)
        const response = await data.json()
        // console.log(response);
        setAllCrew(response)
        setLoading(false)
   } 
   getAllCaps()
},[])
  return (
    <div className='px-10 xl:px-32'>
       <p className='flex justify-center text-2xl font-bold'>List of All Crew</p>
       <div className='mt-20 w-full caps flex gap-7 flex-wrap justify-around '>
            {
                loading&&(
                    <div className='w-full flex justify-center items-center py-28 font-bold text-xl'>loading....</div>
                )
                
            }
            {
                !loading && allcrew && (allcrew.map((crew,index)=>(
                    
                    <CapCard key={index} crew={crew}/>
                    ))
                    
                    )
            }
        </div>
    </div>
  )
}

export default Crew