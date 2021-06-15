import React from 'react'
import { BellIcon } from '@heroicons/react/outline'
import NavSearchProfile from '../../components/Navs/NavSearchProfile'
import NavAuth from '../../components/Navs/NavAuth'
import NavUserProfile from '../../components/Navs/NavUserProfile'
const index = () => {
  return (
    <div className="grid grid-rows-3 gap-5 mt-5">
      <NavSearchProfile />
      <NavAuth />
      <NavUserProfile />
    </div>
  )
}

export default index
