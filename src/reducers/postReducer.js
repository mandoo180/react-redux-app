import {
  GET_POSTS,
  SET_LOADING,
  POSTS_ERROR,
  ADD_POST,
  REMOVE_POST,
  SEARCH_POSTS,
} from '../actions/types'

const defaultState = {
  posts: [],
  current: null,
  loading: false,
  error: null,
}

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
      }
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
    case SEARCH_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
        loading: false,
      }
    case POSTS_ERROR:
      console.log(payload)
      return {
        ...state,
        error: payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
