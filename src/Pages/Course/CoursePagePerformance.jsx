import React from 'react'
import { useParams } from 'react-router-dom';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePagePerformance() {
    const { courseID } = useParams();
  return (
    <div>
        <h1 className={primaryStyles.PageTitle}>Performance</h1>
    </div>
  )
}

export default CoursePagePerformance