/** @jsx jsx */
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { jsx } from '@emotion/core'
import { AuthContext } from './contexts/Auth'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { isAuthenticated, isAuthenticating } = useContext(AuthContext)
  if (isAuthenticating) return <div>Loading...</div>
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
