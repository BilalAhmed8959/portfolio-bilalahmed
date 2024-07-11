import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";



function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        }, 
         {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 h-16 shadow-md' fixed top-0 left-0 right-0>
    <div className='flex justify-between items-center h-16 '>
        <div className='flex  space-x-2'>
            <h1 className='font-semibold text-xl cursor-pointer'>Bila<span className='text-green-500 text-2xl'>l</span></h1>
            <p className='text-sm'>Web Developer</p>
        </div>
        {/* desktop navabar */}
                <div>
            <ul className='hidden md:flex space-x-8'>
               {
                navItems.map(({id,text}) =>(
                    <li className='hover:scale-105 hover:text-red-700 duration-200 cursor-pointer' key={id}>{text}</li>
                ))
               }
            </ul>
            <div onClick={()=>setMenu(!menu)}className='md:hidden'>{menu?<AiOutlineMenu size={24}/>:<IoCloseSharp size={24}/>}
           
            </div>
        </div>
    </div>
    {/* mobail navabar  */}
    {menu && (
    <div >
        <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3' >
        {
                navItems.map(({id,text}) =>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                ))
               }
              </ul>
    </div>
    )}

   </div>
   </>
  )
}

export default Navbar
