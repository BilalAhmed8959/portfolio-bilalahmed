import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'

const App = () => {
  return (
  <>
  <Navbar />
  <Home/>
  <About />
    <Portfolio/>
    <Experiance/>
  </>
  )
}

export default App
