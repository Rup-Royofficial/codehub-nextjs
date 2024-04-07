"use client"
import React, { useState } from 'react'
import UnAuthenticatedHeader from '../un-authenticated-header'
import  TiltCard  from '../../Components/TiltCard'
import { BouncyCardsFeatures } from '@/app/Components/BouncyCardFeatures'
import HorizontalInfiniteScrollTrusts from '@/app/Components/HorizontalInfinteScrollTrusts'
import UnAuthenticatedFooter from '../un-authenticated-footer'

// import HorizontalCardCarousel from '../../Components/HorizontalCardCarousel'
// import BaseFooter from '@/app/Components/BaseFooter'
// import Image from 'next/image'




const UnAuthenticatedHomepage = () => {

  const [backgroundIg, setBackgroundIg] = useState("/images/nebula.jpg");


  const [backgroundIg, setBackgroundImg] = useState("/images/nebula.jpg");

  

  const [backgroundIg, setBackgroundImg] = useState(
    "/images/nebula.jpg"
 );

 
  // console.log('Parent Component - Background Image:', backgroundImg);
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
      <div className='!scroll-smooth'>
        {/* [box-shadow:inset_0_0_0_2000px_rgba(0,0,0,.5)] */}
        <div className='flex align-center justify-left w-full h-screen object-cover bg-fixed bg-cover bg-center custom-img'>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-[2]" />
          <div className='gradient-text p-5 ml-[5rem] mt-[17rem] text-center  text-transparent z-[2] animate-gradient'>
              {/* https://www.youtube.com/watch?v=qOkwf7VoHbM  animated text gradient*/  }
            <h2 className='text-9xl font-bold '>Develop.Think.Deploy</h2>
            <h6 className='text-[2vw] font-medium text-[#a1a1a1] z-[1]'>Lets build together</h6>
            {/* text erom choto o rakha jai <h2 className='text-[8vw] font-bold '>Develop.Think.Deploy</h2> */}

            {/* <h4 className='text-2xl mt-3'>Lets build together</h4> */}
          </div>
          
        {/* //try out h-full too */}
        </div>
        
        <div className='bg-black h-[150vh] w-full z-10 flex items-center justify-evenly'>
          <div className='bg-gradient-to-b from-gray-700 via-gray-900 to-black w-[90%] rounded-xl'>
            {/* <TiltCard/> */}
            <BouncyCardsFeatures/>
          </div>
        </div>



{/* //Problem with image rendering in the tiltcard tag */}
        <div className='bg-slate-900 h-[200vh] w-full  relative '>
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-[0]'></div>
          <div className='absolute top-0 left-0 z-0 ml-[15%] flex mt-[5vw]'>
            <TiltCard backgroundImg={ backgroundIg } />
            <p className='text-white w-[50vw] text-5xl font-bold absolute top-[8vw] left-[28vw] z-0 '>
              Codehub Actions <span className='text-[1.2vw] font-medium text-[slategrey]'><br></br>Automates your build, test, and deployment workflow with<br></br> simple and secure CI/CD.</span>
            </p>
          </div>
          <div className='absolute top-1/2 right-0 transform -translate-y-1/2 z-0 mr-[15%] '>
            <p className='text-white w-[50vw] text-5xl font-bold absolute top-[11vw] right-[22vw] z-0 '>
              Codehub Devspace<span className='text-[1.2vw] font-medium text-[slategrey]'><br></br>Our DevSpace ffers a complete environment in seconds. Code, build, test, and open pull requests from any repo</span>
            </p>
            <TiltCard backgroundImg="/images/nebula.jpg" />
          </div>
          <div className='absolute w-[50vw] bottom-0 left-1/2 transform -translate-x-1/2 z-0 ml-[-15%] mb-[5vw]'>
            <TiltCard backgroundImg={ "/images/nebula.jpg" }/>
            <p className='text-white w-[50vw] text-5xl font-bold absolute top-[12vw] -right-[38vw] z-0 '>
              Code scanning<span className='text-[1.2vw] font-medium text-[slategrey]'><br></br>Our code analysis tool that helps you remediate issues in your code.</span>
            </p>
          </div>
        </div>


        <div className='bg-black h-[80vh] w-full flex items-center justify-center pt-[12vw]'>
          <div className=''>
            <HorizontalInfiniteScrollTrusts/>
          </div>
        </div>
      </div>
      <UnAuthenticatedFooter/>
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