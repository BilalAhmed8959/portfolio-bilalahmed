import React from 'react'
import pic from '../img/home.png'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";







export default function Home() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
    <div className='flex flex-col md:flex-row'>
    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
    <spen className="font-bold">Welcome In My Feed </spen>
   <div className='flex space-x-1 text-2xl md:text-4xl'>
   <h1>Hello,I'm a</h1>
   {/* <spen >Developer</spen> */}
   <ReactTyped
            className="text-red-700 font-bold"
          strings={["Developer","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
   </div>
   <br></br>
    <p>I am a front-end developer and I have expertise in creating websites in Html.  css.  I use JavaScript and mostly react and tailwind css right now</p>
    <br />
    {/* social media icons */}
    <div className='flex justify-between'>
    <div className='space-y-2'>
      <h1 className='font-bold'>Available on</h1>
      <uL className="flex space-x-3 ">

        <li>  
          <a href="https://www.facebook.com/bilal.ahma.581?mibextid=ZbWKwL" target='_blank'>
              <RiFacebookCircleFill  className='text-2xl cursor-pointer'/>
              </a>
        </li>
        <li> 
          <a href="https://www.linkedin.com/in/bilal-ahmed-144121289/?trk=public-profile-join-page" target='_blank'>
               <FaLinkedin className='text-2xl cursor-pointer'/>
               </a>
        </li>
        <li>   
          <a href="https://github.com/BilalAhmed8959" target='_blink'>
            <FaGithubSquare className='text-2xl cursor-pointer'/>
            </a>
        </li>
        <li>      <FaTelegram className='text-2xl cursor-pointer'/>

</li>
      </uL>

   </div>
   <div className='space-y-2'>
   <h1 className='font-bold'>Currently Working on</h1>
      <div className="flex space-x-5 ">
      <SiMongodb  className='text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] border-gray-400 '/>
      <SiExpress  className='text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] border-gray-400 ' />
      <FaReact  className='text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px]  border-gray-400'/>
      <FaNodeJs  className='text-xl md:text-3xl hover:scale-105 duration-200 rounded-full border-[2px] border-gray-400 '/>

      </div>
   </div>
    </div>
    </div>
    <div className='md:w-1/2 md:ml-[100px] md:mt-0 order-1'>
    <img src={pic} className='rounded-full md:rounded-none animate-pulse ml-0 h-[400px] mt-0 w-[500px] md:w-[450px] h-[450px] shadow-inner' alt="" />
    </div>

    </div>
   </div>
   <hr/>
   </>
  )
}
