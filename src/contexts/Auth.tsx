/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx } from '@emotion/core'

interface AuthContextProviderProps {
  children: React.ReactNode
}

interface AuthContextT {
  isAuthenticating: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const fakeAuthTimeout = 300

const defaultContext = {
  isAuthenticating: true,
  isAuthenticated: false,
  login: (email: string, password: string): boolean => {
    return
  },
  logout: (): void => {
    return
  },
}

const AuthContext = React.createContext<AuthContextT>(defaultContext)

const AuthContextProvider: React.FunctionComponent<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(
    defaultContext.isAuthenticating
  )
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    defaultContext.isAuthenticated
  )

  useEffect(() => {
    const user = localStorage.getItem('user')
    const { email, password } = user
      ? JSON.parse(user)
      : { email: null, password: null }

    // console.log(email, password)
    if (email && password) {
      setIsAuthenticated(true)
    }
    setIsAuthenticating(false)
  })

  const login = (email: string, password: string): boolean => {
    // setTimeout(() => {
    // fake login
    setIsAuthenticating(true)
    localStorage.setItem('user', JSON.stringify({ email, password }))
    const success = true
    setIsAuthenticating(false)
    setIsAuthenticated(true)
    return success
    // }, fakeAuthTimeout)
  }

  const logout = (): void => {
    // setTimeout(() => {
    localStorage.clear()
    setIsAuthenticated(false)
    // }, fakeAuthTimeout)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticating, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
