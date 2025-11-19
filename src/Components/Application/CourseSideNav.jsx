import React from 'react'
import { side_navbar_items } from '../../assets/assets'
import { NavLink, useParams } from 'react-router-dom'

function CourseSideNav() {
  const { courseID } = useParams();

  return (
    <div className='flex flex-row md:flex-col bg-AADT-blue p-3 md:p-4 rounded-lg'>
      <ul className='flex flex-row md:flex-col gap-5 md:gap-3 overflow-x-auto md:overflow-hidden items-center md:items-stretch justify-start md:justify-center'>
        {side_navbar_items.map((item, index) => (
          <NavLink to={`/course/${courseID}/${item.path}`} key={index}>
            {({isActive}) => (
              <div className={`flex flex-col gap-0.5 sm:gap-2 sm:flex-row w-full items-start sm:items-center p-2 sm:px-4 sm:py-2 rounded-md justify-start sm:justify-start transition text-sm md:text-base duration-150 ease-in ${isActive ? 'bg-AADT-white-100 text-black' : 'bg-AADT-white-50 text-white'}`}>
                <i className={item.icon}></i>
                <li className='whitespace-nowrap overflow-hidden overflow-ellipsis'>{item.name}</li>
              </div>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default CourseSideNav