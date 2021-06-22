import React from 'react'

const IconRightButton = () => {
  return (
    <button className="py-2 px-6 max-w-max bg-transparent border-2 flex items-center text-gray-900 dark:text-white hover:text-white rounded-md hover:bg-blue-600 duration-300 transition-all border-blue-600">
      <span className="mr-1 flex items-center font-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </span>
      Button
    </button>
  )
}

export default IconRightButton
