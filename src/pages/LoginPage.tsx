/** @jsx jsx */
import React, { useState } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { useAuth0 } from '../contexts/Auth0'

const formStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    height: 52px;
    border: 2px solid black;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 16px;
    font-size: 16px;
  }
  button {
    height: 52px;
    font-size: 16px;
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const LoginPage: React.FunctionComponent = () => {
  const { loginWithRedirect } = useAuth0()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    loginWithRedirect()
  }

  return (
    <Page>
      <h1>Sign in</h1>
      <form css={formStyles} onSubmit={onSubmit}>
        <button type="submit">Log in</button>
      </form>
    </Page>
  )
}

export default LoginPage
