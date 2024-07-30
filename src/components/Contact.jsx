import React from 'react'

export default function Contact() {
  return (
   <>
   <div name="Contact" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
    <h1 className='head text-4xl font-bold text-center'>Contact <span>Me</span></h1>
    <p className='text-center text-sm'>Please fill out the form below to  contace me</p>
    <div className='flex flex-col items-center justify-center mt-5'>
        <form action='' className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
        <h1 className='text-xl font-semibold '>Send Your Message</h1>
        <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>FullName</label>
            <input className='shadow rounded-lg  appearance-none border rounded py-2 text-gray-700 leading-tight focus:out'
            id='name'
            type='text'
            placeholder='Enter your name'
            />
        </div>
        <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>Email Eddress </label>
            <input className='shadow rounded-lg  appearance-none border rounded py-2 text-gray-700 leading-tight focus:out'
            id='name'
            type='text'
            placeholder='Enter your Email Eddress'
            />
            </div>
            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>Message</label>
            <textarea className='shadow rounded-lg  appearance-none border rounded py-2 text-gray-700 leading-tight focus:out'
            id='name'
            type='text'
            placeholder='Type your message here'
            />
            </div>
            <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
        </form>
    </div>
   </div>
   </>
  )
}
