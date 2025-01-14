import React from 'react'
import { GoDot } from 'react-icons/go'

const Lang = () => {
  return (
    <div className='pb-14'>
      <h1 className='uppercase text-2xl font-bold py-3'>language</h1>
     <div className='flex gap-x-3 items-center'> <GoDot/> <p>french</p></div>  
     <div className='flex gap-x-3 items-center'> <GoDot/><p>English</p></div>   
     <div className='flex gap-x-3 items-center'> <GoDot/><p>swahili</p></div>   
     <div className='flex gap-x-3 items-center'> <GoDot/> <p>kinyarwanda</p></div>  
    </div>
  )
}

export default Lang