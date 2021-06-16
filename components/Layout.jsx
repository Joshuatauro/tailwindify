import React from 'react'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <div className="font-inter">
      <div className="w-full bg-black text-white">
        <h1 className="text-sm py-2 flex justify-center">   
          This site is currently under development and hence not responsive
        </h1>
      </div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
