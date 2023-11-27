"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';


const UnAuthenticatedHeader = () => {
  const isauthenticated = false;
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScrolling(true)
      } else{
        setScrolling(false)
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <>
      <div className='p-2 bg-red-500'>
        <Navbar/>
      </div>
    </>
  )
}

export default UnAuthenticatedHeader