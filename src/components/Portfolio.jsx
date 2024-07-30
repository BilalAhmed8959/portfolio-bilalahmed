import React from 'react'
import './Portfolio.css'
import java from '../img/java.png'
import python from '../img/python-logo.png'
import mongoDB from '../img/mongo.png'
import express from '../img/expert.png'
import nodejs from '../img/node.png'
import react from '../img/react.png'

export default function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:mongoDB,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:react,
      name:"React js"
    },
    {
      id:4,
      logo:nodejs,
      name:"Node js"
    },
    {
      id:5,
      logo:python,
      name:"Python"
    },
    {
      id:6,
      logo:java,
      name:"Java"
    },
  ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container  mx-auto md:px-20 text-center'>
        <div><h1 className='head text-4xl font-bold'>portfo<span>lio</span></h1>
        <p className='underline font-semibold mt-3'>Featured Projects</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {
            cardItem.map(({id,logo,name}) =>(
              <div className='md:w-[300px] md:h-[300px] border-[2px] mt-3 ml-5 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px ]' alt="" />
                <div>
                  <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className='justify-around px-6 py-4 space-x-3'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Video</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded '>Source code</button>
                  </div>
              </div>
            ))
          }
        </div>
        </div>
    </div>
 
    </>
  )
}
