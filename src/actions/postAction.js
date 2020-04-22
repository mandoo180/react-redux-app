import {
  GET_POSTS,
  SET_LOADING,
  POSTS_ERROR,
  ADD_POST,
  REMOVE_POST,
  SEARCH_POSTS,
} from './types'

export const setLoading = () => ({ type: SET_LOADING })

export const getPosts = () => async dispatch => {
  try {
    setLoading()
    const response = await fetch('/posts')
    const data = await response.json()
    dispatch({
      type: GET_POSTS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response.data,
    })
  }
}

export const addPost = post => async dispatch => {
  try {
    setLoading()
    const response = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    dispatch({
      type: ADD_POST,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response.data,
    })
  }
}

export const removePost = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/posts/${id}`, { method: 'DELETE' })
    // const response = await fetch(`/posts/${id}`, { method: 'DELETE' })
    // const data = await response.json()
    dispatch({
      type: REMOVE_POST,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response.data,
    })
  }
}

export const searchPosts = keyword => async dispatch => {
  try {
    setLoading()
    const response = await fetch(`/posts?q=${keyword}`)
    const data = await response.json()
    dispatch({
      type: SEARCH_POSTS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response.data,
    })
  }
}
