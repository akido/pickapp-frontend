/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '../contexts/Auth0'

interface PrivateRouteProps {
  children: React.ReactNode
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (loading || isAuthenticated) {
      return
    }
    const fn = async (): Promise<void> => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
      })
    }
    fn()
  }, [loading, isAuthenticated, loginWithRedirect, path])

  const render = (props: any): React.ReactNode =>
    isAuthenticated === true ? children : null

  return <Route path={path} render={render} {...rest} />
}

export default PrivateRoute
