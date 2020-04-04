import React, { useState } from 'react'
import styled from '@emotion/styled'

const Page = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto;
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      height: 52px;
      border: 2px solid black;
      /* border-radius: 4px; */
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
  }
`

const LoginPage = (): React.FunctionComponentElement<{}> => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log('Sending a request for logging in...')
  }

  return (
    <Page>
      <h1>Sign in</h1>
      <form className="form" onSubmit={onSubmit}>
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
