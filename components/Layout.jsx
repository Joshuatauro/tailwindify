import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
const Layout = ({children}) => {
  return (
    <>
    <Head>
      <link href="/styles/Prism.css" rel="stylesheet" />
    </Head>
    <div className="font-inter">
      <div className="w-full bg-black text-white">
        <h1 className="text-sm py-2 flex justify-center">   
          This site is currently under development and hence not responsive
        </h1>
      </div>
      <Navbar />
      {children}
    </div>
    </>
  )
}

export default Layout
