import React from 'react'
import { ContentCourse } from '../components/ContentCourse'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const CoursePage = () => {
  return (
    <div className='container'>
        <Nav />
        <h1 class="heading"> popular courses </h1>
        <div className="course" style={{display:'flex' , margin:'0 90px'}}>
        <ContentCourse />
        <ContentCourse />
        <ContentCourse />
        <ContentCourse />
        <ContentCourse />
        <ContentCourse />
        </div>
        <Footer/>
    </div>
  )
}
