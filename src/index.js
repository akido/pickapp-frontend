import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import { Auth0ContextProvider } from './contexts/Auth0'
import config from './config'
import history from './utils/history'
import './App.scss'

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

ReactDOM.render(
  <Auth0ContextProvider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0ContextProvider>,
  document.getElementById('root')
)
