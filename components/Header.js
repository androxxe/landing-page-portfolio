import React from 'react'
import Head from 'next/head'
import Meta from './Meta'

const Header = ({ title }) => {
  return (
    <Head>
      <title>{ title }</title>
      <Meta />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;0,900;1,300&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default Header