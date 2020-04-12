/** @jsx jsx */
import React, { useState, useEffect, useContext } from 'react'
import { jsx } from '@emotion/core'
import createAuth0Client from '@auth0/auth0-spa-js'
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client'

interface Auth0ProviderProps {
  children: React.ReactNode
  onRedirectCallback: (appState: any) => void
}

interface AuthContextT {
  isAuthenticated: boolean
  user: any
  loading: boolean
  popupOpen: boolean
  loginWithPopup: (params: any) => void
  handleRedirectCallback: () => void
  getIdTokenClaims: () => void
  loginWithRedirect: (params?: any) => void
  getTokenSilently: () => void
  getTokenWithPopup: () => void
  logout: () => void
}

const DEFAULT_REDIRECT_CALLBACK = (): void =>
  window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext<AuthContextT>({
  isAuthenticated: false,
  user: {},
  loading: false, // or true?
  popupOpen: false, // or true?
  loginWithPopup: () => {
    /** */
  },
  handleRedirectCallback: () => {
    /** */
  },
  getIdTokenClaims: () => {
    /** */
  },
  loginWithRedirect: () => {
    /** */
  },
  getTokenSilently: () => {
    /** */
  },
  getTokenWithPopup: () => {
    /** */
  },
  logout: () => {
    /** */
  },
})

export const useAuth0 = (): AuthContextT => useContext(Auth0Context)

export const Auth0ContextProvider: React.FC<Auth0ProviderProps> = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}: Auth0ProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
  const [user, setUser] = useState<any>()
  const [auth0Client, setAuth0] = useState<Auth0Client>()
  const [loading, setLoading] = useState<boolean>(true)
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  useEffect(() => {
    const initAuth0 = async (): Promise<void> => {
      const auth0FromHook = await createAuth0Client(
        initOptions as Auth0ClientOptions
      )
      setAuth0(auth0FromHook)
      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }
      const isAuthenticated = await auth0FromHook.isAuthenticated()
      setIsAuthenticated(isAuthenticated)
      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()
        setUser(user)
      }
      setLoading(false)
    }
    initAuth0()
  }, [])

  const loginWithPopup = async (params = {}): Promise<void> => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async (): Promise<void> => {
    console.log('setting loading...')
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const user = await auth0Client.getUser()
    console.log(user)
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p): Promise<IdToken> =>
          auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p): Promise<void> =>
          auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p): Promise<any> =>
          auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p): Promise<string> =>
          auth0Client.getTokenWithPopup(...p),
        logout: (...p): void => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
