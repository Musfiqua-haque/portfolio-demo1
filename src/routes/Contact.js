import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroproject from '../Components/Heroproject'
import ContactForm from '../Components/ContactForm'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Heroproject heading='Contact' text='Contact with me for "HIARING"' />
      <ContactForm />
      <Footer />
    </div>
  )
}
