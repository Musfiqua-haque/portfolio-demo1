import React from 'react'
import './HeroStyle.css';
import Heroimage from '../assets/heroimage.jpg'
import {Link} from 'react-router-dom'

 function Herosection() {
  return (
    <div className='hero'>
      <div className='background'>
        <img className='background-image' src={Heroimage} alt='No photo'/>
      </div>
      <div className='hero-details'>
        <p>I am a developer</p>
        <h2>React developer</h2>
      <div className='btns'>
        <Link className='btn' to='/project'>Project</Link>
        <Link className='btn1' to='/contact'>Contact</Link>
      </div>
      </div>
    </div>
  )
}
export default Herosection;