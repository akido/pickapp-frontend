import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import { AuthContextProvider } from './contexts/Auth'
import './App.scss'

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
)
