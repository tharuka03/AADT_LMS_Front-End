import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function PrivateLayout({ children }) {
  return (
    <div className='h-screen flex flex-col justify-between bg-AADT-secondary-light'>
        <Navbar />
        <main className='pt-30 w-[80%] mx-auto'>{children}</main>
        <Footer />
    </div>
  )
}

export default PrivateLayout