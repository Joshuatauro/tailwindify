import React from 'react'

const CenteredForm = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 duration-300 transition-all">
      <div className="w-11/12 md:w-9/12 lg:w-6/12 m-auto py-10">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Profile settings
        </h1>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">This information will be visible to everyone, please do not enter any sensitive information</p>

        <form className="mt-5 font-medium">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Username</label>
              <input type="text" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              <p className="text-xs text-gray-600 dark:text-gray-400">You can only change your username once, so choose wisely</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800  font-bold text-sm mb-1 dark:text-gray-300 ">About </label>
              <textarea type="text" className="w-full h-28 dark:bg-transparent dark:border-gray-700 dark:text-gray-300  py-1.5 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
              <p className="text-xs text-gray-600 dark:text-gray-400">How would you describe yourself</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Website URL</label>
              <input type="text" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">LinkedIn URL</label>
              <input type="text" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
          </div>
          <button className="w-auto px-8 bg-indigo-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Submit!</button>
        </form>

        <h1 className="text-xl font-bold mt-10 text-gray-900 dark:text-white">
          Personal information
        </h1>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">This information wont be visible to the public, instead it is used incase of emergencies related to the account</p>

        <form className="mt-5 font-medium">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">First name</label>
              <input type="text" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Last Name </label>
              <input type="text" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Email </label>
              <input type="email" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Country </label>
              <input type="email" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
          </div>
          <button className="w-auto px-8 bg-indigo-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Submit!</button>
        </form>

        <h1 className="text-xl font-bold mt-16 text-gray-900 dark:text-white">
          Reset password
        </h1>
        <form className="mt-5 font-medium">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Old password</label>
              <input type="password" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">New password </label>
              <input type="password" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-800 font-bold text-sm mb-1 dark:text-gray-300 ">Confirm new password </label>
              <input type="password" className="w-full py-1.5 dark:bg-transparent dark:text-gray-300 dark:border-gray-700 rounded-md outline-none focus:outline-none border border-gray-400 px-2 text-sm text-gray-800" />
            </div>
            
          </div>
          <button className="w-auto px-8 bg-red-600 hover:bg-opacity-95 duration-300 transition-all rounded-md text-white mt-3 py-2">Change password</button>

        </form>
      </div>
    </section>
  )
}

export default CenteredForm
