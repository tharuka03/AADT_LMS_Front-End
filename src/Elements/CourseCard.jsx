import React from 'react'

function CourseCard({course}) {
  return (
    <div className='bg-white p-4 pb-2 rounded-xl'>
        <div className='border min-h-40 rounded-lg bg-AADT-secondary-dark border-AADT-secondary-dark'>
            <img src={course.img} alt={course.title} />
        </div>
        <div className='relative text-left'>
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <p className='text-right bottom-0 right-2 text-sm italic'>{course.duration}</p>
        </div>
    </div>
  )
}

export default CourseCard