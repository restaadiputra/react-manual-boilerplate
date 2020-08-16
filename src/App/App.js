import { hot } from 'react-hot-loader'
import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A simple react boilerplate without create-react-app</p>
      </header>
    </div>
  )
}

export default hot(module)(App)
