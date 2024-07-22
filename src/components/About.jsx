import React from 'react'
import './About.css'
import top from '../img/WhatsApp_Image_2024-07-11_at_03.34.04_c24de134-removebg-preview-removebg-preview.png'
function about() {
  return (
    <div className='about'>
      <div className='title'>
        <h1>About <span>me</span></h1>
      </div>
      <div className='about_section'>
        <div className='about_left'>
        <img src={top} alt="" />
        </div>
        <div className='about_right'>
          <div className='about_par'>
            <p>I am an experienced Frontend Developer With over a decade of professional expertise in the flield .throughout my career, i have had the privilege of collaboraating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for Frontend development is not only  reflected in my extensive experience but also in the enthusiasm and dedication I being to each project</p>
          </div>
          <div className='about_skills'>
            <div className='about_skill'><p className='font-bold'>HTML</p><hr style={{width:"99%"}}/></div>
            <div className='about_skill'><p className='font-bold'>CSS</p><hr style={{width:"99%"}}/></div>
            <div className='about_skill'><p className='font-bold'>jQuary</p><hr style={{width:"90%"}}/></div>
            <div className='about_skill'><p className='font-bold'>JavaScript</p><hr style={{width:"80%"}}/></div>
            <div className='about_skill'><p className='font-bold'>React js</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className='about_achievments'>
        <div className='about_achievment'>
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about_achievment'>
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className='about_achievment'>
          <h1>15+</h1>
          <p>HAPPY CLTENTS</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default about