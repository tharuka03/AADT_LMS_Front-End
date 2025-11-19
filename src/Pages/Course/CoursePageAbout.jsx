import React from 'react'
import { useParams } from 'react-router-dom';
import { MyCourses } from '../../assets/assets';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePageAbout() {
    const { courseID } = useParams();
    const course = MyCourses.find(c => c.id === parseInt(courseID));
  return (
    <div>
      <h1 className={primaryStyles.PageTitle}>About Course</h1>
    </div>
  )
}
  
export default CoursePageAbout