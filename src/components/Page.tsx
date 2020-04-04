import React from 'react'
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx } from '@emotion/core'

const Container = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto;
`

interface PageProps {
  children: React.ReactNode
}

const Page: React.FunctionComponent<PageProps> = ({ children }: PageProps) => (
  <Container>{children}</Container>
)

export default Page
