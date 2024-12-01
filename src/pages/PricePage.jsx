import React from 'react'
import { Nav } from '../components/Nav'
import { ContentPrice } from '../components/ContentPrice'
import { Footer } from '../components/Footer'

export const PricePage = () => {
  return (
    <div className='container'>
        <Nav />
        <h1 class="heading"> select the plan </h1>
        <ContentPrice />
        <Footer/>
    </div>
  )
}
