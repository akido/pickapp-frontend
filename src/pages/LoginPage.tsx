/** @jsx jsx */
import React, { useState, useContext } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { AuthContext } from '../contexts/Auth'
import { useHistory } from 'react-router-dom'

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
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const auth = useContext(AuthContext)
  const history = useHistory()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!email || !password) return
    const success = auth.login(email, password)
    if (success) history.push('/')
  }

  return (
    <Page>
      <h1>Sign in</h1>
      <form css={formStyles} onSubmit={onSubmit}>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button type="submit">Log in</button>
      </form>
    </Page>
  )
}

export default LoginPage
