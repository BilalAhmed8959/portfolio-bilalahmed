import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(()=>{
    gsap.to(".box",{
      x:700,
      duration:2,
      delay:1,
      scale:2,
      rotate:720,
      opacity:0,
      yoyo:true,
      repeat:1
    })
  })
  useGSAP(()=>{
    gsap.to(".box-2",{
      x:700,
      duration:2,
      delay:5,
      scale:2,
      rotate:720,
      opacity:0,
      yoyo:true,
      repeat:1
    })
  })
  return (
  <>
  <Navbar />
  <Home/>
  <About />
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
     </>
  )
}

export default App
