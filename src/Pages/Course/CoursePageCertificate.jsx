import React from 'react'
import { useParams } from 'react-router-dom';
import { primaryStyles } from '../../Styles/primaryStyles';

function CoursePageCertificate() {
    const { courseID } = useParams();
  return (
    <div>
        <h1 className={primaryStyles.PageTitle}>Certificate</h1>
    </div>
  )
}

export default CoursePageCertificate