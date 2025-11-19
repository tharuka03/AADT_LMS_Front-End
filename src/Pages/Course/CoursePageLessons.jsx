import React from 'react'
import { useParams } from 'react-router-dom';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePageLessons() {
  const { courseID } = useParams();
  return (
    <div>
      <h1 className={primaryStyles.PageTitle}>Lessons</h1>
    </div>
  )
}

export default CoursePageLessons   