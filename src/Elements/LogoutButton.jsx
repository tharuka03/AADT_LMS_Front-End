import React from 'react'

function LogoutButton() {
  return (
    <div className='flex select-none items-center gap-1.5 bg-red-100 text-red-500 border-2 border-red-100 px-3 py-2 rounded-md text-sm lg:text-md cursor-pointer transition duration-150 ease-in hover:border-red-500 active:scale-95'>
        <i className="items-center flex fi-rr-sign-out-alt"></i>
        <h2>Logout</h2>
    </div>
  )
}

export default LogoutButton