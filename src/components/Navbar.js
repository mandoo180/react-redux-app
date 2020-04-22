import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/userAction'

const Navbar = ({ user: { user, authenticated }, signOut }) => {
  const authLinks = (
    <Fragment>
      <li>
        <a href="#">{user.username}</a>
      </li>
      <li>
        <a href="#" onClick={() => signOut()}>
          Sign Out
        </a>
      </li>
    </Fragment>
  )

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
        <Link to="/" style={{ marginLeft: '2rem' }} className="brand-logo">
          Logo
        </Link>
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
