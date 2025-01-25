import React from 'react'
import Presentation from './Presentation'
import Grade from './Grade'

const Main = () => {
  return (
    <div className=' 2xl:grid 2xl:grid-cols-2  xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2  md:grid md:grid-cols-1 sm:grid sm:grid-cols-1   '>
        <Presentation/>
        <Grade/>
    </div>
  )
}

export default Main