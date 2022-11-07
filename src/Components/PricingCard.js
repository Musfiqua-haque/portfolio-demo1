import React from 'react'
import './PricingCardStyle.css'
import { Link } from 'react-router-dom'

export default function PricingCard() {
  return (
    <div className='pricing'>
      <div className='container'>
        <div className='card'>
          <h3>-Basic-</h3>
          <p className='taka'>$ 300</p>
          <p>-3 Days -</p>
          <p>-3 Pages -</p>
          <p>-7 Featured -</p>
          <p>-3 Responsive Design -</p>
          <Link to='./contact' className='btn'>Purchase Now</Link>
        </div>

        <div className='card'>
          <h3>-Business-</h3>
          <p className='taka'>$ 300</p>
          <p>-3 Days -</p>
          <p>-7 Pages -</p>
          <p>-5 Featured -</p>
          <p>-3 Responsive Design -</p>
          <Link to='./contact' className='btn'>Purchase Now</Link>
        </div>

        <div className='card'>
          <h3>-Premium-</h3>
          <p className='taka'>$ 300</p>
          <p>-3 Days -</p>
          <p>-10 Pages -</p>
          <p>-3 Featured -</p>
          <p>-3 Responsive Design -</p>
          <Link to='./contact' className='btn'>Purchase Now</Link>
        </div>
      </div>    
    </div>
  )
}
