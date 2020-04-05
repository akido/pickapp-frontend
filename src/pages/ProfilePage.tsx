/** @jsx jsx */
import React, { useContext } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { AuthContext } from '../contexts/Auth'

const buttonStyles = css`
  height: 52px;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: black;
    color: white;
  }
`

const containerStyles = css`
  display: flex;
  flex-direction: column;
`

const emailStyles = css`
  font-size: 16px;
  margin-bottom: 16px;
`

const ProfilePage: React.FunctionComponent = () => {
  const auth = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Page>
      <h1>Profile</h1>
      <div css={containerStyles}>
        <div css={emailStyles}>
          <b>Email: </b>
          {user.email}
        </div>
        <button
          css={buttonStyles}
          onClick={() => {
            auth.logout()
          }}
        >
          Log out
        </button>
      </div>
    </Page>
  )
}

export default ProfilePage
