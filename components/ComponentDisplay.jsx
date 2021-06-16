import React, { useEffect, useState } from 'react'

import { ClipboardIcon, EyeIcon } from '@heroicons/react/outline'
import { CodeIcon } from '@heroicons/react/solid'
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import htmlbars from 'react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);
const ComponentDisplay = ({componentName, component, codeString}) => {


  const [isViewingCode, setIsViewingCode] = useState(false)

  const copyToClipboard = () => {
    toast.success('🎊 Copied to clipboard', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <article className="w-full mt-10 duration-500 transition-all">
      <div className="flex justify-between items-center mb-2  ">
        <p className="text-md font-medium dark:text-gray-300  text-gray-700">
          {componentName}
        </p>
        <div className="flex items-center">
          {
            isViewingCode ? (
              <button onClick={e => setIsViewingCode(false)} className="py-2 focus:outline-none hover:bg-opacity-80 duration-100 transition-all rounded-sm px-2 bg-gray-700">
                <EyeIcon  className="h-5 w-5 text-white"/>
              </button>
            ) : (
              <button onClick={e => setIsViewingCode(true)} className="py-2 focus:outline-none hover:bg-opacity-80 duration-100 transition-all rounded-sm px-2 bg-gray-700">
                <CodeIcon className="h-5 w-5 text-white"/>
              </button>
            )
          }
          <CopyToClipboard text={codeString}>
            <button onClick={copyToClipboard}  className="py-2 mx-2 focus:outline-none hover:bg-opacity-80 duration-100 transition-all rounded-sm px-2 bg-gray-700">
              <ClipboardIcon  className="h-5 w-5 text-white"/>
            </button>
          </CopyToClipboard>
        </div>
      </div>

      
      
      {
        isViewingCode ? 
        (
          <SyntaxHighlighter language="htmlbars" style={docco} className="text-sm">
            {codeString}
          </SyntaxHighlighter>
        ) : 
        (
          <div className="w-full bg-gray-300 rounded-lg dark:bg-gray-700  border border-gray-400 dark:border-gray-600">
            <div className=" py-6  m-auto">
              {component}
            </div>
          </div>
        )
      }
    

      <ToastContainer position="bottom-right"
                      autoClose={1000}
                      hideProgressBar
                      newestOnTop
                      closeOnClick={true}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover />
    </article>
  )
}

export default ComponentDisplay
