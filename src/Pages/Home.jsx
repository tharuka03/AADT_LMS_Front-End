import React from 'react'
import { primaryStyles } from '../Styles/primaryStyles'
import MyCourseDisplayArea from '../Components/Application/MyCourseDisplayArea'

function Home() {

  return (
    <div className='w-[95%] md:w-[80%] mx-auto'>
      <h1 className={primaryStyles.PageTitle}>My Courses</h1>
      <MyCourseDisplayArea />
    </div>
  )
}

export default Home