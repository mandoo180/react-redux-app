import React from 'react'

const Button = props => {
  return (
    <a
      href="#modal1"
      style={{ float: 'right' }}
      className="btn-floating btn-large waves-effect waves-light indigo modal-trigger"
    >
      <i className="material-icons">add</i>
    </a>
  )
}

export default Button
