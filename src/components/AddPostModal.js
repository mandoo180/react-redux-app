import React from 'react'

import PostForm from './PostForm'

const AddPostModal = props => {
  return (
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <PostForm />
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Leave
        </a>
      </div>
    </div>
  )
}

export default AddPostModal
