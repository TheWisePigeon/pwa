import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta name='theme-color' content="#317EFB" />
          <title>Next.js PWA Example</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
