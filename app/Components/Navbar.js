import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <>
        <div className='relative  flex items-center justify-between px-9 py-1 m-[1vw] font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"]'>
            <div className='flex'>
                <img src="" alt="logo-img"/>
                <p className='ml-[1vw] mr-[1vw] cursor-pointer text-[snow]'>Docs</p>
                <p className='mr-[1vw] cursor-pointer text-[snow]'>Products</p>
                <p className='cursor-pointer text-[snow]'>Pricing</p>
            </div>
            <div className='flex '>
                <Button 
                    innertext="Sign Up"
                    fontSize="text-[1vw]"
                    padding="pr-2 pl-2 pt-[.3vw] pb-1"
                    margin="m-3"
                    border="border-[.2vw] border-[solid] border-[snow]"
                    brRadius="rounded-[13px]"
                    bgColor="bg-transparent"
                    txtColor="text-[snow]"/>
                <Button 
                    innertext="Sign In"
                    fontSize="text-[1vw]"
                    padding="pr-2 pl-2 pt-1 pb-1"
                    margin="m-3"
                    border="border-[.3vw] border-[solid] border-[snow]"
                    brRadius="rounded-[13px]"
                    bgColor="bg-[snow]"
                    txtColor="text-[#00192A]"/>
            </div>
        </div>
    </>
  )
}

export default Navbar