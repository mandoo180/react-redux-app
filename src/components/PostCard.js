import React from 'react'

const PostCard = ({ post }) => {
  const { title, author, content, date } = post
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{author}</p>
            <p>{content}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
            <a
              style={{ float: 'right' }}
              className="waves-effect waves-light btn-small"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
