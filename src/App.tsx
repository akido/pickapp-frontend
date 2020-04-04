/** @jsx jsx */
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom'
import { jsx } from '@emotion/core'
import { AuthContext } from './contexts/Auth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { isAuthenticated, isAuthenticating } = useContext(AuthContext)
  if (isAuthenticating) return <div>Loading...</div>
  return (
    <Route
      {...rest}
      render={({ location }): React.ReactNode =>
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
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/requests/:id">
          <DetailsPage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
