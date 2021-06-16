import React from 'react'

const index = () => {
  return (
    <section className="w-full min-h-screen py-5 bg-gray-200">
      <div className="w-full bg-white">
        <div className="w-6/12 m-auto py-10">
          <h1 className="text-xl font-bold text-gray-900">
            Profile settings
          </h1>
          <p className="text-sm font-medium text-gray-600">This information will be visible to everyone, please do not enter any sensitive information</p>

          <form className="mt-5 font-medium">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Username</label>
                <input type="text" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
                <p className="text-xs text-gray-600">You can only change your username once, so choose wisely</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">About </label>
                <textarea type="text" className="w-full h-28  py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
                <p className="text-xs text-gray-600">How would you describe yourself</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Website URL</label>
                <input type="text" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">LinkedIn URL</label>
                <input type="text" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
            </div>
            <button type="submit" className="w-auto px-8 bg-indigo-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Submit!</button>
          </form>

          <h1 className="text-xl font-bold mt-10 text-gray-900">
            Personal information
          </h1>
          <p className="text-sm font-medium text-gray-600">This information wont be visible to the public, instead it is used incase of emergencies related to the account</p>

          <form className="mt-5 font-medium">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">First name</label>
                <input type="text" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Last Name </label>
                <input type="text" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Email </label>
                <input type="email" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Country </label>
                <input type="email" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
            </div>
            <button type="submit" className="w-auto px-8 bg-indigo-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Submit!</button>
          </form>

          <h1 className="text-xl font-bold mt-16 text-gray-900">
            Reset password
          </h1>
          <form className="mt-5 font-medium">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Old password</label>
                <input type="password" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">New password </label>
                <input type="password" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 ">Confirm new password </label>
                <input type="password" className="w-full py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              </div>
              
            </div>
            <button type="submit" className="w-auto px-8 bg-red-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Change password</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default index
