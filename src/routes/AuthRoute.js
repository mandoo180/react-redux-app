import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({
  user: { authenticated },
  component: Component,
  ...rest
}) => {
  const renderComponent = props => {
    return authenticated ? <Redirect to="/" /> : <Component {...props} />
  }

  return <Route {...rest} render={renderComponent} />
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(AuthRoute)
