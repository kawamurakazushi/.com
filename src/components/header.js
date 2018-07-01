import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpg'

const Container = styled('div')`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`

const Inner = styled('div')`
  display: flex;
  align-items: center;
  max-width: 960px;
  width: 960px;
  padding: 0px 1.0875rem;
`

const Img = styled('img')`
  width: 32px;
  margin: 0;
`

const Space = styled('div')`
  flex: 1;
`
const Avatar = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Img src={logo} />
      </Link>
      <Space />
      <Avatar src={avatar} />
    </Inner>
  </Container>
)

export default Header
