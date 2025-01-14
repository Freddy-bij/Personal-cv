import { GoDot } from "react-icons/go"


const Skills = () => {
  return (
    <div className=' pb-8 border-b-2 border-gray-500'>
        <h1 className='uppercase text-2xl font-bold py-3'>skills</h1>
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>computer science</p></div> 
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>account&mangement</p></div> 
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>web developpement</p></div> 
    </div>
  )
}

export default Skills