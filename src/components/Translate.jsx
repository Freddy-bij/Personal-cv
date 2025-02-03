import { MdGTranslate } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useContext } from "react";
import { contTrans } from "../Context/transContent";

const Translate = () => {
    const {isTranslate , setIsTranslate}=useContext(contTrans)

  return (
    <div className="flex justify-end text-white items-center mx-8 gap-4 ">
      
      <div className="flex items-center gap-1 px-3 hover:bg-gray-950 rounded-md  hover:text-white bg-white text-gray-950 py-1  my-1">
        
        <div className="text-2xl" onClick={() => setIsTranslate(prevIsTranste => !prevIsTranste)}><MdGTranslate /></div>
        <h1 className="text-md font-semibold">{!isTranslate? "English" : " french"}</h1>
      </div>

      <div className="text-2xl bg-white text-gray-950 w-10 h-10 flex justify-center items-center my-1 hover:bg-gray-950 hover:text-white rounded-full" >
        <FaCloudDownloadAlt />
        </div>
    </div>
  )
}

export default Translate