 import { FaGraduationCap } from 'react-icons/fa6'
const Education = () => {
  return (
    <div>
         <div className='bg-white mx-10 py-7 '>
      <div className=' pb-8 border-b-2 border-gray-500'>
     
     
    
       <div className='bg-gray-950 w-[200px]  text-white flex  rounded-full  py-1 px-2 hover:bg-white hover:shadow-md hover:text-gray-950'>
        <FaGraduationCap/>
        <h1 className='uppercase text-2xl font-bold '>education</h1>
        </div> 
    
     
     
         <h2 className='uppercase text-xl font-bold py-1'>2008-2014</h2>
         <p className='font-medium'>primary school to KARISIMBI,Goma Drc</p>
         <h2 className='uppercase text-xl font-bold py-1'>2014-2020</h2>
         <p className='font-medium'>Secondary school to saint joseph institute ,Goma Drc and obtaing  diploma in account and management</p>
         </div>
       </div>
     </div>
    
  )
}

export default Education