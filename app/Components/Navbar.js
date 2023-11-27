import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <>
        <div className='relative flex items-center justify-between m-[2vw] font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"]'>
            <div className='flex'>
                <img src="" alt="logo-img"/>
                <p className='ml-[1vw] mr-[1vw] cursor-pointer'>Docs</p>
                <p className='mr-[1vw] cursor-pointer'>Products</p>
                <p className='cursor-pointer'>Pricing</p>
            </div>
            <div className='flex'>
                <Button 
                    innertext="Sign Up"
                    fontSize="text-[2vw]"
                    padding="pr-3 pl-3 pt-2.5 pb-2.5"
                    margin="mr-5"
                    border="border-[.3vw] border-[solid] border-[snow]"
                    brRadius="rounded-[13px]"
                    bgColor="bg-red-500"
                    txtColor="text-[snow]"/>
                <Button 
                    innertext="Sign In"
                    fontSize="text-[2vw]"
                    padding="pr-3 pl-3 pt-2.5 pb-2.5"
                    margin="mr-1"
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