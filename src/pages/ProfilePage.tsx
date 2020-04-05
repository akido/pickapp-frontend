/** @jsx jsx */
import React, { useContext } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { AuthContext } from '../contexts/Auth'

const ProfilePage: React.FunctionComponent = () => {
  const auth = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Page>
      <h1>Profile</h1>
      <div>Email: {user.email}</div>
      <button
        onClick={() => {
          auth.logout()
        }}
      >
        Log out
      </button>
    </Page>
  )
}

export default ProfilePage
