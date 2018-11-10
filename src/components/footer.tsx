import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`

const Inner = styled('div')`
  max-width: 960px;
  width: 960px;
  padding: 0px 1.0875rem;
`

const Content = styled('div')`
  display: flex;
  flex-direction: row-reverse;
`

const Text = styled('p')`
  font-size: 14px;
  color: gray;
`

const Header = ({}) => (
  <Container>
    <Inner>
      <hr />
      <Content>
        <Link to="/">
          <Text>kawamurakazushi.com</Text>
        </Link>
      </Content>
    </Inner>
  </Container>
)

export default Header
