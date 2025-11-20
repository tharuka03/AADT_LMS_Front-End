import React from 'react'

function LoadingPage() {
  return (
    <div className='bg-AADT-blue w-full h-screen flex gap-2 justify-center items-center'>
        <h1 className='text-white text-4xl font-thin'>Loading</h1>
        <div className='text-white w-10 aspect-square animate-spin ease-in-out border-4 border-b-AADT-white-50 border-white rounded-[200px]'></div>
    </div>
  )
}

export default LoadingPage