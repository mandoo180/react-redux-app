import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  SET_LOADING,
  USERS_ERROR,
} from '../actions/types'

const defaultState = {
  user: {},
  authenticated: false,
  loading: false,
  error: null,
}

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case USERS_ERROR:
      return {
        ...state,
        error: payload,
      }
    case SIGN_UP:
      return {
        ...state,
        user: payload,
        authenticated: true,
        loading: false,
      }
    case SIGN_IN:
      return {
        ...state,
        user: payload,
        authenticated: true,
        loading: false,
      }
    case SIGN_OUT:
      return defaultState
    default:
      return state
  }
}
