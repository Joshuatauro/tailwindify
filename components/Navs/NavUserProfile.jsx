import React from 'react'
import { BellIcon } from '@heroicons/react/outline'
const NavUserProfile = () => {
  return (
    <nav className="w-full dark:bg-gray-900">
      <div className="w-11/12 m-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-black dark:text-white ">Company</h1>
        <ul className="flex items-center">
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              About Us
            </a>
          </li>
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              Blog
            </a>
          </li>
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              Features
            </a>
          </li>
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
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              About Us
            </a>
          </li>
          <li className="font-medium mx-2">
            <a href="" className="border-b-2 transition-all duration-100 border-transparent dark:hover:border-gray-300 dark:text-gray-300 hover:border-gray-900">
              Support
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="focus:outline-none">
            <BellIcon className="h-6 text-indigo-600 mr-1" />
          </button>
          <button>

          <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-bearded-black-man-over-yellow-background-picture-id1184187261?k=6&m=1184187261&s=612x612&w=0&h=kAR9bRHxa9XqXCPeTCRZoEPGcgrDMiCqdjWaf7qLNgQ="  className="object-cover h-8 w-8 rounded-full"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavUserProfile
