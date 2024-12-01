import React from 'react'
import { Nav } from '../components/Nav'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <div className='container'>
        <Nav />
        <Content />
        <Footer/>
    </div>
  )
}
