import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/userAction'

const Navbar = ({ user: { user, authenticated }, signOut }) => {
  const authLinks = (
    <Fragment>
      <li>
        <a>{user.username}</a>
      </li>
      <li>
        <a onClick={() => signOut()}>Sign Out</a>
      </li>
    </Fragment>
  )
  console.log(user)
  console.log(authenticated)
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </Fragment>
  )

  return (
    <nav>
      <div className="nav-wrapper indigo">
        <a href="#" style={{ marginLeft: '2rem' }} className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {authenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, { signOut })(Navbar)
