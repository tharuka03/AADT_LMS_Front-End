import React from 'react'
import { useParams } from 'react-router-dom';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePageCommunity() {
  const { courseID } = useParams();
  return (
    <div>
      <h1 className={primaryStyles.PageTitle}>Community (Q&A)</h1>
    </div>
  )
}

export default CoursePageCommunity