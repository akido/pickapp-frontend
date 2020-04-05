/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 480px;
  display: flex;
  justify-content: space-between;
  a {
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    text-decoration: none;
  }
`

const Menu: React.FunctionComponent<any> = ({}: any) => (
  <Navigation>
    <Link to="/">🏠</Link>
    <Link to="/my-errands">🛒</Link>
    <Link to="/requests/new">+</Link>
    <Link to="/my-requests">🙏🏻</Link>
    <Link to="/profile">🧍</Link>
  </Navigation>
)

export default Menu
