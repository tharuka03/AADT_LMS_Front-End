import React from 'react'
import CourseSideNav from '../Components/Application/CourseSideNav'

function CoursePageLayout({ children }) {
  return (
    <div className='absolute h-full top-0 flex w-[95%] pt-20 md:pt-25 pb-10 gap-5 flex-col md:flex-row mx-auto'>
        <CourseSideNav />
        <main className='overflow-y-scroll h-full'>{children}</main>
    </div>
  )
}

export default CoursePageLayout