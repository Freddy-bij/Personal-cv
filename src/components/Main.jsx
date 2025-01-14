import React from 'react'
import Presentation from './Presentation'
import Grade from './Grade'

const Main = () => {
  return (
    <div className='grid grid-cols-2  '>
        <Presentation/>
        <Grade/>
    </div>
  )
}

export default Main