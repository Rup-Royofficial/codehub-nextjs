import React from 'react'
import UnAuthenticatedHeader from '../un-authenticated-header'


const UnAuthenticatedHomepage = () => {
  return (
    <>
      <UnAuthenticatedHeader/>
      <div className='bg-black  h-[300vh] w-full z-0'>un-authenticated-homepage</div>
    </>
  )
}

export default UnAuthenticatedHomepage