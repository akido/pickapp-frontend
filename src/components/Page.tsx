/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import Menu from './Menu'

const Container = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto 32px;
`

interface PageProps {
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return (
    <Container>
      {children}
      <Menu />
    </Container>
  )
}

export default Page
