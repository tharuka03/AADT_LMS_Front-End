import React, { useState } from 'react'
import CourseFilter from '../../Elements/CourseFilter'
import CourseCard from '../../Elements/CourseCard'
import { MyCourses } from '../../assets/assets.js';

function MyCourseDisplayArea() {

    const [search, setSearch] = useState("All");

    const courseList = MyCourses.filter(course => {
        if (search === "All") {
            return true;
        } else if (search === "Completed") {
            return course.completed === true;
        } else if (search === "In Progress") {
            return course.completed === false;
        }
        return true;
    });

  return (
    <div className='flex flex-col mx-auto gap-10 py-7'>
        <CourseFilter search={search} setSearch={setSearch} />
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 justify-center'>
                {courseList.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
            <h1>page</h1>
        </div>
        
    </div>
  )
}

export default MyCourseDisplayArea