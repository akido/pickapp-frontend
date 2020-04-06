/** @jsx jsx */
import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import Menu from './Menu'
import { AuthContext } from '../contexts/Auth'

const Container = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto 32px;
`

interface PageProps {
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = ({ children }: PageProps) => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Container>
      {children}
      {isAuthenticated && <Menu />}
    </Container>
  )
}

export default Page
