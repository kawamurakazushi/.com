import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import pic from '../../assets/images/logo.png'

const Container = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  padding: 24px;
`

const Img = styled('img')`
  width: 40px;
  height: 40px;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <Img src={pic} />
    </Link>
  </Container>
)

export default Header
