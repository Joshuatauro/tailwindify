import React from 'react'
import ErrorButton from '../../components/Buttons/ErrorButton'
import IconRightButton from '../../components/Buttons/IconButton'
import OutlineButton from '../../components/Buttons/OutlineButton'
import SuccessButton from '../../components/Buttons/SuccessButton'
import ComponentDisplay from '../../components/ComponentDisplay'
const buttons = () => {
  const codeStrings = [
    `
  <button className="py-2 max-w-max text-white px-6 bg-green-600 rounded-md">
    Success
  </button>
  `,
    `
    <button className="py-2 max-w-max text-white px-6 bg-red-600 rounded-md">
    Error
  </button>
    `,
    `
  <button className="py-2 max-w-max text-white  px-6 bg-green-600 rounded-md">
    Success
  </button>
  `,
  `
  <button className="py-2 px-6 max-w-max bg-transparent border-2 flex items-center text-gray-900 dark:text-white hover:text-white rounded-md hover:bg-blue-600 duration-300 transition-all border-blue-600">
    <span className="mr-1 flex items-center font-black">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </span>
    Button
  </button>
  `
  ]
  return (
    <section className="w-full bg-whit dark:bg-gray-900 min-h-screen duration-500 transition-all">
      <div className="w-10/12 py-10 m-auto">
        <h1 className="text-3xl text-gray-900 dark:text-gray-100 font-black">Buttons</h1>

        <ComponentDisplay component={<SuccessButton />} componentName="Success button" codeString={codeStrings[0]} />
        <ComponentDisplay component={<ErrorButton />} componentName="Error button" codeString={codeStrings[1]} />
        <ComponentDisplay component={<OutlineButton />} componentName="Outlined button" codeString={codeStrings[2]} />
        <ComponentDisplay component={<IconRightButton />} componentName="Icon Right button" codeString={codeStrings[3]} />

      </div>
    </section>
  )
}

export default buttons
