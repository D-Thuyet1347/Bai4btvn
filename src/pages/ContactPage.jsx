import React from 'react'
import { Nav } from '../components/Nav'
import { ContentContact } from '../components/ContentContact'
import { Footer } from '../components/Footer'

export const ContactPage = () => {
  return (
    <div className='container'>
        <Nav />
        <h1 class="heading">contact us</h1>
        <ContentContact />
        <Footer/>
    </div>
  )
}
