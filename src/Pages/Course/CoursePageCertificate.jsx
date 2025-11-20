import React from 'react'
import { useParams } from 'react-router-dom';
import { primaryStyles } from '../../Styles/';

function CoursePageCertificate() {
    const { courseID } = useParams();
  return (
    <div>
        <h1 className={primaryStyles.PageTitle}>Certificate</h1>
        <h2>{courseID}</h2>
    </div>
  )
}

export default CoursePageCertificate