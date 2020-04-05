/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'

const ProfilePage: React.FunctionComponent = () => {
  const [user, setUser] = useState<{
    email: string
  }>({
    email: '',
  }) // TODO: Define User model

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const user = JSON.parse(localStorage.getItem('user'))
      setUser(user)
    }
    fetchUser()
  })

  return (
    <Page>
      <h1>Profile</h1>
      <div>Email: {user.email}</div>
    </Page>
  )
}

export default ProfilePage
