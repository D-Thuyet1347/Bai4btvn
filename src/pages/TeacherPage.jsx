import React from 'react'
import { Nav } from '../components/Nav'
import { ContentTeacher } from '../components/ContentTeacher'
import { Footer } from '../components/Footer'

export const TeacherPage = () => {
  return (
    <div className='container'>
        <Nav />
        <h1 class="heading"> experienced teachers </h1>
        <section className="teacher">
        <ContentTeacher />
        </section>

        <Footer/>
    </div>
  )
}
