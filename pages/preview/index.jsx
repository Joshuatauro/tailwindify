import React from 'react'

const index = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 duration-300 transition-all">
      <div className="w-10/12 m-auto text-white py-10 grid gap-3">
        <button className="py-2 max-w-max  px-6 bg-green-600  dark:bg-opacity-50 dark:hover:bg-opacity-100 duration-200 transition-all  rounded-md">
          Success
        </button>
        <button className="py-2 max-w-max  px-6 bg-red-600 dark:bg-opacity-50 dark:hover:bg-opacity-100 duration-200 transition-all  rounded-md">
          Error
        </button>
        <button className="py-2 px-6 max-w-max bg-transparent border text-gray-900 dark:text-white hover:text-white rounded-md hover:bg-indigo-600 duration-300 transition-all border-indigo-600">
          Button
        </button>
      </div>
    </section>
    
  )
}

export default index
