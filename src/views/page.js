import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Travel Agency</title>
        <meta property="og:title" content="Page - Travel Agency" />
      </Helmet>
    </div>
  )
}

export default Page
