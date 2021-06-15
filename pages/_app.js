import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Tailwindify</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
