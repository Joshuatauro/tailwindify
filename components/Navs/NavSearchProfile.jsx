import React from 'react'

const NavSearchProfile = () => {
  return (
    <nav className="w-full dark:bg-gray-900 flex items-center">
      <div className="w-11/12 mx-auto flex justify-between">
        <div className="flex flex-grow">
          <h1 className="text-3xl font-black dark:text-white mr-3 ">Company</h1>
          <input type="text" className="bg-transparent w-full border border-gray-400 dark:border-gray-700 rounded-md px-2 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-700" placeholder="Search..." />
        </div>
        <ul className="flex items-center">
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              Downloads
            </a>
          </li>
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              Pricing
            </a>
          </li>
          <li>
            <button className="flex items-center h-full">
              <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-bearded-black-man-over-yellow-background-picture-id1184187261?k=6&m=1184187261&s=612x612&w=0&h=kAR9bRHxa9XqXCPeTCRZoEPGcgrDMiCqdjWaf7qLNgQ="  className="object-cover h-8 w-8 rounded-full"/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavSearchProfile
