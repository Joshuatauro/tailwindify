import React from 'react'
import ComponentDisplay from '../../components/ComponentDisplay'
import NavAuth from '../../components/Navs/NavAuth'
import NavSearchProfile from '../../components/Navs/NavSearchProfile'
import NavUserProfile from '../../components/Navs/NavUserProfile'

const navbar = () => {
  const codeStrings = [
    ` <nav className="w-full dark:bg-gray-900 bg-white duration-500 transition-all ">
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
  </nav>`,
    ` <nav className="w-full dark:bg-gray-900">
    <div className="w-11/12 py-5 m-auto flex justify-between items-center h-full">
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
  </nav>`,
    ` <nav className="w-full dark:bg-gray-900 flex items-center">
    <div className="w-11/12 py-5 mx-auto flex justify-between">
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
  </nav>`
  ]
  return (
    <section className="w-full bg-whit dark:bg-gray-900 min-h-screen duration-500 transition-all">
      <div className="w-10/12 py-10 m-auto">
        <h1 className="text-3xl text-gray-900 dark:text-gray-100 font-black">Navbar</h1>

        <ComponentDisplay component={<NavAuth />} componentName="Simple Navbar with Authentication buttons" codeString={codeStrings[0]} />
        <ComponentDisplay component={<NavUserProfile />} componentName="Simple Navbar with User profile image" codeString={codeStrings[1]} />
        <ComponentDisplay component={<NavSearchProfile />} componentName="Simple Navbar with Search bar and User profile" codeString={codeStrings[2]} />

      </div>
    </section>
  )
}

export default navbar
