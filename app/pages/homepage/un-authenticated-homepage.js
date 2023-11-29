"use client"
import React, { useEffect, useRef } from 'react'
import UnAuthenticatedHeader from '../un-authenticated-header'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BentoGrid from '@/app/Components/BentoGrid'

gsap.registerPlugin(ScrollTrigger)

const UnAuthenticatedHomepage = () => {
  const secondSet = useRef(null)
  useEffect(() => {
    if(secondSet.current){
      gsap.to(secondSet.current, {
        backgroundColor: "rgba(9,17,35,0.9)",
        scrollTrigger:{
          // trigger: secondSet.current,
          scroller:"body",
          start: "top -45%",
          end: "top -80%",
          scrub: 1,
        }
      })
    }
  }, [])
  



  return (
    <>
      <UnAuthenticatedHeader/>
      <div className='flex '>
        {/* <div className='flex-grow z-2 h-screen ' style={{ background: 'linear-gradient(to right, rgb(4,17,31), rgba(4,17,31,0.8))' }}></div> */}
        <div className='flex-grow z-2 h-screen ' style={{ background: 'rgba(9,17,35,0.9)' }}></div>
        <div 
          className='flex-grow-0 text-[snow] w-[50%] object-cover z-3 bg-cover bg-center  opacity-1'
          style={{ backgroundImage: `url('/images/basehomepagenebula.png')`}}
        >
          
        {/* <div className='inset-0 z-4 bg-black opacity-25'></div> */}
        </div>
      </div>
      
      <div 
        className='bg-black h-[150vh] w-full z-10'
        ref={secondSet}>
          <BentoGrid/>
        </div>
    </>
  )
}

{/* <>
      <UnAuthenticatedHeader/>
      <div className='flex '>
        <div className='flex-grow z-2 h-screen bg-[rgb(4,17,31)] opacity-[20]'></div>
        <div 
          className='flex-grow-0 text-[snow] w-[50%] object-cover -z-1 bg-cover bg-center '
          style={{ backgroundImage: `url('/images/basehomepagenebula.png')`}}
        >
          
        </div>
        <div className='absolute inset-0 z-3 bg-black opacity-75'></div>
      </div>
      
      <div 
        className='bg-black h-[150vh] w-full z-10'
        ref={secondSet}>a</div>
    </> */}

export default UnAuthenticatedHomepage