import './AboutMeStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/about.jpg'


export default function AboutMe() {
  return (
      <div className='about-container'>
        <div className='about-left'>
            <h2 className='about-title'>Who I Am ?</h2>
            <p className='about-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <Link to='/contact' className='btn'>Contact</Link>
        </div>
        <div className='about-right'>
            <div className='img-container'>
                <img className='myImage' src={about} alt=''/>
            </div>
        </div>
      </div>
  )
}
