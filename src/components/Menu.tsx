/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineNotification,
} from 'react-icons/ai'

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  right: 16px;
  left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 26px;
    color: black;
  }
  .new-request {
    font-size: 26px;
    border-radius: 20px;
    padding: 4px 26px;
    color: white;
    background-color: #00a3ff;
    &:hover {
      background-color: #065c8c;
    }
  }
  a {
    padding: 8px;
    cursor: pointer;
    text-decoration: none;
  }
`

const Menu: React.FunctionComponent<any> = ({}: any) => (
  <Navigation>
    <Link to="/">
      <AiOutlineHome />
    </Link>
    <Link to="/my-errands">
      <AiOutlineShoppingCart />
    </Link>
    <Link to="/requests/new">
      <div className="new-request">+</div>
    </Link>
    <Link to="/my-requests">
      <AiOutlineNotification />
    </Link>
    <Link to="/profile">
      <AiOutlineUser />
    </Link>
  </Navigation>
)

export default Menu
