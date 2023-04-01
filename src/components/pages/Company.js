import React,{useState,useEffect} from 'react'


const Company = () => {
    const [cinfo,setCinfo] = useState([]);
  
    const [loading,setLoading]  = useState(false)
  useEffect(()=>{
     const getAllCaps= async()=>{
      setLoading(true)
          const data = await fetch(`https://api.spacexdata.com/v4/company`)
          const response = await data.json()
          // console.log(response);
          setCinfo(response)
          setLoading(false)
     } 
     getAllCaps()
  },[])
  return (
    <div className='px-10 xl:px-32'>
       <p className='flex justify-center text-2xl font-bold'>Company Info</p>
       <div className='mt-20 w-full caps flex gap-7 flex-wrap justify-around '>
       {
                loading&&(
                    <div className='w-full flex justify-center items-center py-28 font-bold text-xl'>loading....</div>
                )
                
            }
            {
                cinfo &&(

                    <div className='flex flex-col gap-3 sm:px-10 lg:px-36 text-lg'>
                        <p className='flex justify-between '>
                            <span className='text-blue-400'>Name</span>
                            <span >{cinfo.name}</span>
                        </p> <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div>
                        <p className='flex justify-between'>
                            <span className='text-blue-400'>Founder</span>
                            <span>{cinfo.founder}</span>
                        </p>
                        <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div> 
                        <p className='flex justify-between'>
                            <span className='text-blue-400'>Founded</span>
                            <span>{cinfo.founded}</span>
                        </p>
                        <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div>
                        <p className='flex justify-between'>
                            <span className='text-blue-400'>Employees</span>
                            <span>{cinfo.employees}</span>
                        </p>
                        <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div>
                        <p className='flex justify-between'>
                            <span className='text-blue-400'>ceo</span>
                            <span>{cinfo.ceo}</span>
                        </p>
                        <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div>
                        <p className='flex justify-between'>
                            <span className='text-blue-400'>coo</span>
                            <span >{cinfo.coo}</span>
                        </p>
                        <div className='flex justify-center'>
                        <hr className='w-full'/>
                        
                        </div>
                        <p className='flex justify-between'>
                            {cinfo.summary}
                        </p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Company