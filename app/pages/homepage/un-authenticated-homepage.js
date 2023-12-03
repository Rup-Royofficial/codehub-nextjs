"use client"
import React, { useEffect, useRef } from 'react'
import UnAuthenticatedHeader from '../un-authenticated-header'
import Image from 'next/image'



const UnAuthenticatedHomepage = () => {

  // const secondSet = useRef(null)
  // useEffect(() => {
  //   if(secondSet.current){
  //     gsap.to(secondSet.current, {
  //       backgroundColor: "rgba(9,17,35,0.9)",
  //       scrollTrigger:{
  //         // trigger: secondSet.current,
  //         scroller:"body",
  //         start: "top 0%",
  //         // end: "top -80%",
  //         scrub: 1,
  //       }
  //     })
  //   }
  // }, [])

  return (
    <>
      <UnAuthenticatedHeader/>
      <div>
        {/* [box-shadow:inset_0_0_0_2000px_rgba(0,0,0,.5)] */}
        <div className='flex align-center justify-left w-full h-screen object-cover bg-fixed bg-cover bg-center custom-img'>
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-black/50 z-[2]'></div>
          <div className='gradient-text p-5 ml-[5rem] mt-[17rem] text-center  text-transparent z-[2] animate-gradient'>
              {/* https://www.youtube.com/watch?v=qOkwf7VoHbM  animated text gradient*/  }
            <h2 className='text-9xl font-bold '>Develop.Think.Deploy</h2>
            {/* <h4 className='text-2xl mt-3'>Lets build together</h4> */}
          </div>
          
        {/* //try out h-full too */}
        </div>
        
        <div className='bg-green-400 h-[150vh] w-full z-10'>
        </div>
        <div className='bg-purple-400 h-[150vh] w-full z-10'>
        </div>
        <div className='bg-orange-400 h-[150vh] w-full z-10'>
        </div>
      </div>
    </>
    
  )
}


export default UnAuthenticatedHomepage

{/* <div className='bg-gradient-to-b from-gray-400 via-gray-900 to-black relative w-full h-[100vh]'> 
          <img 
            src={Mail}
            priority={true}
            className='w-full h-full object-cover absolute mix-blend-overlay'
            alt='homepage-image'></img>
          <div className='p-24 mt-50'>
            <h2 className='text-slate-300 text-8xl mt-[20vw] font-bold font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"]'>Let's build together</h2>
            <h4 className='text-slate-300 text-5xl font-light font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"]'>lorem ipsum</h4>
          </div>
        </div> */}