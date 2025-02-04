import { useContext } from "react"
import { GoDot } from "react-icons/go"
import { contTrans } from "../Context/transContent"


const Skills = () => {
      const {isTranslate}=useContext(contTrans)
  return (
    <div className=' pb-8 border-b-2 border-gray-500'>
        <h1 className='uppercase text-2xl font-bold py-3'>{isTranslate ? "skills" : "connaissance"}</h1>
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>{isTranslate ? "computer science" : "informatique"}</p></div> 
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>{isTranslate ? "account & management" : "commercial & gestion"}</p></div> 
       <div className="flex items-center gap-x-3 capitalize"><GoDot/><p>{isTranslate ? "web developpement (" :"développement web  "}</p></div> 
    </div>
  )
}

export default Skills