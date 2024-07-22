import React from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
  <>
  <hr className='mt-8'/>
  <footer className='my-12'>
    <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <RiFacebookCircleFill size={24}  />
                <FaTwitter size={24}/>
                <FaInstagram size={24}/>
                <FaLinkedin size={24}/>
            </div>
            <div className='mt-8 border-t-2 border-gray-700 pt-8 flex-col items-center'>
                <p className='text-sm'>2024 Your Company. All rights reserved.</p>
                <p className='text-sm text-center'>Supportive Partner Bilal Ahmed</p>
            </div>
        </div>

    </div>
  </footer>
  </>
  )
}
