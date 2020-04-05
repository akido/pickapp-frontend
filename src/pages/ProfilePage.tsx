/** @jsx jsx */
import React from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'

const ProfilePage: React.FunctionComponent = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Page>
      <h1>Profile</h1>
      <div>Email: {user.email}</div>
    </Page>
  )
}

export default ProfilePage
