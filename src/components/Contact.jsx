import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className=' pb-8 border-b-2 border-gray-500'>
        <h1 className='uppercase text-2xl font-bold py-3'>Contact</h1>
       <div className="flex gap-x-3 items-center pb-3"> <div className="text-black w-6 bg-white h-6 flex items-center justify-center rounded-full"><MdEmail/></div> <p>freddybijanja31@gmail.com</p></div>
       <div className="flex gap-x-3 items-center pb-3"> <div className="text-black w-6 bg-white h-6 flex items-center justify-center rounded-full"><FaGithub/></div><p>freddy bij</p></div>
       <div className="flex gap-x-3 items-center pb-3"> <div className="text-black w-6 bg-white h-6 flex items-center justify-center rounded-full"><MdOutlinePhone/></div><p>+250792404909</p></div>
       <div className="flex gap-x-3 items-center pb-3"> <div className="text-black w-6 bg-white h-6 flex items-center justify-center rounded-full"><FaLinkedinIn/></div><p>freddy bij</p></div>
    </div>
  )
}

export default Contact