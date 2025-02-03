import React, { useState } from 'react'
import Head from './components/Head'
import Main from './components/Main'
import { contTrans } from './Context/transContent'

const App = () => {

           const [isTranslate ,setIsTranslate]= useState(true)

  return (
  
    <>

      <contTrans.Provider value={{isTranslate , setIsTranslate}}>

     <div className='m-2 border-2 border-purple-950 p-1 '>
      
     <Head/>
     <Main/>

      </div>
      </contTrans.Provider>
    
    
    
    </>
     
  
  )
}

export default App