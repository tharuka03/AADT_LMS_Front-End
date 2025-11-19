import React, { useEffect, useState } from 'react'
import { navbar_items } from '../../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import LogoutButton from '../../Elements/LogoutButton'

function Navbar() {

  const[showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log("scrolledY: ",currentScrollY);
      setShowMenu(false);
  };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  return (
    <div className='fixed w-full flex justify-center py-2 min-h-20 z-50'>
      <div className='relative w-[95%] flex justify-center items-center bg-white shadow-md shadow-AADT-secondary-dark py-3 rounded-xl'>
        <div className='absolute flex flex-col mx-auto md:left-12'>
          <h1 className='text-2xl font-bold leading-4 text-AADT-blue'>AADT</h1>
          <p className='text-sm font-light italic text-gray-600'>Student LMS</p>
        </div>
        <ul className={`${showMenu ? 'translate-y-7/11' : '-translate-y-full'} flex absolute md:flex md:relative md:translate-y-0 bg-[#FFFFFF5A] p-8 md:p-0 shadow-md md:shadow-none backdrop-blur-xl md:backdrop-blur-none rounded-xl md:bg-transparent w-full md:w-full justify-center md:top-0 flex-col md:flex-row gap-3 items-center transition-transform duration-500 ease-in-out`}>
          {navbar_items.map((navItem, index) => (
            <NavLink onClick={()=>setShowMenu(false)} key={index} to={navItem.path} >
              {({ isActive }) => (
                <div className={`flex flex-row md:flex-col gap-3 md:gap-0.5 items-center self-stretch w-50 md:w-auto justify-center md:items-start border border-AADT-secondary-dark rounded-lg py-2 px-3 lg:px-4 text-sm lg:text-md shadow-none hover:shadow-md hover:shadow-AADT-secondary-dark transition duration-150 ease-in-out ${isActive ? 'bg-AADT-secondary-dark' : 'bg-AADT-secondary-light'}`}>
                  <i className={`${navItem.icon} items-center flex`}></i>
                  <li>{navItem.name}</li>
                </div>
              )}
            </NavLink>
          ))}
          <div className='relative md:fixed md:justify-end-safe right-0 md:right-12'>
            <LogoutButton />
          </div>
        </ul>
      </div>
      <div onClick={()=>setShowMenu(!showMenu)} className='absolute flex md:hidden self-center right-8 text-lg text-AADT-blue'>
        <i className={`items-center flex transition duration-200 ease-in ff ${showMenu ? 'scale-80 fi-br-cross text-red-500' : 'scale-100 fi-br-menu-burger'}`}></i>
      </div>
    </div>
  )
}

export default Navbar