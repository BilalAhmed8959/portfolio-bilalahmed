import React from 'react'

export default function Home() {
  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
    <div className='flex flex-col md:flex-row'>
    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
    <spen>Welcome In My Feed </spen>
   <div className='flex space-x-1 text-2xl md:text-4xl'>
   <h1>Hello, I'm a</h1>
   <spen className="text-red-700 font-bold">Developer</spen>
   </div>
   <br></br>
    <p>I am a front-end developer and I have expertise in creating websites in Html.  css.  I use JavaScript and mostly react and tailwind css right now</p>
    </div>
    <div className='md:w-1/2'>right</div>
    </div>
   </div>
   </>
  )
}
