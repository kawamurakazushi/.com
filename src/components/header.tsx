import * as React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpg'

const Header = () => (
  <div className="flex justify-center py-4">
    <div className="flex items-center max-w-5xl w-4/5">
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img className="w-10 h-10" src={logo} />
      </Link>
      <div className="flex-1" />
      <Link to="/me">
        <img className="w-10 h-10 rounded-full" src={avatar} />
      </Link>
    </div>
  </div>
)

export default Header
