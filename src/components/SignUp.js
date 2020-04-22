import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/userAction'
import useForm from '../hooks/useForm'

import M from 'materialize-css/dist/js/materialize.min.js'

const SignUp = ({ user: { error }, signUp }) => {
  console.log(error)
  const [userInfo, bind] = useForm({
    username: '',
    email: '',
    password1: '',
    password2: '',
  })

  const { username, email, password1, password2 } = userInfo

  const handleSubmit = e => {
    e.preventDefault()
    validate()
  }

  const validate = async () => {
    if (password1 !== password2) return console.log('passwords are not matched')
    const newUser = {
      username,
      email,
      password: password1,
      joinedAt: new Date(),
    }
    const error = await signUp(newUser)
    if (error) return M.toast({ html: error })
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="username"
              type="text"
              className="validate"
              name="username"
              value={username}
              {...bind}
              autoComplete="off"
            />
            <label htmlFor="username">Username</label>
          </div>
        </div>
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
              id="password1"
              type="password"
              className="validate"
              name="password1"
              value={password1}
              {...bind}
            />
            <label htmlFor="password1">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password2"
              type="password"
              className="validate"
              name="password2"
              value={password2}
              {...bind}
            />
            <label htmlFor="password2">Password Confirm</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn indigo">Sign Up</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, { signUp })(SignUp)
