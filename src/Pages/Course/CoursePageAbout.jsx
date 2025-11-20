import React from 'react'
import { useParams } from 'react-router-dom';
import { MyCourses } from '../../assets/assets';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePageAbout() {
    const { courseID } = useParams();
    const course = MyCourses.find(c => c.id === parseInt(courseID));
  return (
    <div className='w-full h-full flex flex-col gap-3 md:text-left'>
    <h1 className={primaryStyles.PageTitle}>About Course</h1>
    <div className='enable-scroll-bar flex flex-col gap-5 w-full h-full overflow-y-scroll'>

      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='flex items-center justify-center lg:w-1/3'>
          <img className='rounded-lg w-full h-full object-cover' src={course ? course.img : ""} alt={course ? course.title : "Course not found"} loading='lazy' />
        </div>
        <div className='lg:w-2/3 flex flex-col gap-2.5 justify-between items-center'>
          <div className='flex flex-col gap-2.5'>
            <h1 className='text-lg md:text-xl md:text-left leading-tight font-bold'>{course ? course.title : "Course not found"}</h1>
            <p className='text-justify indent-5 text-base'>{course ? course.description : ""}</p>
          </div>
          <div className='flex justify-between text-base w-full items-center'>
            <p className='font-semibold underline'>{course ? course.instructor : ""}</p>
            <p className='font-light italic'>{course ? course.duration : ""}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 text-left'>
        <div>
          <h2 className={primaryStyles.SectionTitle}>What You'll Learn</h2>
          <p className='text-justify indent-5'>{course ? course.CourseOutline : ""}</p>
        </div>
        <ul>
          <h2 className={primaryStyles.SectionTitle}>Learning Outcomes</h2>
          {course.LearningOutComes.map((item, index) => (
            <li key={index} className='text-left list-disc ml-5'>{item}</li>
          ))}
        </ul>
      </div>

    </div>
    </div>
  )
}
  
export default CoursePageAbout