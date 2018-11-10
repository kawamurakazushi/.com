import React from 'react'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Headline = styled('h1')`
  font-weight: 200;
`

const MePage = () => {
  return (
    <Layout>
      <Headline>ABOUT ME</Headline>
      <p>
        Hi, I'm Kazushi Kawamura working as a Software Engineer based in Tokyo.
      </p>
    </Layout>
  )
}

export default MePage
