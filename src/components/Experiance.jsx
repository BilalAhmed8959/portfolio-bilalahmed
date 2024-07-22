import React from 'react'
import './Portfolio.css'
import html from '../img/html.png'
import css from '../img/css.png'
import bootrep from '../img/bootrep.png'
import javascript from '../img/javascript.jpg'
import jquery from '../img/jquery.png'
import react from '../img/react.png'

export default function Experiance() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"HTML"
    },
    {
      id:2,
      logo:css,
      name:"CSS"
    },
    {
      id:3,
      logo:bootrep,
      name:"BOOTSTRAP"
    },
    {
      id:4,
      logo:javascript,
      name:"JAVASCRIPT"
    },
    {
      id:5,
      logo:jquery,
      name:"JQUERY"
    },
    {
      id:6,
      logo:react,
      name:"REACT"
    },
  ]
  return (
    <div>
    <div className='max-w-screen-2xl container  mx-auto md:px-20 text-center'>
        <div><h1 className='head text-4xl mt-16 font-bold'>Experia<span>nce</span></h1>
        <p className=' font-semibold mt-3'>i've more than 6 month experiance in below technologies</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          {
            cardItem.map(({id,logo,name}) =>(
              <div className='flex flex-col items-center md:w-[200px] md:h-[200px] justify-center border-[2px] mt-3 ml-5 rounded-full  p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[150px]   rounded-full ' alt="" />
                <div>
                  <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                                   </div>
                 
              </div>
            ))
          }
        </div>
        </div>
    </div>
 
    </div>
  )
}
