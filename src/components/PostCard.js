import React from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'

const PostCard = ({ post, removePost }) => {
  const { id, title, author, content, date } = post

  const handleClick = () => {
    removePost(id)
    M.toast({ html: `${title} has been deleted.` })
  }

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{author}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{content}</p>
            <p
              className="grey-text text-lighten-4"
              style={{ textAlign: 'right' }}
            >
              {date}
            </p>
          </div>
          <div className="card-action">
            <span className="grey-text text-lighten-4">This is a link</span>
            <span className="grey-text text-lighten-4">This is a link</span>
            <button
              style={{ float: 'right' }}
              className="waves-effect waves-light btn-small indigo"
              onClick={handleClick}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
