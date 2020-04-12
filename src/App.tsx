/** @jsx jsx */
import { Switch, Route, Router } from 'react-router-dom'
import { jsx } from '@emotion/core'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import MyErrandsPage from './pages/MyErrandsPage'
import MyRequestsPage from './pages/MyRequestsPage'
import NewRequestPage from './pages/NewRequestPage'
import ProfilePage from './pages/ProfilePage'
import { useAuth0 } from './contexts/Auth0'
import history from './utils/history'
import PrivateRoute from './components/PrivateRoute'

const App = (): JSX.Element => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Router history={history}>
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
