import React from 'react'
import { primaryStyles } from '../Styles/primaryStyles'
import MyCourseDisplayArea from '../Components/Application/MyCourseDisplayArea'

function Home() {

  return (
    <div className={primaryStyles.pageContainerPrimary}>
      <h1 className={primaryStyles.PageTitle}>My Courses</h1>
      <MyCourseDisplayArea />
    </div>
  )
}

export default Home