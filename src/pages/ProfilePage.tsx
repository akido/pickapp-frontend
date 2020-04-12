/** @jsx jsx */
import React from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { useAuth0 } from '../contexts/Auth0'

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

const avatarStyles = css`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  margin-bottom: 16px;
`

const ProfilePage: React.FunctionComponent = () => {
  const { logout, user } = useAuth0()

  return (
    <Page>
      <h1>Profile</h1>
      <div css={containerStyles}>
        <img src={user.picture} css={avatarStyles} alt="Profile" />
        <div css={emailStyles}>
          <b>Email: </b>
          {user.email}
        </div>
        <button css={buttonStyles} onClick={logout}>
          Log out
        </button>
      </div>
    </Page>
  )
}

export default ProfilePage
