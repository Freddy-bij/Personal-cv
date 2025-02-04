import React, { useContext } from 'react'
import { contTrans } from '../Context/transContent'

const About = () => {

  const {isTranslate , setIsTranslate}=useContext(contTrans)
  return (
    <div className=' pb-8 border-b-2 border-gray-500'>
       <h1 className='uppercase text-2xl font-bold pb-3'> {isTranslate ? "About Me" : "A Propos de moi"}</h1> 
       <p className='text-lg  '>{isTranslate ?  "I'am a talented, ambitious and hardworking person with a great open-mindedness and experience in accounting and management and in software engineer (conding)." : "Je suis une personne talentueuse, ambitieuse et travailleuse avec une grande ouverture d'esprit et une expérience en comptabilité et gestion et en ingénieur logiciel (conding)." }</p>
    </div>
  )
}

export default About