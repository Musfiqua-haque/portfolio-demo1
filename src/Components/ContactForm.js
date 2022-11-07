import './ContactFormStyle.css'
import React from 'react'

export default function ContactForm() {
  return (
    <div className='contact'>
      <form>
      <label>Name:</label>
      <input type='text'></input>
      <label>Email:</label>
      <input type='email'></input>
      <label>Subject:</label>
      <input type='text'></input>
      <label>Message:</label>
      <textarea rows='6' placeholder={"Write your Message"}/>
      <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
