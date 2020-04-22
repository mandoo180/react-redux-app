import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/userAction'
import useForm from '../hooks/useForm'

import M from 'materialize-css/dist/js/materialize.min.js'

const SignIn = ({ signIn }) => {
  const [userInfo, bind] = useForm({
    email: '',
    password: '',
  })

  const { email, password } = userInfo

  const handleSubmit = e => {
    e.preventDefault()
    validate()
  }

  const validate = async () => {
    const error = await signIn(email, password)
    if (error) return M.toast({ html: error })
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              value={email}
              {...bind}
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              name="password"
              value={password}
              {...bind}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn indigo">Sign In</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, { signIn })(SignIn)
