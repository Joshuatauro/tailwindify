import React from 'react'
import {  ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
const ComponentPreview = ({name, numberOfComponents, url}) => {
  return (
    <article className="w-full py-2 bg-white rounded-md border border-gray-400 shadow-md transition-all duration-200 text-gray-900 hover:bg-indigo-600 hover:text-white">
      <Link href={`/components/${url}`}>
        <a>
          <div className="m-auto w-11/12">
            <div className="flex justify-between">
              <h1 className=" font-bold flex-grow">{name}</h1>
              <ArrowNarrowRightIcon className="h-5" />
            </div>
            <p className="text-sm">{numberOfComponents} components</p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ComponentPreview
