import React, { useState } from 'react'

import { connect } from 'react-redux'
import { addPost } from '../actions/postAction'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'

const PostForm = ({ addPost }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
  })

  const { title, author, content, date } = post

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !content) return M.toast({ html: 'Please fill the content.' })

    const newPost = {
      title,
      content,
      author: 'Tom',
      data: new Date(),
    }

    addPost(newPost)
    M.toast({ html: 'Posted' })
    M.Modal.getInstance(document.getElementById('modal1')).close()
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="input_text"
              name="title"
              type="text"
              data-length="20"
              value={title}
              onChange={handleChange}
            />
            <label htmlFor="input_text">Input text</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea2"
              name="content"
              className="materialize-textarea"
              data-length="120"
              value={content}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="textarea2">Textarea</label>
          </div>
        </div>
        <a className="waves-effect waves-light btn" onClick={handleSubmit}>
          Post!!
        </a>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
}

const mapStateToProps = null

export default connect(mapStateToProps, { addPost })(PostForm)
