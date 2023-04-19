import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Solutions Supervisor</title>
        <meta property="og:title" content="Customer Solutions Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
