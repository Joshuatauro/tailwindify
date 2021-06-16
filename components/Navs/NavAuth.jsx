import React from 'react'

const NavAuth = () => {
  return (
    <nav className="w-full dark:bg-gray-900 bg-white duration-500 transition-all ">
      <div className="w-11/12 py-5 m-auto flex justify-between items-center ">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white ">Company</h1>
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

        <ul className="flex items-center">
          <li className="mr-3">
            <button className="py-2 px-5 rounded-md bg-transparent hover:bg-gray-900 hover:text-white transition-all duration-300 border-2 border-gray-900 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-black">Login</button>
          </li>
          <li>
            <button className="py-2 px-5 rounded-md text-white hover:bg-opacity-95 transition-all duration-300 bg-gray-900 dark:bg-gray-300 dark:text-black">SignUp</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavAuth
