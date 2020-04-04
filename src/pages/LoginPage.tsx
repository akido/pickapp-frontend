import React, { useState } from 'react'

const LoginPage = (): React.FunctionComponentElement<{}> => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log('Sending a request for logging in...')
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />

      <button type="submit">Log in</button>
    </form>
  )
}

export default LoginPage
