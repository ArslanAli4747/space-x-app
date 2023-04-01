import React from 'react'
import { Outlet } from 'react-router-dom'
import "../styles/space.css"
import Appbar from './Appbar'
import MobileMenu from './MobileMenu'
const Space = () => {
  return (
    <div style={{
      position:"relative"
    }} className='space relative w-full min-h-screen bg-slate-700 '>
        <Appbar/>
        <MobileMenu/>
        <div className='mt-10'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Space