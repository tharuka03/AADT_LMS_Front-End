import React from 'react'

function CourseFilter({search, setSearch}) {

    const status = ["All", "Completed", "In Progress"];

    console.log(search);

  return (
    <div className='w-full'>
        <ul className='flex gap-2 justify-center'>
            {status.map((item) => (
                <li onClick={() => setSearch(item)} key={item} className={`border text-center text-sm px-3 py-1 rounded-sm cursor-pointer transition duration-300 ease-in-out ${search === item ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"}`}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default CourseFilter