import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import PostCard from './PostCard'
import Button from './Button'
import AddPostModal from './AddPostModal'
import Spinner from './Spinner'

import { getPosts, removePost } from '../actions/postAction'

import PropTypes from 'prop-types'

const Posts = ({ post: { posts, loading }, getPosts, removePost }) => {
  useEffect(() => {
    getPosts()
  }, [])

  const postCards = posts.map(post => (
    <PostCard key={post.id} post={post} removePost={removePost} />
  ))

  const postJSX = (
    <div className="posts">
      <SearchBar />
      {postCards}
      <Button />
      <AddPostModal />
    </div>
  )

  return loading || !posts ? <Spinner /> : postJSX
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPosts, removePost })(Posts)
