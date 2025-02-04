import React, { useContext } from 'react'
import { GoDot } from 'react-icons/go'
import { contTrans } from '../Context/transContent'

const Lang = () => {
          const {isTranslate} =useContext(contTrans)

  return (
    <div className='pb-14'>
      <h1 className='uppercase text-2xl font-bold py-3'>{isTranslate? "language" : "langue"}</h1>
     <div className='flex gap-x-3 items-center'> <GoDot/> <p>{isTranslate ? "French" : "français"}</p></div>  
     <div className='flex gap-x-3 items-center'> <GoDot/><p>{isTranslate ? "English" : "Anglais"}</p></div>   
     <div className='flex gap-x-3 items-center'> <GoDot/><p>swahili</p></div>   
     <div className='flex gap-x-3 items-center'> <GoDot/> <p>kinyarwanda</p></div>  
    </div>
  )
}

export default Lang