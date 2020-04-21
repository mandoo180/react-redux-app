import React from 'react'

const Button = props => {
  const buttonStyle = {
    float: 'right',
  }
  return (
    <a
      href="#modal1"
      style={buttonStyle}
      className="btn-floating btn-large waves-effect waves-light red modal-trigger"
    >
      <i className="material-icons">add</i>
    </a>
  )
}

export default Button
