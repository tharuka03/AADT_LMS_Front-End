import React, { useState } from 'react'
import { navbar_items } from '../../assets/assests'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='fixed w-full flex justify-center py-2'>
      <div className='w-[95%] flex justify-center bg-white shadow-lg shadow-AADT-secondary-dark py-3 rounded-xl'>
        <ul className='flex gap-3'>
          {navbar_items.map((navItem, index) => (
            <NavLink key={index} to={navItem.path} >
              {({ isActive }) => (
                <div className={`flex flex-col items-start border border-AADT-secondary-dark rounded-lg py-2 px-4 text-md shadow-none hover:shadow-md hover:shadow-AADT-secondary-dark transition duration-300 ease-in-out ${isActive ? 'bg-AADT-secondary-dark' : 'bg-AADT-secondary-light'}`}>
                  <i className={`${navItem.icon}`}></i>
                  <li>{navItem.name}</li>
                </div>
              )}
            </NavLink>
          ))}

        </ul>
        
      </div>
    </div>
  )
}

export default Navbar