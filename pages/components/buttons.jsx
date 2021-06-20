import React from 'react'
import ErrorButton from '../../components/Buttons/ErrorButton'
import OutlineButton from '../../components/Buttons/OutlineButton'
import SuccessButton from '../../components/Buttons/SuccessButton'
import ComponentDisplay from '../../components/ComponentDisplay'
const buttons = () => {
  const codeStrings = [
    ` <button className="py-2 max-w-max text-white  px-6 bg-green-600  dark:bg-opacity-50 dark:hover:bg-opacity-100 duration-200 transition-all  rounded-md">
    Success
  </button>`,
    `<button className="py-2 max-w-max text-white  px-6 bg-red-600  dark:bg-opacity-50 dark:hover:bg-opacity-100 duration-200 transition-all  rounded-md">
    Error
  </button>
    `,
    ` <button className="py-2 px-6 max-w-max bg-transparent border text-gray-900 dark:text-white hover:text-white rounded-md hover:bg-indigo-600 duration-300 transition-all border-indigo-600">
    Button
  </button>`
  ]
  return (
    <section className="w-full bg-whit dark:bg-gray-900 min-h-screen duration-500 transition-all">
      <div className="w-10/12 py-10 m-auto">
        <h1 className="text-3xl text-gray-900 dark:text-gray-100 font-black">Buttons</h1>

        <ComponentDisplay component={<SuccessButton />} componentName="Success button" codeString={codeStrings[0]} />
        <ComponentDisplay component={<ErrorButton />} componentName="Error button" codeString={codeStrings[1]} />
        <ComponentDisplay component={<OutlineButton />} componentName="Outlined button" codeString={codeStrings[2]} />

      </div>
    </section>
  )
}

export default buttons
