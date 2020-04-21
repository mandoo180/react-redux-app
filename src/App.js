import React, { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

import Navbar from './components/Navbar'
import Posts from './components/Posts'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Navbar />
      <div style={{ marginTop: '4rem' }} className="container">
        <Posts />
      </div>
    </Provider>
  )
}

export default App
