import React from 'react'
import { Link } from 'react-router-dom'

function CourseCard({course}) {
  return (
    <Link to={`/course/${course.id}`} className='bg-white p-4 pb-2 rounded-xl'>
        <div className='border min-h-40 rounded-lg bg-AADT-secondary-dark border-AADT-secondary-dark'>
            <img src={course.img} alt={course.title} />
        </div>
        <div className='relative text-left'>
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <p className='text-right bottom-0 right-2 text-sm italic'>{course.duration}</p>
        </div>
    </Link>
  )
}

export default CourseCard