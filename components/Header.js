import React from 'react'
import Head from 'next/head'
import Meta from './Meta'

const Header = ({ title }) => {
  return (
    <Head>
      <title>{ title }</title>
      <Meta />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
    </Head>
  )
}

export default Header