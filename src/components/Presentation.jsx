import React from 'react'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Lang from './Lang'

const Presentation = () => {
  return (
   
   
   <div className='bg-gray-950 text-white pt-10  '>
     
     <div className='px-10 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-20  '>
        <About/>
        <Contact/>
        <Skills/>
        <Lang/>
      </div>  
    </div>
  )
}

export default Presentation