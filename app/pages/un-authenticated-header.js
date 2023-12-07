"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar';


const UnAuthenticatedHeader = () => {
  // const headerRef = useRef(null)
  const [header, setHeader] = useState(false)

  const headerAnimation = () => {
    if(window.scrollY > 30){
      setHeader(true)
    } else{
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerAnimation)
    return () => {
      window.addEventListener('scroll', headerAnimation)
    }
  }, [])
  

  // useEffect(() => {
  //   if (headerRef.current) {
  //     const initialBackgroundColor = window.scrollY > 50 ? 'rgba(192, 192, 192, 0.8)' : 'rgba(0, 0, 0, 0)';
  //     gsap.to(headerRef.current, {
  //       backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to your desired background color
  //       duration: 0.3, // Animation duration
  //       height: '100px',
  //       scrollTrigger: {
  //         start: 'top -10%',
  //         end: 'top -15%',
  //         markers: true,
  //         scrub: 2,
  //       },
  //     });
  //   }
    
  
    
  // }, [])
  
  
  return (
    <>
      <div className={header ? 'fixed w-full ease-in [transition:1.5s] bg-[rgba(_255,_255,_255,_0.3_)] backdrop-filter backdrop-blur-[7.5px]   z-[10]' : 'fixed ease-in [transition:1.5s] w-full bg-transparent z-[10]'}>
        <Navbar/>
      </div>
    </>
  )
}

export default UnAuthenticatedHeader