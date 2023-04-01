import React from 'react'
import "../styles/home.css"
import rocket from "../../assests/rocket.png"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate = useNavigate()
  return (
    <div
     className='home flex justify-center items-center w-full flex-col h-screen relative'>
        
        <h1 className='font-bold font-mono flex justify-center items-center'><span className='text-4xl'>Space-</span ><span className='text-6xl'> X</span></h1>
        <img className='rocket w-44 h-44 mt-52 z-0' src={rocket} alt="rocket"/>
        <button onClick={()=>{
           navigate("/space/capsules")
        }} className='button border-2 border-white rounded-xl absolute bottom-24 z-10'>Get Started
        <span></span>
        </button>
    </div>
  )
}

export default Home