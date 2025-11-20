import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { primaryStyles } from '../Styles/primaryStyles'

function CourseCard({course}) {

    const[imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/course/${course.id}`} className='bg-white relative p-3 pb-2 flex flex-col justify-start gap-2 rounded-xl border'>
        <div className=' relative min-h-40 rounded-lg aspect-3/2border bg-AADT-secondary-dark '>
            <img src={course.img} className={`rounded-lg w-full h-full object-cover transition duration-200 ease-in ${imageLoaded ? 'blur-none' : 'blur-sm'}`} alt={course.title} loading="lazy" onLoad={()=> setImageLoaded(true)} />
        </div>
        <div className='relative gap-1 flex flex-col'>
            <h3 className={primaryStyles.CourseCardTitle}>{course.title}</h3>
            <p className={primaryStyles.CourseCardInstructor}>{course.instructor}</p>
        </div>
        <p className='text-right bottom-1 absolute right-2 text-sm italic'>{course.duration}</p>
    </Link>
  )
}

export default CourseCard