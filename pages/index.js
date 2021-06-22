import Head from 'next/head'
import Link from 'next/link'
import { BriefcaseIcon, CodeIcon, SparklesIcon, ZoomInIcon } from '@heroicons/react/solid'
import ComponentPreview from '../components/ComponentPreview'
// import fs from 'fs'
export default function Home() {
  const dir = './components'

  const componentArray = [
    {
      name: "Navbars",
      numberOfComponents: 3,
      url: "navbar",
      
    },
    {
      name: "Sidebar Navs",
      numberOfComponents: 0,
      url: "sidebar-nav"
    },
    {
      name: "Avatars",
      numberOfComponents: 0,
      url: "avatars"
    },
    {
      name: "Pricing",
      numberOfComponents: 0,
      url: "pricing"
    },
    {
      name: "Teams",
      numberOfComponents: 0,
      url:"teams"
    },
    {
      name: "Newsletter",
      numberOfComponents: 0,
      url: "newsletter"
    },
    {
      name: "Forms",
      numberOfComponents: 2,
      url: "forms"
    },
    {
      name: "Buttons",
      numberOfComponents: 4,
      url: "buttons"
    },

  ]

  return (
    <>
      <section id="landing" className="bg-special">
        <div className="w-10/12 m-auto pt-20 pb-28">
          <h1 className="text-4xl font-black text-white">Build your projects at <span className="text-indigo-700">lightning</span><br /> fast pace</h1>
          <p className="text-gray-400 font-medium text-md mb-5 w-10/12">Tailwindify is a marketplace of <span className="text-gray-200">fully-responsive, customizable, completely free and most importantly dark-mode friendly </span> UI components and templates created with the help of TailwindCSS, no extra steps, just drag and drop the code into your projects, and build away!</p>
          <Link href="/preview">
            <a className="py-3 rounded-md font-bold text-white px-7 bg-gradient-to-tr from-indigo-700 to-blue-500">Show me</a>
          </Link>

          <div className="flex text-gray-300 font-medium text-sm mt-5 items-center">
            <BriefcaseIcon className="h-5 w-5 mr-1" />
            10 components
          </div>
        </div>
      </section>

      <section id="choose" className="bg-special pb-10">
        <div className="w-10/12 m-auto font-medium text-white">
          <h1 className="text-3xl text-white font-black">Why choose us?</h1>
          <ul className="grid grid-cols-3 gap-8 py-8">
            <li>
              <div className="flex">
                <SparklesIcon className="h-6 text-indigo-700 mr-2" />
                <h1>Easily customizable</h1>
              </div>
              <p className="text-gray-300 text-sm"  >We provide you the code so that you are not limited to the default style, this enables you to customize it to your hearts content</p>
            </li>
            <li>
              <div className="flex">
                <CodeIcon className="h-6 text-indigo-700 mr-2" />
                <h1>No major configurations</h1>
              </div>
              <p className="text-gray-300 text-sm"  >We save you the hassle of having to download yet another NPM package, instead you can just copy paste the code into your project</p>
            </li>
            <li>
              <div className="flex">
                <ZoomInIcon className="h-6 text-indigo-700 mr-2" />
                <h1>Completely responsive</h1>
              </div>
              <p className="text-gray-300 text-sm"  >We make sure that each and every component is 100% responsive and looks absolutely great at all screen resolutions</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="components" className="bg-white py-10 text-gray-900">
        <div className="w-10/12 m-auto font-medium text-white">
          <h1 className="text-3xl text-gray-900  font-black">Our components</h1>
          <p className="text-md font-medium text-gray-600">Get ready-made components for all kinds of stuff ranging from navigation bars, to pricing cards, forms, all the way to complete landing page kits, so that you can get up and running faster than ever </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {
              componentArray.sort((a,b) => b.numberOfComponents-a.numberOfComponents).map(({name, numberOfComponents, url}) => <ComponentPreview name={name} url={url} numberOfComponents={numberOfComponents} />)
            }
          </div>
        </div>

      </section>
    </>
  )
}
