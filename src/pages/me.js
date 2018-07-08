import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Headline = styled('h1')`
  font-weight: 200;
`

const MePage = () => {
  return (
    <div>
      <Headline>ABOUT ME</Headline>
      <p>
        Hi, I'm Kazushi Kawamura working as a Software Engineer based in Tokyo.
      </p>
    </div>
  )
}

export default MePage
