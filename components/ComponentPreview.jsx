import React from 'react'
import {  ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const ComponentPreview = ({name, numberOfComponents, url}) => {
  return (
    <article className="w-full py-2 bg-white rounded-md shadow-md text-gray-300 hover:text-indigo-700">
      <Link href={`/components/${url}`}>
        <a>
          <div className="m-auto w-11/12">
            <div className="flex justify-between">
              <h1 className="text-gray-900 font-semibold hover:text-indigo-700 flex-grow transition-all duration-200">{name}</h1>
              <ArrowNarrowRightIcon className="h-5 text-gray-500" />
            </div>
            <p className="text-gray-500">{numberOfComponents} components</p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ComponentPreview
