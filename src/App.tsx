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
import MyErrandsPage from './pages/MyErrandsPage'
import MyRequestsPage from './pages/MyRequestsPage'
import NewRequestPage from './pages/NewRequestPage'
import ProfilePage from './pages/ProfilePage'

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
        <PrivateRoute path="/requests/new" exact>
          <NewRequestPage />
        </PrivateRoute>
        <PrivateRoute path="/requests/:id" exact>
          <DetailsPage />
        </PrivateRoute>
        <PrivateRoute path="/my-errands">
          <MyErrandsPage />
        </PrivateRoute>
        <PrivateRoute path="/my-requests">
          <MyRequestsPage />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
