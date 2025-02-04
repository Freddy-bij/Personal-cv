import { useContext } from "react"
import Translate from "./Translate"
import { contTrans } from "../Context/transContent"


const Head = () => {
      const {isTranslate}=useContext(contTrans)
  return (
    <>
    <div className="bg-[url('/public/images/code-comp.png')]   h-72   bg-no-repeat bg-center  bg-cover">

    <Translate/>

    <div className=" flex flex-col h-full justify-center">
      <div className="flex justify-center">

      <div className="flex  items-center relative   left-[50px]  2xl:left-[0px] xl:left-[0px] lg:-[0px] md:left-[0] sm: left-[0px]">
         
         <div className=" w-32  h-32 2xl:w-40 2xl:h-40 xl:w-40 xl:h-40 lg:w-40 lg:h-40 md:w-40 md:h-20 sm:w-40 sm:h-40  bg-gray-500 rounded-full absolute left-[-100px] z-10">
             <img src="/public/images/imag3.png"  alt="freddy" className="rounded-full   w-full h-full   " />
         </div>
           
         <div>
         <div className="bg-gray-950 text-white p-2 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-4  w-64 2xl:w-80 xl:w-80 lg:w-80 xl:w-80 md:w-80 sm:w-80    rounded-r-full ">
            <h1 className=" ml-4 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-10 uppercase  text-2xl" >freddy bijanja</h1>
         </div>
         <div className="bg-white text-black p-2 w-48  2xl:w-64 xl:w-64  lg:w-64 md:w-64 sm:w-64 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-4  rounded-r-full  ">
             <p className=" ml-4 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10 sm:ml-10 capitalize text-sm font-bold ">{isTranslate ? "software developer" : "développeur de logiciels"}</p>
       </div>
       </div>
       
       </div>
      </div>
    
     
    </div>

    </div>
   
 
   
    
    </>
    
  )
}

export default Head