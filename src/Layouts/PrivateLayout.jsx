import React from 'react'
import Navbar from '../Components/Application/Navbar'
import Footer from '../Components/Application/Footer'

function PrivateLayout({ children }) {
  return (
    <div className='h-screen flex flex-col justify-between bg-AADT-secondary-light'>
        <Navbar />
        <main className='pt-30 w-[95%] md:w-[95%] mx-auto'>{children}</main>
        <Footer />
    </div>
  )
}

export default PrivateLayout