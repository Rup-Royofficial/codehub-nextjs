"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const UnAuthenticatedHeader = () => {
  const headerRef = useRef(null)
  useEffect(() => {
    if (headerRef.current) {
      const initialBackgroundColor = window.scrollY > 50 ? 'rgba(192, 192, 192, 0.8)' : 'rgba(0, 0, 0, 0)';
      gsap.to(headerRef.current, {
        backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to your desired background color
        duration: 0.3, // Animation duration
        height: '100px',
        scrollTrigger: {
          // trigger: headerRef.current,
          start: 'top -10%',
          end: 'top -15%',
          markers: true,
          scrub: 2,
        },
      });
    }
    
  
    
  }, [])
  
  
  return (
    <>
      <div ref={headerRef} className='fixed top-0 left-0 right-0  z-9999 p-1 bg-transparent rounded-b-lg'>
        <Navbar/>
      </div>
    </>
  )
}

export default UnAuthenticatedHeader