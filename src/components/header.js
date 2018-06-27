import React from 'react'
import Link from 'gatsby-link'

import pic from '../../assets/images/logo.png'

const Header = ({ siteTitle }) => (
  <div style={{}}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: 24,
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img
          style={{
            width: 40,
            height: 40,
            margin: 0,
          }}
          src={pic}
        />
      </Link>
    </div>
  </div>
)

export default Header
