import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

import Navbar from './components/Navbar'
import Posts from './components/Posts'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import AuthRoute from './routes/AuthRoute'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div
          style={{ marginTop: '4rem', marginBottom: '20rem' }}
          className="container"
        >
          <Switch>
            <Route exact path="/" component={Posts} />
            <AuthRoute exact path="/signin" component={SignIn} />
            <AuthRoute exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
